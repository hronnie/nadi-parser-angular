import { Injectable } from '@angular/core';
import {XLS_FIELD_NAMES, LEVEL_WAITING_TIMES} from '../model/level-consts';
import * as moment from 'moment';

@Injectable({
    providedIn: 'root'
})
export class StudentFilterService {

    constructor() { }

    trainingDate: any;

    filterDataByLevel(level: string, origData, trainingDate) {
        this.trainingDate = moment(trainingDate);
        switch (level) {
            case XLS_FIELD_NAMES.LEVEL_ALL: {
                return origData;
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_1_KEZDO_MODUL: {
                return origData.filter(item => {
                    return !this.isUserNotDisabled(item);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_2_ALAP_MODUL: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_1_KEZDO_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_2_ALAP_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_3_HARMONIA_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_4_CHI_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_5_KARMA_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_6_FORMAZAS_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_7_ELETUT_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_9_HALADO_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_10_SZAKRALIS_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_11_MATRIX_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_12_HARMONIZALAS_MAGASISKOLAJA_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_13_UNIVERZALIS_ESZKOZOK_I])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_14_UNIVERZALIS_ESZKOZOK_II])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_15_TERMESZETI_EROK_I])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_16_TERMESZETI_EROK_II])
                        && this.isWaitingTimeOk(item[XLS_FIELD_NAMES.LEVEL_1_KEZDO_MODUL], LEVEL_WAITING_TIMES.LEVEL_2_ALAP_MODUL);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_3_HARMONIA_MODUL: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_2_ALAP_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_3_HARMONIA_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_4_CHI_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_5_KARMA_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_6_FORMAZAS_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_7_ELETUT_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_9_HALADO_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_10_SZAKRALIS_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_11_MATRIX_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_12_HARMONIZALAS_MAGASISKOLAJA_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_13_UNIVERZALIS_ESZKOZOK_I])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_14_UNIVERZALIS_ESZKOZOK_II])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_15_TERMESZETI_EROK_I])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_16_TERMESZETI_EROK_II])
                        && this.isWaitingTimeOk(item[XLS_FIELD_NAMES.LEVEL_2_ALAP_MODUL], LEVEL_WAITING_TIMES.LEVEL_3_HARMONIA_MODUL);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_4_CHI_MODUL: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_3_HARMONIA_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_4_CHI_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_5_KARMA_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_6_FORMAZAS_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_7_ELETUT_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_9_HALADO_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_10_SZAKRALIS_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_11_MATRIX_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_12_HARMONIZALAS_MAGASISKOLAJA_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_13_UNIVERZALIS_ESZKOZOK_I])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_14_UNIVERZALIS_ESZKOZOK_II])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_15_TERMESZETI_EROK_I])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_16_TERMESZETI_EROK_II])
                        && this.isWaitingTimeOk(item[XLS_FIELD_NAMES.LEVEL_3_HARMONIA_MODUL], LEVEL_WAITING_TIMES.LEVEL_4_CHI_MODUL);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_5_KARMA_MODUL: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_4_CHI_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_5_KARMA_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_6_FORMAZAS_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_7_ELETUT_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_9_HALADO_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_10_SZAKRALIS_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_11_MATRIX_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_12_HARMONIZALAS_MAGASISKOLAJA_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_13_UNIVERZALIS_ESZKOZOK_I])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_14_UNIVERZALIS_ESZKOZOK_II])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_15_TERMESZETI_EROK_I])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_16_TERMESZETI_EROK_II])
                        && this.isWaitingTimeOk(item[XLS_FIELD_NAMES.LEVEL_4_CHI_MODUL], LEVEL_WAITING_TIMES.LEVEL_5_KARMA_MODUL);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_6_FORMAZAS_MODUL: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_5_KARMA_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_6_FORMAZAS_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_7_ELETUT_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_9_HALADO_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_10_SZAKRALIS_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_11_MATRIX_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_12_HARMONIZALAS_MAGASISKOLAJA_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_13_UNIVERZALIS_ESZKOZOK_I])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_14_UNIVERZALIS_ESZKOZOK_II])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_15_TERMESZETI_EROK_I])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_16_TERMESZETI_EROK_II])
                        && this.isWaitingTimeOk(item[XLS_FIELD_NAMES.LEVEL_5_KARMA_MODUL], LEVEL_WAITING_TIMES.LEVEL_6_FORMAZAS_MODUL);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_7_ELETUT_MODUL: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_6_FORMAZAS_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_7_ELETUT_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_9_HALADO_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_10_SZAKRALIS_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_11_MATRIX_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_12_HARMONIZALAS_MAGASISKOLAJA_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_13_UNIVERZALIS_ESZKOZOK_I])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_14_UNIVERZALIS_ESZKOZOK_II])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_15_TERMESZETI_EROK_I])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_16_TERMESZETI_EROK_II])
                        && this.isWaitingTimeOk(item[XLS_FIELD_NAMES.LEVEL_6_FORMAZAS_MODUL], LEVEL_WAITING_TIMES.LEVEL_7_ELETUT_MODUL);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_8_SPIRITUALIS_ASSZERTIVITAS_MODUL: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_8_SPIRITUALIS_ASSZERTIVITAS_MODUL]);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_9_HALADO_MODUL: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_7_ELETUT_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_9_HALADO_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_10_SZAKRALIS_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_11_MATRIX_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_12_HARMONIZALAS_MAGASISKOLAJA_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_13_UNIVERZALIS_ESZKOZOK_I])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_14_UNIVERZALIS_ESZKOZOK_II])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_15_TERMESZETI_EROK_I])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_16_TERMESZETI_EROK_II])
                        && this.isWaitingTimeOk(item[XLS_FIELD_NAMES.LEVEL_7_ELETUT_MODUL], LEVEL_WAITING_TIMES.LEVEL_9_HALADO_MODUL);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_10_SZAKRALIS_MODUL: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_9_HALADO_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_10_SZAKRALIS_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_11_MATRIX_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_12_HARMONIZALAS_MAGASISKOLAJA_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_13_UNIVERZALIS_ESZKOZOK_I])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_14_UNIVERZALIS_ESZKOZOK_II])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_15_TERMESZETI_EROK_I])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_16_TERMESZETI_EROK_II])
                        && this.isWaitingTimeOk(item[XLS_FIELD_NAMES.LEVEL_9_HALADO_MODUL], LEVEL_WAITING_TIMES.LEVEL_10_SZAKRALIS_MODUL);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_11_MATRIX_MODUL: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_10_SZAKRALIS_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_11_MATRIX_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_12_HARMONIZALAS_MAGASISKOLAJA_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_13_UNIVERZALIS_ESZKOZOK_I])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_14_UNIVERZALIS_ESZKOZOK_II])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_15_TERMESZETI_EROK_I])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_16_TERMESZETI_EROK_II])
                        && this.isWaitingTimeOk(item[XLS_FIELD_NAMES.LEVEL_10_SZAKRALIS_MODUL], LEVEL_WAITING_TIMES.LEVEL_11_MATRIX_MODUL);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_12_HARMONIZALAS_MAGASISKOLAJA_MODUL: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_11_MATRIX_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_12_HARMONIZALAS_MAGASISKOLAJA_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_13_UNIVERZALIS_ESZKOZOK_I])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_14_UNIVERZALIS_ESZKOZOK_II])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_15_TERMESZETI_EROK_I])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_16_TERMESZETI_EROK_II])
                        && this.isWaitingTimeOk(item[XLS_FIELD_NAMES.LEVEL_11_MATRIX_MODUL], LEVEL_WAITING_TIMES.LEVEL_12_HARMONIZALAS_MAGASISKOLAJA_MODUL);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_13_UNIVERZALIS_ESZKOZOK_I: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_12_HARMONIZALAS_MAGASISKOLAJA_MODUL])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_13_UNIVERZALIS_ESZKOZOK_I])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_14_UNIVERZALIS_ESZKOZOK_II])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_15_TERMESZETI_EROK_I])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_16_TERMESZETI_EROK_II])
                        && this.isWaitingTimeOk(item[XLS_FIELD_NAMES.LEVEL_12_HARMONIZALAS_MAGASISKOLAJA_MODUL], LEVEL_WAITING_TIMES.LEVEL_13_UNIVERZALIS_ESZKOZOK_I);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_14_UNIVERZALIS_ESZKOZOK_II: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_13_UNIVERZALIS_ESZKOZOK_I])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_14_UNIVERZALIS_ESZKOZOK_II])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_15_TERMESZETI_EROK_I])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_16_TERMESZETI_EROK_II])
                        && this.isWaitingTimeOk(item[XLS_FIELD_NAMES.LEVEL_13_UNIVERZALIS_ESZKOZOK_I], LEVEL_WAITING_TIMES.LEVEL_14_UNIVERZALIS_ESZKOZOK_II);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_15_TERMESZETI_EROK_I: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_14_UNIVERZALIS_ESZKOZOK_II])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_15_TERMESZETI_EROK_I])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_16_TERMESZETI_EROK_II])
                        && this.isWaitingTimeOk(item[XLS_FIELD_NAMES.LEVEL_14_UNIVERZALIS_ESZKOZOK_II], LEVEL_WAITING_TIMES.LEVEL_15_TERMESZETI_EROK_I);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_16_TERMESZETI_EROK_II: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_15_TERMESZETI_EROK_I])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_16_TERMESZETI_EROK_II])
                        && this.isWaitingTimeOk(item[XLS_FIELD_NAMES.LEVEL_15_TERMESZETI_EROK_I], LEVEL_WAITING_TIMES.LEVEL_16_TERMESZETI_EROK_II);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_OPT_WORKSHOP_1: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_3_HARMONIA_MODUL]);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_OPT_WORKSHOP_2: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_OPT_WORKSHOP_1]);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_OPT_WORKSHOP_3: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_OPT_WORKSHOP_2]);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_OPT_FORMAZAS2: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_6_FORMAZAS_MODUL])
                        && this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_10_SZAKRALIS_MODUL]);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_OPT_KARMA2: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_7_ELETUT_MODUL])
                        && this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_5_KARMA_MODUL]);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_OPT_KARMA3: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_9_HALADO_MODUL])
                        && this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_OPT_KARMA2]);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_OPT_KARMA4: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_10_SZAKRALIS_MODUL])
                        && this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_OPT_KARMA3]);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_OPT_MESTERKULCS_1: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_10_SZAKRALIS_MODUL])
                        && this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_OPT_WORKSHOP_2]);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_OPT_MESTERKULCS_2: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_OPT_MESTERKULCS_1])
                        && this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_OPT_WORKSHOP_3]);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_OPT_TUDATOS_LEPESEK_WS: {
                return origData.filter(item => {
                        return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_OPT_WORKSHOP_1]);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_OPT_ECO_KONZULTANS: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_9_HALADO_MODUL]);
                })
                break;
            }
        }
    }

    isFormatLevelDateValid(dateValue) {
        if (!dateValue) {
            return false;
        }
        const levelDate = moment(dateValue);
        return levelDate.isValid();
    }

    isWaitingTimeOk(levelCompletedDate, waitingTime) {
        const formattedLevelCompletedDate = moment(levelCompletedDate);
        return (this.trainingDate.diff(formattedLevelCompletedDate, 'days') >= waitingTime);
    }

    isUserNotDisabled(row) {
        return row[XLS_FIELD_NAMES.DATA_EMAIL_DISABLED] === "1" || row[XLS_FIELD_NAMES.DATA_REMOVED] === "1";
    }
}

