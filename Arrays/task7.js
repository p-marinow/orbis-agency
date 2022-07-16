/* 
    TODO: Да се създаде масив с 10 произволни стойности.
    TODO: Да се създаде втори масив като стойностите на неговите елементи да се вземат като сбор от стойностите на елементите на заобграждащите го индекси от първия масив.

    * Пример:
    * Масив1: 2, 6, 2, 3, 5, !7, 1, 4, 9, 1
    * Масив2: 6, 4, 9, 7, !10, 6, !11, 10, 5, 9
    * Визуализация на смятането на Масив2:
    * (0+6), (2+2), (6+3), (2+5), (3+7), (5+1), (7+4), (1+9), (4+1), (9+0)
*/

function solution(arr) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        //! arr.slice(6 - 1, 6) + arr.slice(6 + 1, 6 + 2)
        output[i] = +arr.slice(i - 1, i) + +arr.slice(i + 1, i + 2);
    }
    console.log(`Array is: `, arr);
    console.log(output.join(', '));
}

const inputSeed = (x) => {
    //! function generating Array with length equal input
    const arr = [];
    for (let i = 0; i < x; i++) {
        arr.push(randomNumber(1, 10))
    }
    return arr;
}

solution(inputSeed(10));
//solution([2, 6, 2, 3, 5, 7, 1, 4, 9, 1]);

function randomNumber(min, max) {
    //! function generating random int number in input range
    return Math.round(Math.random() * (max - min) + min);
}