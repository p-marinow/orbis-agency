/*
    TODO: Да се въведат от потребителя 2 масива с по 3 елемента и след това да се определи дали стойностите на двата масива са еднакви.
*/

function solution(arr1, arr2) {
    let flag = true;
    //! set flag as true, because when is false values of Arrays are NOT equal
    for(let i = 0; i < 3; i++) {
        //! check if Arrays's values on index i are NOT equal 
        if(arr1[i] !== arr2[i]) {
            flag = false;
            break;
        }
    }
    
    console.log(flag === true
                    ? `Yes`
                    : `No`, arr1, arr2);
}

function inputSeed(x) {
    //! function generating Array with length equal input
    const arr = [];
    for (let i = 0; i < x; i++) {
        arr.push(randomNumber(1, 10))
    }
    return arr;
}
solution([1, 2, 3], [1, 2, 3]);
solution([5, 6, 7], [7, 6, 5]);
solution(inputSeed(3), inputSeed(3));

function randomNumber(min, max) {
    //! function generating random int number in input range
    return Math.round(Math.random() * (max - min) + min);
}