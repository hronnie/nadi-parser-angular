import { Injectable, EventEmitter } from '@angular/core';
import { JsLoaderService } from './js-loader.service';
import {global} from '@angular/compiler/src/util';

declare global {
    var gapi;
}

@Injectable({
    providedIn: 'root'
})
export class GoogleAuthService {
    public platformJsFile = "https://apis.google.com/js/platform.js";
    public isSignedIn = false;
    public googleDisplay = "block";
    public googleUser: any;
    public signIn: EventEmitter<void> = new EventEmitter<void>();
    public signedOut: EventEmitter<void> = new EventEmitter<void>();

    constructor(public loader: JsLoaderService) {
        this.loader.loadjs(this.platformJsFile).then(() => {
            // file loaded
        });
    }

    public onSignIn(googleUser) {
        this.googleUser = googleUser;
        this.isSignedIn = true;
        this.googleDisplay = "none";
        this.signIn.emit();
    }

    public async signOut() {
        const auth2 = gapi.auth2.getAuthInstance();
        await auth2.signOut().then(() => {
            this.isSignedIn = false;
            this.googleDisplay = "block";
            this.signedOut.emit();
        });
    }

    public async loadClient() {
        const clientPromise$ = new Promise<void>((resolve) => {
            debugger;
            gapi.load("client", () => {
                    resolve();
                },
                (error) => {
                    console.log("Error loading client: "
                        + JSON.stringify(error));
                });
        });
        return clientPromise$;
    }

    public async loadSheetsAPI() {
        const clientPromise$ = new Promise<void>((resolve) => {
            gapi.client.load(
                'https://sheets.googleapis.com/$discovery/rest?version=v4')
                .then(() => {
                        resolve();
                    },
                    (error) => {
                        console.log("Error loading SheetsAPI: "
                            + JSON.stringify(error));
                    });
        });
        return clientPromise$;
    }
}
