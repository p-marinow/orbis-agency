/*
    TODO: Да се създаде масив от 10 елемента с произволни стойности между 1 и 5.
    TODO: Да се направят отрязъци от масива, за всяка от стойностите от 1 до 5,
    TODO: визуализиращи елементите които са между първия и последния индекс на това число в масива(включително и самото число).
    TODO: Да се визуализира масива, както и отрязъците от него.
    TODO: Да се определи сумата на числата в кой от отрязъците е най-голяма.
    
    * Пример:
    * Масив: [3, 2, 1, 3, 4, 2, 1, 4, 1, 5]
    * Число - Отрязък               - Сума
    * 1     - 1, 3, 4, 2, 1, 4, 1   - 16
    * 2     - 2, 1, 3, 4, 2         - 12
    * 3     - 3, 2, 1, 3            - 9
    * 4     - 4, 2, 1, 4            - 11
    * 5     - 5 - 5
    * Largest sum: 1 - 16
*/

function solution(arr) {
    let result = [];
    let largestSum = 0;
    let outputNumber;
    console.log(`Array is: ${arr}\n`);
    for(let i = 1; i <= 5; i++) {
        result.push(arr.slice(arr.indexOf(i), arr.lastIndexOf(i) + 1));
        //! seed to make slaces for Numbers 1 - 5
        //! slice is starting from indexOf i to lastIndexOf + 1
    }

    for(let arr of result) {
        let sum = 0;
        //! set sum to 0 and iterate again
        if(arr[0] !== undefined) {
            //! log first Number and slice from seed
            console.log(`Slice of number ${arr[0]} is: ${arr}`);
        }
        for(let num of arr) {
            //! iterate through all Numbers current slice and sum values 
            sum += num;
        }
        if(sum > largestSum) {
            //! if current sum is greater than largest saved sum we override value of largestSum
            largestSum = sum;
            outputNumber = arr[0];
            //! set new Number for output of largest sum
        }
    }
    console.log(`Largest sum: ${outputNumber} - ${largestSum}`);
}

function inputSeed(x) {
    //! function generating Array with length equal input
    const arr = [];
    for (let i = 0; i < x; i++) {
        arr.push(randomNumber(1, 5))
    }
    return arr;
}

solution(inputSeed(10));
//solution([ 1,2,4,2,1,4,3,4,2,4])
//solution([3, 2, 1, 3, 4, 2, 1, 4, 1, 5]);

function randomNumber(min, max) {
    //! function generating random int number in input range
    return Math.round(Math.random() * (max - min) + min);
}