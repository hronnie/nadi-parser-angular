import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {GoogleAuthService} from '../../shared/services/google-auth.service';
import {SimpleRequest} from '../../shared/model/simple-request';
import {StudentColumns} from '../../shared/model/student-columns';
import {StudentParserService} from '../../shared/services/student-parser.service';
import {TrainingTypes} from '../../shared/model/training-types';

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
    columns = [];
    googleSheetAccessToken = '1D3zG11p9T2JUBWZa7ubi-a-FXe14BAEgEN9_Dx2UyGo';
    googleSheetRange = 'A2:CK984';
    selectedRows: any [];
    trainingSelectItems = [];
    selectedTraining: any;

    constructor(public gdata: GoogleAuthService,
                private cd: ChangeDetectorRef,
                public gauth: GoogleAuthService,
                private studentParserService: StudentParserService) {
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
        this.rows = [{col1: 'col 1 value', col2: 'col 2 value'}];
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
            this.rows = this.studentParserService.parseRawSheetData(response.result.values) ;
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
        console.log($event);
        debugger;
    }

    private generateTrainingSelectItems(studentColumns: any) {
        const levelColumns = studentColumns.filter(item => !item.field.startsWith('_'));
        this.trainingSelectItems = levelColumns.map(item => {
            return {
                name: item.headerName + ' tanfolyam',
                value: item.field
            }
        })
    }
}
