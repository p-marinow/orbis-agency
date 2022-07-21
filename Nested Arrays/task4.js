/*
    TODO: Напишете програма, която за матрица от булеви стойности,
    ! проверява дали се съдържа елемент със стойност true над втория диагонал(от горе в дясно към долу в ляво).
*/

function solution(arr) {
    // let arr = [
    //     [false, false, false, false],
    //     [false, false, false, false],
    //     [false, false, false, false],
    //     [false, false, false, false]
    //         ];

    console.log(arr);

    let flag = false;
    //! initiate flag to false, IF true break loop

    firstLoop: //! LOOP TAG
    for (let i = 0, len = arr.length; i < len; i++) {
        //! iterate through all rows

        for (let j = 0, len = arr[i].length - 1 - i; j < len; j++) {
            //! iterate through full length of (row - 1) so we loop only from starting index to pre last index
            //! of every iteration substract current row index so we loop only to middle of nestedArray
            //? ex: [0, 1, 2] => (3 - 1) - 0 => [0, 1]
            //?     [0, 1, 2] => (3 - 1) - 1 => [0]
            //?     [0, 1, 2] => (3 - 1) - 2 =>

            if(arr[i][j]) {
                //! IF current cell is with 'true' value set flag to true and break loop
                console.log(`Array contain 'true' value, first match is on: ${i}x${j}`);
                flag = true;
                break firstLoop;
            }
        }  
    }
    flag ? '' : console.log('None \'true\' value');
}

function inputSeed(m) {
    const arr = [];
    //! function generating Array with length equal input
    for (let i = 0; i < m; i++) {
        arr[i] = [];
        for (let j = 0; j < m; j++) {
            randomNumber(0, 1) 
                ? arr[i][j] = true
                : arr[i][j] = false;
        }   
    }
    return arr;
}

solution(inputSeed(4));

function randomNumber(min, max) {
    //! function generating random int number in input range
    return Math.round(Math.random() * (max - min) + min);
}