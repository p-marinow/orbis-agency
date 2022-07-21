/*
    TODO: Имате двумерен масив от числа, чийто стойности са въведени предварително.
    TODO: Да се отпечатат сумата на елементите на масива, както и средно-аритметичното на тези числа.
*/

function solution(nestedArr) {
    console.log(`Array is: `, nestedArr);
    for (let i = 0, len = nestedArr.length - 1, sum = 0, avg = 1, totalCells = 0; i <= len; i++) {
        
        for (let j = 0; j < nestedArr[i].length; j++) {
            sum += nestedArr[i][j];
            totalCells++;
        }
        
        i === 0
            ? (avg = sum / totalCells, console.log(`Sum is: ${sum}, Avg: ${avg.toFixed(0)}`)) : '';
    }
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