/*
    TODO: Имате предварително въведени стойности от естествени числа. Числата са въведени в квадратна таблица с размери 6 реда и 6 колони.
    TODO: Да се състави програма, чрез която се намира сумата на всички елементи от редовете с четни номера: 2, 4 и 6 както и общия им сбор.

    ? Пример:
    [11,12,13,14,15,16],
    [21,22,23,24,25,26],
    [31,32,33,34,35,36],
    [41,42,43,44,45,46],
    [51,52,53,54,55,56],
    [61,62,63,64,65,66]
    
    ! Изход:
    [21,22,23,24,25,26] сума 141
    [41,42,43,44,45,46] сума 261
    [61,62,63,64,65,66] сума 381
    Сума на елементите 783
*/

function solution(nestedArr) {
    console.log(`Array is: `, nestedArr,'\n');
    let sumOfRow = 0;
    let sumOfAllRows = 0;
    let sumArr = [];
    let rowArr = [];
    for (let i = 1, len = nestedArr.length; i < len; i+=2) {
            sumOfRow = 0;

            for (let num of nestedArr[i]) {
                sumOfRow += num;
            }

            sumArr.push(sumOfRow);
            rowArr.push(nestedArr[i]);  
    }

    for(let i = 0; i < sumArr.length; i++) {
        console.log(rowArr[i], `Sum is: ${sumArr[i]}`);
    }

    for (let num of sumArr) {
        sumOfAllRows += num;
    }
    console.log(`\nTotal sum of all even rows is: ${sumOfAllRows}`);
}

function inputSeed(m) {
    const arr = [];
     //! function generating Double dimensional Array with size M x M
    for (let i = 0; i < m; i++) {
        arr[i] = [];
        for (let j = 0; j < m; j++) {
            arr[i][j] = randomNumber(1, 100)
        }   
    }
    return arr;
}

solution(inputSeed(6));

function randomNumber(min, max) {
    //! function generating random int number in input range
    return Math.round(Math.random() * (max - min) + min);
}