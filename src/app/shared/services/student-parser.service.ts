import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StudentParserService {

    constructor() { }

    parseRawSheetData(values: any) {
        return values.map(itemArray => {
            return {
                _name: itemArray[0],
                _email: itemArray[2],
                _remark: itemArray[3],
                levelOne: itemArray[5],
                levelTwo: itemArray[6],
                levelThree: itemArray[7],
                levelFour: itemArray[8],
                levelFive: itemArray[9],
                levelSix: itemArray[10],
                levelSeven: itemArray[11],
                levelEight: itemArray[12],
                levelNine: itemArray[13],
                levelTen: itemArray[14],
                levelEleven: itemArray[15],
                levelTwelve: itemArray[16],
                levelThirteen: itemArray[17],
                levelFourteen: itemArray[18],
                levelFifteen: itemArray[19],
                levelSixteen: itemArray[20],
                levelOptWorkshop1: itemArray[22],
                levelOptWorkshop2: itemArray[23],
                levelOptWorkshop3: itemArray[24],
                levelOptFormazas: itemArray[25],
                levelOptKarma2: itemArray[26],
                levelOptKarma3: itemArray[27],
                levelOptKarma4: itemArray[28],
                levelOptMesterkulcs1: itemArray[29],
                levelOptMesterkulcs2: itemArray[30],
                levelOptTudatosLepesekWs: itemArray[31],
                levelOptEcoKonzultans: itemArray[32],
            };
        });
    }
}
