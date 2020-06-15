import { Injectable } from '@angular/core';
import {XLS_FIELD_NAMES, LEVEL_WAITING_TIMES} from '../model/level-consts';
import * as moment from 'moment';

@Injectable({
    providedIn: 'root'
})
export class StudentFilterService {

    constructor() { }

    filterDataByLevel(level: string, origData) {
        switch (level) {
            case XLS_FIELD_NAMES.LEVEL_ALL: {
                return origData;
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_TWO: {
                return origData.filter(item => {
                    console.log(item._name);
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_ONE])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_TWO])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_THREE])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_FOUR_A])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_FOUR_B])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_FOUR_B_2])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_FIVE])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_SIX])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_SEVEN])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_EIGHT_1])
                        && this.isWaitingTimeOk(item[XLS_FIELD_NAMES.LEVEL_ONE], LEVEL_WAITING_TIMES.LEVEL_TWO)
                        && !this.isUserNotDisabled(item);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_THREE: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_TWO])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_THREE])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_FOUR_A])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_FOUR_B])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_FOUR_B_2])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_FIVE])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_SIX])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_SEVEN])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_EIGHT_1])
                        && this.isWaitingTimeOk(item[XLS_FIELD_NAMES.LEVEL_TWO], LEVEL_WAITING_TIMES.LEVEL_THREE)
                        && !this.isUserNotDisabled(item);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_THREE_C: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_THREE])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_THREE_C])
                        && !this.isUserNotDisabled(item);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_FOUR_A: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_THREE])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_FOUR_A])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_FOUR_B])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_FOUR_B_2])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_FIVE])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_SIX])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_SEVEN])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_EIGHT_1])
                        && this.isWaitingTimeOk(item[XLS_FIELD_NAMES.LEVEL_THREE], LEVEL_WAITING_TIMES.LEVEL_FOUR_A)
                        && !this.isUserNotDisabled(item);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_FOUR_B: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_FOUR_A])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_FOUR_B])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_FOUR_B_2])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_FIVE])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_SIX])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_SEVEN])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_EIGHT_1])
                        && this.isWaitingTimeOk(item[XLS_FIELD_NAMES.LEVEL_FOUR_A], LEVEL_WAITING_TIMES.LEVEL_FOUR_B)
                        && !this.isUserNotDisabled(item);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_FOUR_B_2: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_FOUR_B])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_FOUR_B_2])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_FIVE])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_SIX])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_SEVEN])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_EIGHT_1])
                        && this.isWaitingTimeOk(item[XLS_FIELD_NAMES.LEVEL_FOUR_B], LEVEL_WAITING_TIMES.LEVEL_FOUR_B_2)
                        && !this.isUserNotDisabled(item);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_FIVE: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_FOUR_B])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_FIVE])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_SIX])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_SEVEN])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_EIGHT_1])
                        && this.isWaitingTimeOk(item[XLS_FIELD_NAMES.LEVEL_FOUR_B], LEVEL_WAITING_TIMES.LEVEL_FIVE)
                        && !this.isUserNotDisabled(item);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_SIX: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_FIVE])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_SIX])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_SEVEN])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_EIGHT_1])
                        && this.isWaitingTimeOk(item[XLS_FIELD_NAMES.LEVEL_FIVE], LEVEL_WAITING_TIMES.LEVEL_SIX)
                        && !this.isUserNotDisabled(item);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_SEVEN: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_SIX])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_SEVEN])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_EIGHT_1])
                        && this.isWaitingTimeOk(item[XLS_FIELD_NAMES.LEVEL_SIX], LEVEL_WAITING_TIMES.LEVEL_SEVEN)
                        && !this.isUserNotDisabled(item);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_EIGHT_1: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_SEVEN])
                        && !this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_EIGHT_1])
                        && this.isWaitingTimeOk(item[XLS_FIELD_NAMES.LEVEL_SEVEN], LEVEL_WAITING_TIMES.LEVEL_EIGHT_1)
                        && !this.isUserNotDisabled(item);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_TK_1: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_THREE])
                        && !this.isUserNotDisabled(item);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_TK_2: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_FOUR_B])
                        && this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_FIVE])
                        && !this.isUserNotDisabled(item);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_TK_3: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_SIX])
                        && !this.isUserNotDisabled(item);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_TK_4: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_SEVEN])
                        && !this.isUserNotDisabled(item);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_UTI_1: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_THREE])
                        && this.isWaitingTimeOk(item[XLS_FIELD_NAMES.LEVEL_THREE], LEVEL_WAITING_TIMES.LEVEL_UTI_1)
                        && !this.isUserNotDisabled(item);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_UTI_2: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_UTI_1])
                        && this.isWaitingTimeOk(item[XLS_FIELD_NAMES.LEVEL_UTI_1], LEVEL_WAITING_TIMES.LEVEL_UTI_2)
                        && !this.isUserNotDisabled(item);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_UTI_3: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_UTI_2])
                        && this.isWaitingTimeOk(item[XLS_FIELD_NAMES.LEVEL_UTI_2], LEVEL_WAITING_TIMES.LEVEL_UTI_3)
                        && !this.isUserNotDisabled(item);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_UTI_3_PLUS: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_UTI_3])
                        && this.isWaitingTimeOk(item[XLS_FIELD_NAMES.LEVEL_UTI_3], LEVEL_WAITING_TIMES.LEVEL_UTI_3_PLUS)
                        && !this.isUserNotDisabled(item);
                })
                break;
            }
            case XLS_FIELD_NAMES.LEVEL_UTI_4: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[XLS_FIELD_NAMES.LEVEL_UTI_3_PLUS])
                        && this.isWaitingTimeOk(item[XLS_FIELD_NAMES.LEVEL_UTI_3_PLUS], LEVEL_WAITING_TIMES.LEVEL_UTI_4)
                        && !this.isUserNotDisabled(item);
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
        const currentDate = moment();
        const formattedLevelCompletedDate = moment(levelCompletedDate);
        return (currentDate.diff(formattedLevelCompletedDate, 'days') >= waitingTime);
    }

    isUserNotDisabled(row) {
        return row[XLS_FIELD_NAMES.DATA_EMAIL_DISABLED] === "1" || row[XLS_FIELD_NAMES.DATA_REMOVED] === "1";
    }
}

