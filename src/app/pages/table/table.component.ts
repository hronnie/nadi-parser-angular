import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {GoogleAuthService} from '../../shared/services/google-auth.service';
import {SimpleRequest} from './simple-request';
import {StudentColumns} from './StudentColumns';
import {StudentParserService} from './student-parser.service';
import {ColumnMode} from '@swimlane/ngx-datatable';

declare global {
    interface Window { onSignIn: (googleuser: any) => void; }
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})
export class TableComponent implements OnInit {
    public isSignedIn = false;
    public googleDisplay = "block";

    public model = new SimpleRequest();
    public output: string;
    isLoading = false;
    rows = [];
    columns = [];
    ColumnMode = ColumnMode;
    googleSheetAccessToken = '1D3zG11p9T2JUBWZa7ubi-a-FXe14BAEgEN9_Dx2UyGo';
    googleSheetRange = 'A2:CK984';




    columnDefs = [
        {headerName: 'Make', field: 'make' },
        {headerName: 'Model', field: 'model' },
        {headerName: 'Price', field: 'price'}
    ];

    rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];



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
            this.rows = [{col1: 'col 1 value', col2: 'col 2 value'}];
            // this.rows = this.studentParserService.parseRawSheetData(response.result.values) ;
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
}
