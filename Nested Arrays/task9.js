/*
    TODO: Имате двумерен масив от числа, чийто стойности са въведени предварително.
    TODO: Да се отпечатат сумата на елементите на масива, както и средно-аритметичното на тези числа.
*/

function solution(nestedArr) {
    let sum = 0;
    let avg = 1;
    let totalCells = 0;
    console.log(`Array is: `, nestedArr);
    for (let i = 0, len = nestedArr.length; i < len; i++) {
        for (let j = 0; j < nestedArr[i].length; j++) {
            sum += nestedArr[i][j];
            totalCells++;
        }
    }
    avg = sum / totalCells;
    console.log(`Sum is: ${sum}, Avg: ${avg.toFixed(2)}`);
}

function inputSeed(m, n) {
    const arr = [];
    //! function generating Double dimensional Array with size M x N
    for (let i = 0; i < m; i++) {
        arr[i] = [];
        for (let j = 0; j < n; j++) {
            arr[i][j] = randomNumber(1, 100)
        }   
    }
    return arr;
}

solution(inputSeed(6, 5));

function randomNumber(min, max) {
    //! function generating random int number in input range
    return Math.round(Math.random() * (max - min) + min);
}