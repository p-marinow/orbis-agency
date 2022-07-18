/*
    TODO: Да се състави програма, която въвежда от клавиатурата 20 цели числа в едномерен масив и след това да се изведат числата кратни на 5, но по големи от 5.

    * Пример:
    * Масив: -23, 5, -55, 17, 75, 56, 105, 134
    * Резултат: 75,105
*/

function solution(arr) {
    let result = [];

    for(let num of arr) {
        num % 5 === 0 && num > 5
            ? result.push(num)
            : '';
    }
    
    console.log(`Input Array is: ${arr}`);
    console.log(result.length > 0
                    ? `Numbers are: ${result}`
                    : `There are no numbers`);
}

function inputSeed(x) {
    //! function generating Array with length equal input
    const arr = [];
    for (let i = 0; i < x; i++) {
        arr.push(randomNumber(-100, 100))
    }
    return arr;
}

solution(inputSeed(20));

function randomNumber(min, max) {
    //! function generating random int number in input range
    return Math.round(Math.random() * (max - min) + min);
}