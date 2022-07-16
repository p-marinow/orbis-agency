/*
    TODO: :  Да се създаде масив от 10 произволни числа от 1 до 10 и след това между числата да се вмъкнат знаците >, <, =.

    * Пример:
    * Масив: [4,7,2,2,4,7,7,1,6,2]
    * Резултат: [4, ’<’, 7, ’>’, 2, ’=’, 2, ’<’, 4, ’<’, 7, ’=’, 7, ’>’, 1, ’<’, 6, ’>’, 2]
*/

function solution(arr) {
    let result = [];
    result.push(arr[0]);
    console.log(`Input Array is: ${arr}`);
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] > arr[i + 1]) {
            result.push('>', arr[i + 1]);
        } else {
            arr[i] < arr[i + 1] 
                ? result.push('<', arr[i + 1])
                : result.push('=', arr[i + 1]);
        }
    }
    console.log(`Result is: ${result}`);
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
//solution([1, 2, 3, 4, 5])
//solution([1, 5, 4, 2]);

function randomNumber(min, max) {
    //! function generating random int number in input range
    return Math.round(Math.random() * (max - min) + min);
}