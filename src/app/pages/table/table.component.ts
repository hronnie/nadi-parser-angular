import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {GoogleAuthService} from '../../shared/services/google-auth.service';
import {SimpleRequest} from './simple-request';
import {StudentColumns} from './StudentColumns';

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

    rows = [];
    columns = [];

    constructor(public gdata: GoogleAuthService,
                private cd: ChangeDetectorRef,
                public gauth: GoogleAuthService) {
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
        this.output = "Processing submission...";
        await this.gauth.loadClient();
        await this.gauth.loadSheetsAPI();

        // @ts-ignore
        gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: this.model.sheetId,
            range: this.model.range
        }).then((response) => {
            this.output = "Data found: \n";
            debugger;
            this.rows = response.result.values.map(itemArray => {
                return {
                    name: itemArray[0],
                    postalCode: itemArray[1],
                    city: itemArray[2]
                };
            });
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
