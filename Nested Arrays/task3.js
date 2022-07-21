/*
    TODO: Напишете програма, която за дадена матрица намира произведението на елементите под главния диагонал(от горе в ляво към долу в дясно).
*/

function solution(nestedArr) {
    let sumOfDiagonal = 1;
    console.log(`Array is:`, nestedArr);
    for (let i = 0, len = nestedArr.length; i < len; i++) {
        //! iterate through all rows
        for (let j = i; j <= i; j++) {
            //! iterate through elements match 1:1 location
            //? ex: arr[0][0], arr[1][1], arr[2][2]
            sumOfDiagonal *= nestedArr[i][j];
        }
    }
    console.log(`Sum of main diagonal is: ${sumOfDiagonal}`);
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

solution(inputSeed(4));

function randomNumber(min, max) {
    //! function generating random int number in input range
    return Math.round(Math.random() * (max - min) + min);
}