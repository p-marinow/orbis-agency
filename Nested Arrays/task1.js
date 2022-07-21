/*
    TODO: Напишете програма, която за дадена матрица M x N от числа намира реда, в който сумата от елементите е максимална.
*/

function solution(nestedArr) {
    let row = [];
    let sumOfRow = 0;
    let sum = 0;
    
    console.log(`Array is: `, nestedArr);
    for (let i = 0, len = nestedArr.length; i < len; i++) {
        for ( let j = 0, len = nestedArr[i].length; j < len; j++) {   
            sumOfRow += nestedArr[i][j];
        }
        console.log(i, sumOfRow);
        if (sumOfRow >= sum) {
            sum = sumOfRow;
            [row[0], row[1]] = [nestedArr[i], i];  
        }
        sumOfRow = 0;
    }
    console.log(`Largest sum of numbers is on row in a row ${row[1] + 1}`, row[0]);
}

function inputSeed(m, n) {
    const arr = [];
    //! function generating Array with length equal input
    for (let i = 0; i < m; i++) {
        arr[i] = [];
        for (let j = 0; j < n; j++) {
            arr[i][j] = randomNumber(-100, 300)
        }   
    }
    return arr;
}

solution(inputSeed(3, 4));

function randomNumber(min, max) {
    //! function generating random int number in input range
    return Math.round(Math.random() * (max - min) + min);
}