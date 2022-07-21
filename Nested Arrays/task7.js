/*
    TODO: Имате двумерен масив 6х5 от естествени числа, чийто стойности са въведени предварително(може да си ги генерирате, за да не ги пишете на ръка).
    TODO: Да се състави програма, чрез която се извеждат елементите от масива с най-малката и най-голямата стойност.
    
    ? Пример:
       [
        [48, 72, 13, 14, 15],
        [21, 22, 53, 24, 75],
        [31, 57, 33, 34, 35],
        [41, 95, 43, 44, 45],
        [59, 52, 53, 54, 55],
        [61, 69, 63, 64, 65]
       ]
    ! Изход:
    * най-малко 13
    * най-голямо 95
*/

function solution(nestedArr) {
    console.log(nestedArr);

    let largestNum = Number.MIN_SAFE_INTEGER;
    let smallestNum = Number.MAX_SAFE_INTEGER;

    for (let row of nestedArr) {
        //! iterate through all rows
        for (let num of row) {
            //! for every num in row checking for new values
            num > largestNum 
                ? largestNum = num 
                : num < smallestNum 
                    ? smallestNum = num 
                    : '';
        }
    }
    console.log(`Largest num is: ${largestNum}\nSmallest num is: ${smallestNum}`);
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