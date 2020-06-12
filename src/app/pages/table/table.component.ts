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

    async onSubmit() {
        this.isLoading = true;
        this.output = "Processing submission...";
        await this.gauth.loadClient();
        await this.gauth.loadSheetsAPI();

        // @ts-ignore
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
}
