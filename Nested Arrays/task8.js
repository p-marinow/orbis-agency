/*
    TODO: Имате квадратен двумерен масив от естествени числа.
    TODO: Да се отпечатат диагоналите на масива.

    ? Пример:
    1,4,6,3
    5,9,7,2
    4,8,1,9
    2,3,4,5
    ! Изход:
    1 9 1 5
    3 7 8 2
*/

function solution(arr) {
    let leftDiagonal = '';
    let rightDiagonal = '';

    console.log(`Array is: `, arr);
    for (let i = 0, len = arr.length; i < len; i++) { 
        for (let j = i; j <= i; j++) {
            leftDiagonal += arr[i][j];
        }

        for (let k = len - 1 - i; k < len - i; k++) {
            rightDiagonal += arr[i][k];
        }
    }
    console.log(leftDiagonal, rightDiagonal);
}

function inputSeed(m) {
    const arr = [];
     //! function generating Double dimensional Array with size M x M
    for (let i = 0; i < m; i++) {
        arr[i] = [];
        for (let j = 0; j < m; j++) {
            arr[i][j] = randomNumber(1, 9)
        }   
    }
    return arr;
}

solution(inputSeed(4));

function randomNumber(min, max) {
    //! function generating random int number in input range
    return Math.round(Math.random() * (max - min) + min);
}