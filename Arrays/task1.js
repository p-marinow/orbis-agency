/*
    TODO: Да се създаде масив с 20 произволни стойности (цели лисла)
    TODO: и след това да се покаже в конзолата кое е най-малкото и най-голямото от тях което се дели на 3 ако има такива.
*/

function solution(arr) {
    const result = [];
    console.log(`Array is ${arr.length} elements long`, arr)
    for (let i = 0; i < arr.length; i++) {
        //! every element divisible to 3 -> adds element to result[]
        arr[i] % 3 === 0 ? result.push(arr[i]) : '';
    }
    console.log(`Min: ${Math.min(...result)} Max: ${Math.max(...result)}`);
    //! log min number from result[] and max number from result[]
}

const input = (x) => {
    //! function generating Array with length equal input
    const arr = [];
    for (let i = 0; i < x; i++) {
        arr.push(randomNumber(-100, 300))
    }
    return arr;
}

solution(input(20));

function randomNumber(min, max) {
    //! function generating random int number in input range
    return Math.round(Math.random() * (max - min) + min);
}