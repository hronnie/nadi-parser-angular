import {Component, OnInit} from '@angular/core';
import 'moment/locale/hu';
import * as moment from 'moment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

    ngOnInit(): void {
        moment.locale('hu_HU');
    }

}
