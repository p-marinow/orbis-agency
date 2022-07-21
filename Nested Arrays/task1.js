/*
    TODO: Напишете програма, която за дадена матрица M x N от числа намира реда, в който сумата от елементите е максимална.
*/

function solution(nestedArr) {
    let row = [];
    let sumOfRow = 0;
    let sum = 0;
    
    console.log(`Array is: `, nestedArr);
    for (let i = 0, len = nestedArr.length; i < len; i++) {
        //! iterate through all rows
        for ( let j = 0, len = nestedArr[i].length; j < len; j++) {
            //! iterate through every column in a row

            sumOfRow += nestedArr[i][j];
            //! add every cell in a sumOfRow
        }
        
        if (sumOfRow >= sum) {
            //! set new bigger sumOfRow and save current index and current row
            sum = sumOfRow;
            [row[0], row[1]] = [i, nestedArr[i]];  
        }
        sumOfRow = 0;
    }
    console.log(`Largest sum of numbers is on row in a row ${row[0] + 1}`, row[1]);
}

function inputSeed(m, n) {
    const arr = [];
    //! function generating Double dimensional Array with size M x N
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