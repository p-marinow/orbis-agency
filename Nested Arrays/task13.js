/*
    TODO: Имате предварително въведени стойности от естествени числа, въведени в квадратна таблица с размери 6 реда и 6 колони.
    TODO: Да се състави програма , чрез която се намира сумата на всички елементи, чиято сума на индекси за ред и колона е четно число.
    TODO: Програмата да извежда формираните суми за всеки отделен ред на квадратната таблица, както и общата сума от тези елементи.
    TODO: Да се използва само един цикъл.

    ? Пример:
    * [11,12,13,14,15,16],
    * [21,22,23,24,25,26],
    * [31,32,33,34,35,36],
    * [41,42,43,44,45,46],
    * [51,52,53,54,55,56],
    * [61,62,63,64,65,66]

    ! Изход:
    * [11,  ,13,  ,15, ], сума от елементите за реда: 39
    * [ ,22,  ,24,  ,26], сума от елементите за реда: 72
    * [31,  ,33,  ,35, ], сума от елементите за реда: 99
    * [ ,42,  ,44,  ,46], сума от елементите за реда: 132
    * [51,  ,53,  ,55, ], сума от елементите за реда: 159
    * [ ,62,  ,64,  ,66]  сума от елементите за реда: 192
    *                     Сума на елементите: 693
*/

function solution(nestedArr) {
    console.log(`Array is: `, nestedArr);
    let rowSum = 0;
    let totalSum = 0;
    for (let i = 0; i < nestedArr.length; i++) {
        rowSum = 0;
        if(i % 2 === 0) {
            rowSum += nestedArr[i][0] + nestedArr[i][2] + nestedArr[i][4];
            console.log(`Sum of row ${i + 1} is: ${rowSum}`);
            totalSum += rowSum;
        } else {
            rowSum += nestedArr[i][1] + nestedArr[i][3] + nestedArr[i][5];
            console.log(`Sum of row ${i + 1} is: ${rowSum}`);
            totalSum += rowSum;
        }
    }
    console.log(`Total sum of all rows is: ${totalSum}`);
}

function inputSeed(m) {
    const arr = [];
     //! function generating Double dimensional Array with size M x M
    for (let i = 0; i < m; i++) {
        arr[i] = [];
        for (let j = 0; j < m; j++) {
            arr[i][j] = randomNumber(1, 10)
        }   
    }
    return arr;
}

solution(inputSeed(6));

function randomNumber(min, max) {
    //! function generating random int number in input range
    return Math.round(Math.random() * (max - min) + min);
}