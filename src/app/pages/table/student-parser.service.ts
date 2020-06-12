import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StudentParserService {

    constructor() { }

    parseRawSheetData(values: any) {
        return values.map(itemArray => {
            return {
                name: itemArray[0],
                email: itemArray[6],
                levelOne: itemArray[11],
                levelTwo: itemArray[12],
                levelThree: itemArray[13],
                levelThreeC: itemArray[15],
                levelFourA: itemArray[16],
                levelFourB: itemArray[17],
                levelFourB2: itemArray[18],
                levelFive: itemArray[20],
                levelSix: itemArray[21],
                levelSeven: itemArray[22],
                levelEight1: itemArray[23],
                uti1: itemArray[62],
                uti2: itemArray[63],
                uti3: itemArray[64],
                uti3plus: itemArray[65],
                uti4: itemArray[66],
                tk1: itemArray[42],
                tk2: itemArray[43],
                tk3: itemArray[44],
                tk4: itemArray[45],
            };
        });
    }
}

