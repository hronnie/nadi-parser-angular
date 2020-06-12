import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { AuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";


declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit {
    private user: SocialUser;
    private loggedIn: boolean;

    constructor(private authService: AuthService) { }

    ngOnInit() {
        this.authService.authState.subscribe((user) => {
            this.user = user;
            this.loggedIn = (user != null);
        });
    }

    signInWithGoogle(): void {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }

    signInWithFB(): void {
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }

    signOut(): void {
        this.authService.signOut();
    }
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
