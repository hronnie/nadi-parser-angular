import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {GoogleAuthService} from '../../shared/services/google-auth.service';
import {SimpleRequest} from '../../shared/model/simple-request';
import {StudentColumns} from '../../shared/model/student-columns';
import {StudentParserService} from '../../shared/services/student-parser.service';
import {StudentFilterService} from '../../shared/services/student-filter.service';
import {XLS_FIELD_NAMES} from '../../shared/model/level-consts';

declare global {
    interface Window { onSignIn: (googleuser: any) => void; }
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html',
    styleUrls: ['table.component.scss']
})
export class TableComponent implements OnInit {
    public isSignedIn = false;
    public googleDisplay = "block";
    public model = new SimpleRequest();
    public output: string;

    private gridApi;
    private gridColumnApi;

    isLoading = false;
    rows = [];
    origRows = [];
    columns = [];
    googleSheetAccessToken = '1iYSCV_2HwzyTD2QIRqEmkQTSEB54qteAAyzFWb1DemY'; // test data
    // googleSheetAccessToken = '1D3zG11p9T2JUBWZa7ubi-a-FXe14BAEgEN9_Dx2UyGo'; // orig data
    googleSheetRange = 'A2:CK984';
    selectedRows: any [];
    trainingSelectItems = [];
    selectedTraining: any;
    trainingInviteEmails: string[];

    constructor(public gdata: GoogleAuthService,
                private cd: ChangeDetectorRef,
                public gauth: GoogleAuthService,
                private studentParserService: StudentParserService,
                private studentFilterService: StudentFilterService) {
        window.onSignIn = (googleUser) => this.onSignIn(googleUser);
        this.output = "Enter a spreadsheet id and range then press submit. "
            + "Ensure that third-party cookies are enabled in your browser settings.";
    }

    ngOnInit() {
        this.generateColumns();
        this.model.sheetId = this.googleSheetAccessToken;
        this.model.range = this.googleSheetRange;
        this.loadSheetData();
        this.generateTrainingSelectItems(StudentColumns.generateColumns());
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }

    onSelectionChanged() {
        this.selectedRows = this.gridApi.getSelectedRows();
    }

    generateColumns() {
        this.columns = StudentColumns.generateColumns();
    }

    onSignIn(googleUser) {
        this.gdata.onSignIn(googleUser);
        this.isSignedIn = this.gdata.isSignedIn;
        this.googleDisplay = this.gdata.googleDisplay;
        this.cd.detectChanges();
    }

    public async signOut() {
        await this.gdata.signOut();
        this.isSignedIn = this.gdata.isSignedIn;
        this.googleDisplay = this.gdata.googleDisplay;
        this.cd.detectChanges();
    }

    async loadSheetData() {
        this.isLoading = true;
        this.output = "Processing submission...";
        await this.gauth.loadClient();
        await this.gauth.loadSheetsAPI();

        gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: this.model.sheetId,
            range: this.model.range
        }).then((response) => {
            this.isLoading = false;
            this.output = "Data found: \n";
            this.rows = this.origRows = this.studentParserService.parseRawSheetData(response.result.values);
            for (const value of response.result.values) {
                this.output += value + "\n";
            }
            this.cd.detectChanges();
        }, (error) => {
            this.output = "Error: \n";
            this.output += error.result.error.message + "\n";
            this.cd.detectChanges();
        });
    }

    onTrainingSelect($event: any) {
        this.rows = this.studentFilterService.filterDataByLevel($event.value, this.origRows);
        this.trainingInviteEmails = this.rows?.map(item => item._email);
    }

    private generateTrainingSelectItems(studentColumns: any) {
        const levelColumns = studentColumns.filter(item => !item.field.startsWith('_'));
        this.trainingSelectItems = levelColumns.map(item => {
            return {
                name: item.field !== XLS_FIELD_NAMES.LEVEL_ONE ?  item.headerName + ' tanfolyam' : 'Összes tanfolyam',
                value: item.field !== XLS_FIELD_NAMES.LEVEL_ONE ? item.field : XLS_FIELD_NAMES.LEVEL_ALL
            }
        })
    }
}
