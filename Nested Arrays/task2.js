/*
    TODO: Напишете програма, която за дадена матрица от символи(еднакъв брой колони и редове) отпечатва на екрана елементите,
    TODO: които се намират на главния диагонал(от горе в ляво към долу в дясно).
*/

function solution(nestedArr) {
    console.log(nestedArr);
    for (let i = 0, len = nestedArr.length, sumOfDiagonal = []; i < len; i++) {
        //! iterate through all rows
        //? ex: arr[0][0], arr[1][1], arr[2][2]
        sumOfDiagonal.push(nestedArr[i][i]);
        i === len - 1
            ? console.log(sumOfDiagonal)
            : '';
    }
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