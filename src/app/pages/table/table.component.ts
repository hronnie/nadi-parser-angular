import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {GoogleAuthService} from '../../shared/services/google-auth.service';
import {SimpleRequest} from '../../shared/model/simple-request';
import {StudentColumns} from '../../shared/model/student-columns';
import {StudentParserService} from '../../shared/services/student-parser.service';
import {StudentFilterService} from '../../shared/services/student-filter.service';
import {XLS_FIELD_NAMES} from '../../shared/model/level-consts';
import * as moment from 'moment';
import {NgbDate} from '@ng-bootstrap/ng-bootstrap';
import {AngularEditorConfig} from '@kolkov/angular-editor';

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
    googleSheetRange = 'A2:CM984';
    selectedStudentRows: any [];
    trainingSelectItems = [];
    selectedTraining: any;
    trainingInviteEmails: string[];
    trainingDate = moment();
    templateUrlMap: Map<string, string>;
    selectedTemplateUrl: string;
    emailTemplateHtmlContent: string;
    editorConfig: AngularEditorConfig = {
        editable: true,
        spellcheck: true,
        height: '15rem',
        minHeight: '5rem',
        placeholder: 'Ide másold be a szöveget',
        translate: 'no',
        defaultParagraphSeparator: 'p',
        defaultFontName: 'Arial',
        toolbarHiddenButtons: [
            ['bold']
        ],
        customClasses: [
            {
                name: "quote",
                class: "quote",
            },
            {
                name: 'redText',
                class: 'redText'
            },
            {
                name: "titleText",
                class: "titleText",
                tag: "h1",
            },
        ]
    };

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
        this.selectedStudentRows = this.gridApi.getSelectedRows();
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
            this.populateTemplateUrlArray(response.result.values);
            this.cd.detectChanges();
        }, (error) => {
            this.output = "Error: \n";
            this.output += error.result.error.message + "\n";
            this.cd.detectChanges();
        });
    }

    populateTemplateUrlArray(rawValues: any[][]) {
        this.templateUrlMap = new Map<string, string>();
        this.templateUrlMap.set(XLS_FIELD_NAMES.LEVEL_TWO, rawValues[1][90]);
        this.templateUrlMap.set(XLS_FIELD_NAMES.LEVEL_THREE, rawValues[2][90]);
        this.templateUrlMap.set(XLS_FIELD_NAMES.LEVEL_THREE_C, rawValues[3][90]);
        this.templateUrlMap.set(XLS_FIELD_NAMES.LEVEL_FOUR_A, rawValues[4][90]);
        this.templateUrlMap.set(XLS_FIELD_NAMES.LEVEL_FOUR_B, rawValues[5][90]);
        this.templateUrlMap.set(XLS_FIELD_NAMES.LEVEL_FOUR_B_2, rawValues[6][90]);
        this.templateUrlMap.set(XLS_FIELD_NAMES.LEVEL_FIVE, rawValues[7][90]);
        this.templateUrlMap.set(XLS_FIELD_NAMES.LEVEL_SIX, rawValues[8][90]);
        this.templateUrlMap.set(XLS_FIELD_NAMES.LEVEL_SEVEN, rawValues[9][90]);
        this.templateUrlMap.set(XLS_FIELD_NAMES.LEVEL_EIGHT_1, rawValues[10][90]);
        this.templateUrlMap.set(XLS_FIELD_NAMES.LEVEL_UTI_1, rawValues[11][90]);
        this.templateUrlMap.set(XLS_FIELD_NAMES.LEVEL_UTI_2, rawValues[12][90]);
        this.templateUrlMap.set(XLS_FIELD_NAMES.LEVEL_UTI_3, rawValues[13][90]);
        this.templateUrlMap.set(XLS_FIELD_NAMES.LEVEL_UTI_3_PLUS, rawValues[14][90]);
        this.templateUrlMap.set(XLS_FIELD_NAMES.LEVEL_UTI_4, rawValues[15][90]);
        this.templateUrlMap.set(XLS_FIELD_NAMES.LEVEL_TK_1, rawValues[16][90]);
        this.templateUrlMap.set(XLS_FIELD_NAMES.LEVEL_TK_2, rawValues[17][90]);
        this.templateUrlMap.set(XLS_FIELD_NAMES.LEVEL_TK_3, rawValues[18][90]);
        this.templateUrlMap.set(XLS_FIELD_NAMES.LEVEL_TK_4, rawValues[19][90]);
    }

    onTrainingSelect($event: any) {
        this.rows = this.studentFilterService.filterDataByLevel($event.value, this.origRows, this.trainingDate);
        this.trainingInviteEmails = this.rows?.map(item => item._email);
        this.selectedTemplateUrl = this.templateUrlMap.get($event.value);
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

    onDateSelect($event: NgbDate) {
        this.trainingDate = moment($event.year + '-' + $event.month + '-' + $event.day, "YYYY-MM-DD");
    }
}
