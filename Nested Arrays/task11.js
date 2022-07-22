/*
    TODO: Да се състави програма, при която предварително са въведени естествени числа в двумерен масив 4*4 елемента.
    TODO: Програмата да извежда резултат от проверката какво е съотношението на най-голямата сума по редове спрямо най-голямата сума по колони.
    
    ? Пример:
    * 1, 2, 3, 4
    * 5, 6, 7, 8
    * 9,10,11,12
    * 13,14,15,16

    ! Изход:
    * най-голяма сума по редове 58
    * най-голяма сума по колони 40
    * Максималната сума по редове е > от максималната сума по колони
*/

function solution() {
    let nestedArr = [
        [1,   2,  3,  4],
        [5,   6,  7,  8],
        [9,  10, 11, 12],
        [13, 14, 15, 16]
    ];

    let largestRowSum = 0;
    let largestColSum = 0;
    console.log(`Array is: `, nestedArr);

    for (let row = 0, len = nestedArr.length, rowSum = 0, colSum = 0; row < len; row++) {
        //! iterate through every row in nestedArr
        rowSum = 0;
        colSum = 0;

        for (let num of nestedArr[row]) {
            //! for every row sum all numbers and check which sum is greater
            rowSum += num;
        }
        
        if (rowSum > largestRowSum) {
            largestRowSum = rowSum;
        }

        for (let rows of nestedArr) {
            //! for every row with index row in nestedArr sum all numbers and check which sum is greater
            colSum += rows[row];
        }
        
        if (colSum > largestColSum) {
            largestColSum = colSum;
        }
    }

    console.log(`Largest row sum is: ${largestRowSum}\nLargest col sum is: ${largestColSum}`);
    console.log(largestRowSum > largestColSum ? `Row's sum is greater` : `Col's sum is greater`)
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

solution(inputSeed(4, 4));

function randomNumber(min, max) {
    //! function generating random int number in input range
    return Math.round(Math.random() * (max - min) + min);
}