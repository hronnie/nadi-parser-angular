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
import {GoogleAuthService} from './shared/services/google-auth.service';
import {JsLoaderService} from './shared/services/js-loader.service';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {AgGridModule} from 'ag-grid-angular';
import {NgSelectModule} from '@ng-select/ng-select';


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
        NgxDatatableModule,
        AgGridModule.withComponents([]),
        NgSelectModule
    ],
    providers: [
        JsLoaderService,
        GoogleAuthService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
