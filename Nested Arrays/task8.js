/*
    TODO: Имате квадратен двумерен масив от естествени числа.
    TODO: Да се отпечатат диагоналите на масива.

    ? Пример:
    * [1,4,6,3],
    * [5,9,7,2],
    * [4,8,1,9],
    * [2,3,4,5]
    ! Изход:
    * [1 9 1 5],
    * [3 7 8 2]
*/

function solution(arr) {
    console.log(`Array is: `, arr);

    const rightDiagonal = [];
    const leftDiagonal = [];

    for (let i = 0, len = arr.length - 1; i <= len; i++) {
        //! iterate through all rows

        //! push value of matching pattern
        //? ex: arr[0][0], arr[1][1], arr[2][2], arr[3][3]
        leftDiagonal.push(arr[i][i]);

        //! backward iterate through row on specific location
        //? ex: arr[0][3], arr[1][2], arr[2][1], arr[3][0]
        rightDiagonal.push(arr[i][len - i]);
    }
    console.log('\nLeft diagonal:', leftDiagonal, '\nRight diagonal:', rightDiagonal);
}

function inputSeed(m) {
    const arr = [];
     //! function generating Double dimensional Array with size M x M
    for (let i = 0; i < m; i++) {
        arr[i] = [];
        for (let j = 0; j < m; j++) {
            arr[i][j] = randomNumber(-100, 300)
        }   
    }
    return arr;
}

solution(inputSeed(4));

function randomNumber(min, max) {
    //! function generating random int number in input range
    return Math.round(Math.random() * (max - min) + min);
}