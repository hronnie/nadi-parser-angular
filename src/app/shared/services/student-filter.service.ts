import { Injectable } from '@angular/core';
import {LEVEL_FILTERS, LEVEL_WAITING_TIMES} from '../model/level-consts';
import * as moment from 'moment';

@Injectable({
    providedIn: 'root'
})
export class StudentFilterService {

    constructor() { }

    filterDataByLevel(level: string, origData) {
        let newData;
        switch (level) {
            case LEVEL_FILTERS.LEVEL_ALL: {
                newData = origData;
                break;
            }
            case LEVEL_FILTERS.LEVEL_TWO: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_ONE])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_TWO])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_THREE])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_FOUR_A])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_FOUR_B])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_FOUR_B_2])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_FIVE])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_SIX])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_SEVEN])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_EIGHT_1])
                        && this.isWaitingTimeOk(item[LEVEL_FILTERS.LEVEL_ONE], LEVEL_WAITING_TIMES.LEVEL_TWO);
                        // && item[LEVEL_FILTERS.disabledStudent] !== '1';
                })
                break;
            }
            case LEVEL_FILTERS.LEVEL_THREE: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_ONE])
                        && this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_TWO])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_THREE])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_FOUR_A])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_FOUR_B])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_FOUR_B_2])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_FIVE])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_SIX])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_SEVEN])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_EIGHT_1])
                        && this.isWaitingTimeOk(item[LEVEL_FILTERS.LEVEL_TWO], LEVEL_WAITING_TIMES.LEVEL_THREE);
                    // && item[LEVEL_FILTERS.disabledStudent] !== '1';
                })
                break;
            }
            case LEVEL_FILTERS.LEVEL_FOUR_A: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_THREE])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_FOUR_A])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_FOUR_B])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_FOUR_B_2])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_FIVE])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_SIX])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_SEVEN])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_EIGHT_1])
                        && this.isWaitingTimeOk(item[LEVEL_FILTERS.LEVEL_THREE], LEVEL_WAITING_TIMES.LEVEL_FOUR_A);
                    // && item[LEVEL_FILTERS.disabledStudent] !== '1';
                })
                break;
            }
            case LEVEL_FILTERS.LEVEL_FOUR_B: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_FOUR_A])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_FOUR_B])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_FOUR_B_2])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_FIVE])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_SIX])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_SEVEN])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_EIGHT_1])
                        && this.isWaitingTimeOk(item[LEVEL_FILTERS.LEVEL_FOUR_A], LEVEL_WAITING_TIMES.LEVEL_FOUR_B);
                    // && item[LEVEL_FILTERS.disabledStudent] !== '1';
                })
                break;
            }
            case LEVEL_FILTERS.LEVEL_FIVE: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_FOUR_B])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_FIVE])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_SIX])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_SEVEN])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_EIGHT_1])
                        && this.isWaitingTimeOk(item[LEVEL_FILTERS.LEVEL_FOUR_B], LEVEL_WAITING_TIMES.LEVEL_FIVE);
                    // && item[LEVEL_FILTERS.disabledStudent] !== '1';
                })
                break;
            }
            case LEVEL_FILTERS.LEVEL_SIX: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_FIVE])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_SIX])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_SEVEN])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_EIGHT_1])
                        && this.isWaitingTimeOk(item[LEVEL_FILTERS.LEVEL_FIVE], LEVEL_WAITING_TIMES.LEVEL_SIX);
                    // && item[LEVEL_FILTERS.disabledStudent] !== '1';
                })
                break;
            }
            case LEVEL_FILTERS.LEVEL_SEVEN: {
                return origData.filter(item => {
                    return this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_SIX])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_SEVEN])
                        && !this.isFormatLevelDateValid(item[LEVEL_FILTERS.LEVEL_EIGHT_1])
                        && this.isWaitingTimeOk(item[LEVEL_FILTERS.LEVEL_SIX], LEVEL_WAITING_TIMES.LEVEL_SEVEN);
                    // && item[LEVEL_FILTERS.disabledStudent] !== '1';
                })
                break;
            }
        }
    }

    isFormatLevelDateValid(dateValue) {
        const levelDate = moment(dateValue);
        return levelDate.isValid();
    }

    isWaitingTimeOk(levelCompletedDate, waitingTime) {
        const currentDate = moment();
        const formattedLevelCompletedDate = moment(levelCompletedDate);
        if (currentDate.diff(formattedLevelCompletedDate, 'days') >= waitingTime) {
            return true;
        }
        return false;
    }
}

