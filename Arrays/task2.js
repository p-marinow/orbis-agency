/* 
    TODO: Да се създаде масив с 5 произволни стойности. Да се създаде втори масив в който първите му 5 елемента да са като на първия масив,
    TODO: а вторите 5 да са обърнати.

    * Пример: 
    * Масив 1: 4, 1, 7, 3, 5
    * Масив 2: 4, 1, 7, 3, 5, 5, 3, 7, 1, 4
    * Допълнително: дължината на първия масив да е произволно число между 5 и 10.
*/

function solution(arr) {
    console.log(`Random generated Array is: `, arr);
    const arrReverse = [];
    for (let i = arr.length; i > 0; i--) {
        //! starting from last index of input Array and push every element into arrReverse
        arrReverse.push(arr[i - 1]);
    }
    console.log(arr.concat(arrReverse));
    //! concatenate both Arrays
}

function inputSeed(x) {
    //! function generating Array with length equal input
    const arr = [];
    for (let i = 0; i < x; i++) {
        arr.push(randomNumber(-100, 300))
    }
    return arr;
}

solution(inputSeed(5));

function randomNumber(min, max) {
    //! function generating random int number in input range
    return Math.round(Math.random() * (max - min) + min);
}