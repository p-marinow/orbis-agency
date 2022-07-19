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

function solution2(arr) {
    const arr2 = [];

    for (var i = 0, len = arr.length; i < len; i++) {
        //? iterate through full size of Array
        if (arr[i] > 5 && arr[i] % 5 === 0) {
            //! checking IF value of current index of Array is greater than 5 AND divisible to 5

            arr2.push(arr[i]);
            //! set new value in second Array
        }
    }

    console.log('arr1: ' + arr);
    console.log('arr2: ' + arr2);
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
solution2(inputSeed(20));

function randomNumber(min, max) {
    //! function generating random int number in input range
    return Math.round(Math.random() * (max - min) + min);
}