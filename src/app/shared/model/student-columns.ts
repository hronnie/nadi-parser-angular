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
                field: XLS_FIELD_NAMES.LEVEL_1_KEZDO_MODUL,
                headerName: '1. Kezdő modul',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_2_ALAP_MODUL,
                headerName: '2. Alap modul',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_3_HARMONIA_MODUL,
                headerName: '3. Harmónia modul',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_4_CHI_MODUL,
                headerName: '4. Chi modul',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_5_KARMA_MODUL,
                headerName: '5. Karma modul',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_6_FORMAZAS_MODUL,
                headerName: '6. Formázás modul',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_7_ELETUT_MODUL,
                headerName: '7. Életút modul',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_8_SPIRITUALIS_ASSZERTIVITAS_MODUL,
                headerName: '8. Spirituális Asszertivitás modul',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_9_HALADO_MODUL,
                headerName: '9. Haladó modul',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_10_SZAKRALIS_MODUL,
                headerName: '10. Szakrális modul',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_11_MATRIX_MODUL,
                headerName: '11. Mátrix modul',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_12_HARMONIZALAS_MAGASISKOLAJA_MODUL,
                headerName: '12. A Mágia eszközei',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_13_UNIVERZALIS_ESZKOZOK_I,
                headerName: '13. Univerzális eszközök I.',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_14_UNIVERZALIS_ESZKOZOK_II,
                headerName: '14. Univerzális eszközök II.',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_15_TERMESZETI_EROK_I,
                headerName: '15. Természeti erők I.',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_16_TERMESZETI_EROK_II,
                headerName: '16. Természeti erők II.',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_OPT_WORKSHOP_1,
                headerName: 'Workshop I.',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_OPT_WORKSHOP_2,
                headerName: 'Workshop II.',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_OPT_WORKSHOP_3,
                headerName: 'Workshop III.',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_OPT_FORMAZAS2,
                headerName: 'Formázás II.',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_OPT_KARMA2,
                headerName: 'Karma II. modul',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_OPT_KARMA3,
                headerName: 'Karma III. modul',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_OPT_KARMA4,
                headerName: 'Karma IV. modul',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_OPT_MESTERKULCS_1,
                headerName: 'Mesterkulcs I.',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_OPT_MESTERKULCS_2,
                headerName: 'Mesterkulcs II.',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_OPT_TUDATOS_LEPESEK_WS,
                headerName: 'Tudatos lépések Workshop',
                valueFormatter: dateTimeFormatter,
            },
            {
                field: XLS_FIELD_NAMES.LEVEL_OPT_ECO_KONZULTANS,
                headerName: 'ECO Konzultáns kurzus és vizsga',
                valueFormatter: dateTimeFormatter,
            }
        ];
    }
}
