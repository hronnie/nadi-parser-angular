import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GoogleAuthService} from '../../shared/services/google-auth.service';
import {SimpleRequest} from './simple-request';
// import { AuthService, SocialUser } from "angularx-social-login";
// import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";


declare global {
    interface Window { onSignIn: (googleuser: any) => void; }
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})
export class TableComponent implements OnInit {
    public isSignedIn: boolean = false;
    public googleDisplay = "block";

    public model = new SimpleRequest();
    public output: string;

    constructor(public gdata: GoogleAuthService,
                private cd: ChangeDetectorRef,
                public gauth: GoogleAuthService) {
        window.onSignIn = (googleUser) => this.onSignIn(googleUser);
        this.output = "Enter a spreadsheet id and range then press submit. "
            + "Ensure that third-party cookies are enabled in your browser settings.";
    }

    onSignIn(googleUser) {
        this.gdata.onSignIn(googleUser);
        this.isSignedIn = this.gdata.isSignedIn;
        this.googleDisplay = this.gdata.googleDisplay;
        this.cd.detectChanges();
    }

    public async signOut() {
        console.log("calling gdata signout...");
        await this.gdata.signOut();
        console.log("gdata signout finished");
        this.isSignedIn = this.gdata.isSignedIn;
        this.googleDisplay = this.gdata.googleDisplay;
        this.cd.detectChanges();
    }



    ngOnInit() { }

    async onSubmit() {
        this.output = "Processing submission...";
        console.log(JSON.stringify(this.model));
        await this.gauth.loadClient();
        console.log("client loaded");
        await this.gauth.loadSheetsAPI();
        console.log("sheets v4 loaded");

        gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: this.model.sheetId,
            range: this.model.range
        }).then((response) => {
            console.log("Range retrieved: "
                + response.result.values[0]);
            this.output = "Data found: \n";
            for (let v of response.result.values) {
                this.output += v + "\n";
            }
            this.cd.detectChanges();
        }, (error) => {
            this.output = "Error: \n";
            this.output += error.result.error.message + "\n";
            this.cd.detectChanges();
        });



    } // End of onSubmit method
    // private user: SocialUser;
    // private loggedIn: boolean;
    //
    // constructor(private authService: AuthService) { }
    //
    // ngOnInit() {
    //     this.authService.authState.subscribe((user) => {
    //         this.user = user;
    //         this.loggedIn = (user != null);
    //     });
    // }
    //
    // signInWithGoogle(): void {
    //     this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    // }
    //
    // signInWithFB(): void {
    //     this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    // }
    //
    // signOut(): void {
    //     this.authService.signOut();
    // }
    // @ViewChild('loginRef', {static: true }) loginElement: ElementRef;
    // auth2: any;
    //
    // ngOnInit() {
    //     this.googleSDK();
    // }
    //
    // googleSDK() {
    //     window['googleSDKLoaded'] = () => {
    //         window['gapi'].load('auth2', () => {
    //             this.auth2 = window['gapi'].auth2.init({
    //                 client_id: '603367704479-vhsav8ukrpq480itan79sf9b78nc4t52.apps.googleusercontent.com',
    //                 cookiepolicy: 'single_host_origin',
    //                 scope: 'profile email'
    //             });
    //             this.prepareLoginButton();
    //         });
    //     }
    //
    //     (function(d, s, id){
    //         let js, fjs = d.getElementsByTagName(s)[0];
    //         if (d.getElementById(id)) {return;}
    //         js = d.createElement(s); js.id = id;
    //         js.src = 'https://apis.google.com/js/platform.js?onload=googleSDKLoaded';
    //         fjs.parentNode.insertBefore(js, fjs);
    //     }(document, 'script', 'google-jssdk'));
    // }
    //
    // prepareLoginButton() {
    //
    //     this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
    //         (googleUser) => {
    //
    //             const profile = googleUser.getBasicProfile();
    //             console.log('Token || ' + googleUser.getAuthResponse().id_token);
    //             console.log('ID: ' + profile.getId());
    //             console.log('Name: ' + profile.getName());
    //             console.log('Image URL: ' + profile.getImageUrl());
    //             console.log('Email: ' + profile.getEmail());
    //             // YOUR CODE HERE
    //             alert('login was successful');
    //
    //
    //         }, (error) => {
    //             alert(JSON.stringify(error, undefined, 2));
    //         });
    //
    // }
}
