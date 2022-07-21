/*
    TODO: Напишете програма, която намира най-често срещания елемент в масив.
    * Пример:
    * [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]
    * Изход:
    * 4 - 5 пъти.
*/

function solution(arr) {
    console.log(`Array is: `, arr);

    for (let i = 0, len = arr.length, count = 0, outputNumber, mostSeen = 0; i < len; i++) {
        //! iterate through full size of Array of numbers

        let startValue = arr[i];
        //! set floating startValue
        count = 0;

        for (let num of arr) {
            //! iterate for every number of Array

            if (startValue === num) {
                //! IF current value match with any number increment counter
                count++;
            }
            if (mostSeen < count) {
                //! IF there is greater counter set outputNumber
                mostSeen = count;
                outputNumber = num;
            }
        }

        i === len - 1 ? console.log(`Number is: ${outputNumber} - ${mostSeen}`) : '';
        //! log result at last iteration
    }
}

function inputSeed(x) {
    //! function generating Array with length equal input
    const arr = [];
    for (let i = 0; i < x; i++) {
        arr.push(randomNumber(1, 9))
    }
    return arr;
}

solution(inputSeed(10));

function randomNumber(min, max) {
    //! function generating random int number in input range
    return Math.round(Math.random() * (max - min) + min);
}