import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'fullLocalDate'
})
export class FullLocalDatePipe implements PipeTransform {

    transform(value: any, ...args: any[]): any {
        if (!value || value === 0) {
            return '';
        }
        return moment(value).format('L');
    }

}
