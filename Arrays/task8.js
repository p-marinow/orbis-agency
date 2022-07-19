/*
    TODO: Създайте масив от 20 стойности, който да съдържа само стойностите от 0 до 2.
    TODO: Създайте програма която определя коя е най-дългата поредица от еднакви числа.
    TODO: Изведете в конзолата кое е числото, от кой индекс започва поредицата и колко е дълга поредицата.
    ! Ако има две еднакво дълги поредици от едно и също число то да се взема първата такава поредица.
    ! Ако има две еднакво дълги поредици от различни числа то да се взема тази на по-голямото число.

    * Пример:
    * Масив: 010111002220100222101
    * Числото е: 2
    * Индекса е: 8
    * Дължината е: 3
*/

function solution(arr) {
    let largest = [];
    let outputIndex = 0;

    console.log(`Array is: ${arr.join('')}`);
    for(let i = 0, sequence = [arr[i]], currentIndexOf = 0; i < arr.length; i++) {
        if(sequence.length === 1) {
            //! adding current value as first element in sequence
            //! set indexOf to first ocurring of value
            currentIndexOf = arr.indexOf(sequence[0], i - sequence.length);
            if(i === 0) {
                //! if element is first in Array we set currentIndexOf of sequence
                currentIndexOf = arr.indexOf(sequence[0]);
            }
        }
        //! if value of current index is equal to value of next index
        //! concatenate current value to sequence and set indexOf to current Array's element
        if(arr[i] === arr[i + 1]) {
            sequence.push(arr[i]);
        } else {
            //! if value of current index !== value of next index
            sequence = [arr[i + 1]];
        }

        if(sequence.length > largest.length) {
        //! if sequence length >= largest length set largest with current value of sequence
            largest = sequence;
            outputIndex = currentIndexOf;
        }
        if(sequence[0] > largest[0] && sequence.length === largest.length) {
            largest = sequence;
            outputIndex = currentIndexOf;
        }
    }
    console.log(`Number is: ${largest[0]}`);
    console.log(`Index of sequence: ${outputIndex}`);
    console.log(`Lenght is: ${largest.length}`);
}

function solution2(arr) {
	let longestIndexStart = 0;
    let	longestIndexEnd = 0;
    let lastIndexStart = 0;
	let num = arr[0];
	let lastNum = num;

    for (let i = 1, len = arr.length; i < len; i++) {
        //? iterate throuh full length of Array
        if (arr[i] !== lastNum) {
            //? checking if value of Array on current index is NOT equal to last set of lastNum
            //! set new last starting index
            lastIndexStart = i;
            if (longestIndexEnd - longestIndexStart === 0 && arr[i] > num) {
                //? checking IF difference between longest sequence is equal 0 AND value on current index greater than current value of number
                longestIndexStart = lastIndexStart;
                longestIndexEnd = i;
                //! set new longestIndex

                num = arr[i];
                //! num is set as value of Array on current index
            }
        } else {
            //? checking IF current value of Array on current index is equal to value of lastNum
            //? current longest
            if (longestIndexStart === lastIndexStart) {
                longestIndexEnd = i;
            } else if (
                //! new longest or same length but higher value
                i - lastIndexStart > longestIndexEnd - longestIndexStart
                || (
                    i - lastIndexStart === longestIndexEnd - longestIndexStart
                    && lastNum > num
                )
            ) {
                longestIndexStart = lastIndexStart;
                longestIndexEnd = i;
                num = lastNum;
            }
        }
        lastNum = arr[i];
    }

    console.log('arr: ' + arr);
    console.log('num: ' + num);
    console.log('index: ' + longestIndexStart);
    console.log('length: ' + (longestIndexEnd - longestIndexStart + 1));


}

function inputSeed(x) {
    //! function generating Array with length equal input
    const arr = [];
    for (let i = 0; i < x; i++) {
        arr.push(randomNumber(0, 2))
    }
    return arr;
}

solution(inputSeed(10));
//                               #8                   #15
//solution([0, 1, 0, 1, 1, 1, 0, 0, 2, 2, 2, 0, 1, 0, 0, 2, 2, 2, 1, 0, 1]);7
//solution2(inputSeed(10))

function randomNumber(min, max) {
    //! function generating random int number in input range
    return Math.round(Math.random() * (max - min) + min);
}