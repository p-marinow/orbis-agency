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
    
    let avrValue = Math.round(totalSum / arr.length);
    let differance = Math.abs(avrValue - arr[0]);
    //! set starting difference
    for(let num of arr) {
        let smallerDifference = Math.abs(avrValue - num);
        if(differance >= smallerDifference) {
            //! set new smaller difference between avrSum and current Number from Array
            differance = smallerDifference;
        } 
    }

    for(let num of arr) {
        //! check for Numbers that match our smallest difference
        Math.abs(avrValue - num) === differance
            ? matchingNumbers.push(num)
            : '';
    }

    for(let num of matchingNumbers) {
        //! get index/s of Numbers that match our smallest difference
        indexOf.push(arr.indexOf(num));
    } 

    console.log(`Avr. number of input Array [${arr}] is: ${avrValue}`);
    console.log(`Match: ${matchingNumbers} with index: ${indexOf} \n`); 
}

function solution2(arr) {
	let sum = 0;
	let average;
	let closest;

    for (let i = 0, len = arr.length; i < len; i++) {
        //? iterate through full length of Array to sum all values of Array
        sum += arr[i];
    }

    average = sum / arr.length;

    for (let i = 0, len = arr.length; i < len; i++) {
        if (closest === undefined || Math.abs(average - arr[i]) < Math.abs(average - closest)) {
            closest = arr[i];
        }
    }

    // // solution 2
    // let arr2 = arr.slice(); // copy the array
    // arr2.push(average);
    // arr2.sort(function(a, b) { return a - b });

    // let avgIndex = arr2.indexOf(average);
    // let prevDiff = average - arr2[avgIndex - 1];
    // let nextDiff = arr2[avgIndex + 1] - average;
    // closest = prevDiff < nextDiff ? arr2[avgIndex - 1] : arr2[avgIndex + 1];

    // output
    console.log('arr: ' + arr);
    console.log('average: ' + average);
    console.log('closest: ' + closest);
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
//solution2(inputSeed(5));

function randomNumber(min, max) {
    //! function generating random int number in input range
    return Math.round(Math.random() * (max - min) + min);
}