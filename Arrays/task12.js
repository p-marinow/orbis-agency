/*
    TODO: :  Да се създаде масив от 10 произволни числа от 1 до 10 и след това между числата да се вмъкнат знаците >, <, =.

    * Пример:
    * Масив: [4,7,2,2,4,7,7,1,6,2]
    * Резултат: [4, ’<’, 7, ’>’, 2, ’=’, 2, ’<’, 4, ’<’, 7, ’=’, 7, ’>’, 1, ’<’, 6, ’>’, 2]
*/

function solution(arr) {
    console.log(`Input Array is: ${arr}`);
    for(let i = arr.length - 1; i > 0; i--) {
        //? iterate backward through full length of Array
        if(arr[i - 1] > arr[i]) {
            //! if left number is greater than right number
            arr.splice(i, 0, '>');
        } else {
            arr[i - 1] < arr[i]
            //! if right number is greater than left number
                ? arr.splice(i, 0, '<')
                //! if both numbers not  >, < they are equal
                : arr.splice(i, 0, '=');
        }
    }
    console.log(`Result is: ${arr}`);
}

function inputSeed(x) {
    //! function generating Array with length equal input
    const arr = [];
    for (let i = 0; i < x; i++) {
        arr.push(randomNumber(1, 10))
    }
    return arr;
}

solution(inputSeed(10));

function randomNumber(min, max) {
    //! function generating random int number in input range
    return Math.round(Math.random() * (max - min) + min);
}