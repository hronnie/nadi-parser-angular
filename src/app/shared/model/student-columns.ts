import * as moment from 'moment';
import {XLS_FIELD_NAMES} from './level-consts';

export class StudentColumns {

    static columns: any;

    static generateColumns(): any {

        function dateTimeFormatter(params) {
            if (!params.value || params.value === 0) {
                return '';
            }
            return moment(params.value).format('L');
        }

        return [
            {
                field: XLS_FIELD_NAMES.DATA_NAME,
                headerName: 'Név',
                sort: 'asc',
                sortable: true,
                headerCheckboxSelection: true,
                headerCheckboxSelectionFilteredOnly: true,
                checkboxSelection: true,
                width: 260
            },
            {
                field: XLS_FIELD_NAMES.DATA_EMAIL,
                headerName: 'Email',
                width: 280
            },
            {
                field: XLS_FIELD_NAMES.DATA_REMARK,
                headerName: 'Megjegyzés',
                width: 280
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_ONE,
                headerName: '1-es',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_TWO,
                headerName: '2-es',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_THREE,
                headerName: '3-as',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_THREE_C,
                headerName: '3/C',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_FOUR_A,
                headerName: '4A',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_FOUR_B,
                headerName: '4B',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_FOUR_B_2,
                headerName: '4B/2',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_FIVE,
                headerName: '5-ös',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_SIX,
                headerName: '6-os',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_SEVEN,
                headerName: '7-es',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_EIGHT_1,
                headerName: '8/1-es',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_UTI_1,
                headerName: 'Uti 1',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_UTI_2,
                headerName: 'Uti 2',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_UTI_3,
                headerName: 'Uti 3',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_UTI_3_PLUS,
                headerName: 'Uti 3+',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_UTI_4,
                headerName: 'Uti 4',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_TK_1,
                headerName: 'TK 1',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_TK_2,
                headerName: 'TK 2',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_TK_3,
                headerName: 'TK 3',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_TK_4,
                headerName: 'TK 4',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.DATA_EMAIL_DISABLED,
                headerName: 'Email letiltás',
            },
            {
                field: XLS_FIELD_NAMES.DATA_REMOVED,
                headerName: 'Archív',
            },
        ];
    }
}
