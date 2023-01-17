import { Component, OnInit} from '@angular/core';
import {GoogleAuthService} from '../../shared/services/google-auth.service';
import {SimpleRequest} from '../../shared/model/simple-request';
import {StudentColumns} from '../../shared/model/student-columns';
import {StudentParserService} from '../../shared/services/student-parser.service';
import {StudentFilterService} from '../../shared/services/student-filter.service';
import * as moment from 'moment';
import {NgbDate} from '@ng-bootstrap/ng-bootstrap';
import '../../../assets/js/smtp.js';


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
    googleSheetAccessToken;
    googleSheetRange = 'A2:CM1500';
    selectedStudentRows: any [];
    trainingSelectItems = [];
    selectedTraining: any;
    trainingInviteEmails: string[];
    trainingDate = moment();
    signedInEmailAddress: string;
    inputExcelCode: string;
    giveNewExcelCode = false;
    excelLoadError: boolean;
    saveExcelSuccess = false;
    defaultColDef: any;


    constructor(public gdata: GoogleAuthService,
                public gauth: GoogleAuthService,
                private studentParserService: StudentParserService,
                private studentFilterService: StudentFilterService) {
        window.onSignIn = (googleUser) => this.onSignIn(googleUser);

    }

    ngOnInit() {
        this.generateColumns();
        this.model.sheetId = this.googleSheetAccessToken;
        this.model.range = this.googleSheetRange;
        this.loadSheetData();
        this.generateTrainingSelectItems(StudentColumns.generateColumns());
        if (localStorage.getItem('excelCode')) {
            this.inputExcelCode = localStorage.getItem('excelCode');
            this.googleSheetAccessToken = localStorage.getItem('excelCode');
        }
        this.defaultColDef = {
            resizable: true,
            sortable: true,
            filter: true
        };
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
    }

    public async signOut() {
        await this.gdata.signOut();
        this.isSignedIn = this.gdata.isSignedIn;
        this.googleDisplay = this.gdata.googleDisplay;
    }

    async loadSheetData() {
        this.isLoading = true;
        this.output = "Processing submission...";
        await this.gauth.loadClient();
        await this.gauth.loadSheetsAPI();
        gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: this.googleSheetAccessToken,
            range: this.model.range
        }).then((response) => {
            this.isLoading = false;
            this.output = "Data found: \n";
            this.rows = this.origRows = this.studentParserService.parseRawSheetData(response.result.values);
            this.excelLoadError = false;
        }, (error) => {
            this.excelLoadError = true;
        });
    }

    onTrainingSelect($event: any) {
        this.rows = this.studentFilterService.filterDataByLevel($event.value, this.origRows, this.trainingDate);
        this.trainingInviteEmails = this.rows?.map(item => item._email);
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

    onDateSelect($event: NgbDate) {
        this.trainingDate = moment($event.year + '-' + $event.month + '-' + $event.day, "YYYY-MM-DD");
    }

    saveExcelCode() {
        localStorage.setItem('excelCode', this.inputExcelCode);
        this.giveNewExcelCode = false;
        this.saveExcelSuccess = true;
    }

    newExcelCode() {
        this.giveNewExcelCode = true;
    }

    copyInputMessage(userinput: any) {
        userinput.value = userinput.value.trim();
        userinput.select();
        document.execCommand('copy');
        userinput.setSelectionRange(0, 0);
    }
}
