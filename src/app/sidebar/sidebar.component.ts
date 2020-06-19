import {Component, OnInit} from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    // { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    // { path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
    // { path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
    // { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
    {path: '/invites', title: 'Tanfolyam meghívók', icon: 'nc-tile-56', class: ''},
    // {path: '/settings', title: 'Beállítások', icon: 'nc-settings-gear-65', class: ''},
    // {path: '/help', title: 'Segítség', icon: 'nc-bulb-63', class: ''},
    // { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
];


@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
