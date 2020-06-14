import * as moment from 'moment';
import {LEVEL_FILTERS} from './level-consts';

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
                field: '_name',
                headerName: 'Név',
                sort: 'asc',
                sortable: true,
                headerCheckboxSelection: true,
                headerCheckboxSelectionFilteredOnly: true,
                checkboxSelection: true,
            },
            {
                field: '_email',
                headerName: 'Email',
                sortable: true
            },
            {
                field: LEVEL_FILTERS.LEVEL_ONE,
                headerName: '1-es',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: LEVEL_FILTERS.LEVEL_TWO,
                headerName: '2-es',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: LEVEL_FILTERS.LEVEL_THREE,
                headerName: '3-as',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: LEVEL_FILTERS.LEVEL_THREE_C,
                headerName: '3/C',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: LEVEL_FILTERS.LEVEL_FOUR_A,
                headerName: '4A',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: LEVEL_FILTERS.LEVEL_FOUR_B,
                headerName: '4B',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: LEVEL_FILTERS.LEVEL_FOUR_B_2,
                headerName: '4B/2',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: LEVEL_FILTERS.LEVEL_FIVE,
                headerName: '5-ös',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: LEVEL_FILTERS.LEVEL_SIX,
                headerName: '6-os',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: LEVEL_FILTERS.LEVEL_SEVEN,
                headerName: '7-es',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: LEVEL_FILTERS.LEVEL_EIGHT_1,
                headerName: '8/1-es',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: LEVEL_FILTERS.LEVEL_UTI_1,
                headerName: 'Uti 1',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: LEVEL_FILTERS.LEVEL_UTI_2,
                headerName: 'Uti 2',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: LEVEL_FILTERS.LEVEL_UTI_3,
                headerName: 'Uti 3',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: LEVEL_FILTERS.LEVEL_UTI_3_PLUS,
                headerName: 'Uti 3+',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: LEVEL_FILTERS.LEVEL_UTI_4,
                headerName: 'Uti 4',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: LEVEL_FILTERS.LEVEL_TK_1,
                headerName: 'TK 1',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: LEVEL_FILTERS.LEVEL_TK_2,
                headerName: 'TK 2',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: LEVEL_FILTERS.LEVEL_TK_3,
                headerName: 'TK 3',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: LEVEL_FILTERS.LEVEL_TK_4,
                headerName: 'TK 4',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
        ];
    }
}
