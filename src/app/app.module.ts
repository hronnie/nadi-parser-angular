import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ToastrModule} from 'ngx-toastr';

import {SidebarModule} from './sidebar/sidebar.module';
import {FooterModule} from './shared/footer/footer.module';
import {NavbarModule} from './shared/navbar/navbar.module';
import {FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import {AppComponent} from './app.component';
import {AppRoutes} from './app.routing';

import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import {GoogleAuthService} from './shared/services/google-auth.service';
import {JsLoaderService} from './shared/services/js-loader.service';

const config = new AuthServiceConfig([
    {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("603367704479-vhsav8ukrpq480itan79sf9b78nc4t52.apps.googleusercontent.com")
    }
]);

export function provideConfig() {
    return config;
}

@NgModule({
    declarations: [
        AppComponent,
        AdminLayoutComponent
    ],
    imports: [
        BrowserAnimationsModule,
        RouterModule.forRoot(AppRoutes, {
            useHash: true
        }),
        SidebarModule,
        NavbarModule,
        ToastrModule.forRoot(),
        FooterModule,
        FixedPluginModule,
        SocialLoginModule
    ],
    providers: [
        JsLoaderService,
        GoogleAuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
