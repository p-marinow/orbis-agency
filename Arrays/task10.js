/*
    TODO: Да се състави масив с произволни числа от 0 до 1000.
    TODO: Да се изчисли средната стойност на числата и 
    TODO: да се каже кое от числата е най-близо до средната стойност и на кой индекс се намира то.
*/

function solution(arr) {
    let totalSum = 0;
    let matchingNumbers = [];
    let indexOf = [];

    for(let num of arr) {
        //! finding total sum of all numbers in Array
        totalSum += num;
    }
    
    let avrSum = Math.round(totalSum / arr.length);
    let differance = Math.abs(avrSum - arr[0]);
    //! set starting difference
    for(let num of arr) {  
        let smallerDifference = Math.abs(avrSum - num);
        if(differance >= smallerDifference) {
            //! set new smaller difference between avrSum and current Number from Array
            differance = smallerDifference;
        } 
    }

    for(let num of arr) {
        //! check for Numbers that match our smallest difference
        Math.abs(avrSum - num) === differance
            ? matchingNumbers.push(num)
            : '';
    }

    for(let num of matchingNumbers) {
        //! get index/s of Numbers that match our smallest difference
        indexOf.push(arr.indexOf(num));
    } 

    console.log(`Avr. number of input Array [${arr}] is: ${avrSum}`);
    console.log(`Match: ${matchingNumbers} with index: ${indexOf} \n`); 
}

function inputSeed(x) {
    //! function generating Array with length equal input
    const arr = [];
    for (let i = 0; i < x; i++) {
        arr.push(randomNumber(1, 1000))
    }
    return arr;
}

solution(inputSeed(5));
//solution([1, 2, 3, 4, 5])
//solution([1, 5, 4, 2]);

function randomNumber(min, max) {
    //! function generating random int number in input range
    return Math.round(Math.random() * (max - min) + min);
}