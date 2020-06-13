import * as moment from 'moment';

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
                field: 'name',
                headerName: 'Név',
                sort: 'asc',
                sortable: true
            },
            {
                field: 'email',
                headerName: 'Email',
                sortable: true
            },
            {
                field: 'levelOne',
                headerName: '1-es',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: 'levelTwo',
                headerName: '2-es',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: 'levelThree',
                headerName: '3-as',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: 'levelThreeC',
                headerName: '3/C',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: 'levelFourA',
                headerName: '4A',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: 'levelFourB',
                headerName: '4B',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: 'levelFourB2',
                headerName: '4B/2',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: 'levelFive',
                headerName: '5-ös',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: 'levelSix',
                headerName: '6-os',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: 'levelSeven',
                headerName: '7-es',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: 'levelEight1',
                headerName: '8/1-es',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: 'uti1',
                headerName: 'Uti 1',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: 'uti2',
                headerName: 'Uti 2',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: 'uti3',
                headerName: 'Uti 3',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: 'uti3plus',
                headerName: 'Uti 3+',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: 'uti4',
                headerName: 'Uti 4',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: 'tk1',
                headerName: 'TK 1',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: 'tk2',
                headerName: 'TK 2',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: 'tk3',
                headerName: 'TK 3',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
            {
                field: 'tk4',
                headerName: 'TK 4',
                valueFormatter: dateTimeFormatter,
                sortable: true
            },
        ];
    }
}
