/*
    TODO: Дадена е правоъгълна матрица с числа. Да се намери в нея максималната подматрица с размер 2 х 2 и да се отпечата в конзолата.
    TODO: Под максимална подматрица се разбира подматрица, която има максимална сума на елементите, които я съставят.
*/

function solution(nestedArray) {
    let highestResult = [];
    let highestSum = 0;
    console.log(nestedArray);
    for (let row = 0, len = nestedArray.length - 1; row < len; row++) {
        //! iterate through all rows

        for (let col = 0, len = nestedArray[row].length - 1; col < len; col++) {
            //! iterate through columns in a nestedArray's rows

            let currentSum = nestedArray[row][col] + nestedArray[row][col + 1] + nestedArray[row + 1][col] + nestedArray[row + 1][col + 1];

            if(currentSum > highestSum) {
                highestSum = currentSum;
                highestResult = [nestedArray[row][col], nestedArray[row][col + 1], nestedArray[row + 1][col], nestedArray[row + 1][col + 1]];
            }
        }
    }
    console.log(`Highest sum ${highestSum} is from`, highestResult);
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

solution(inputSeed(3, 5));

function randomNumber(min, max) {
    //! function generating random int number in input range
    return Math.round(Math.random() * (max - min) + min);
}