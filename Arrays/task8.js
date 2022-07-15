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
    let sequence = '';
    let largest = '';
    let currentIndexOf = 0;
    let outputIndex = [];
    let outputSequence = [];
    console.log(arr);
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === arr[i + 1] && sequence.length === 0) {
            //! adding current value as first element in chain
            //! set indexOf to first ocurring of value
            sequence += arr[i];
            if(arr[i] + 1 !== -1) {
                //! if element is not last element we set currentIndexOf
                currentIndexOf = arr.indexOf(+sequence[0], i);
            }
        }
        //! if value of current index is equal to value of next index
        //! concatenate current value to sequence and set indexOf to current Array's element
        if(arr[i] === arr[i + 1]) {
            sequence += arr[i];
        } else {
            //! if value of current index !== value of next index
            sequence = '';       
        }

        if(sequence.length >= largest.length) {
            //! if sequence length >= largest length set largest with current value of sequence 
            if(+sequence[0] > +largest[0]) {
                sequence += sequence;
                outputSequence.push(sequence);
                outputIndex.push(currentIndexOf);
            } else {
                largest = sequence;
                outputSequence.push(largest);
            }
        }
    }
    console.log(`Number is: ${outputSequence.pop()[0]}`);
    console.log(`Index of sequence: ${+outputIndex[0]}`);
    console.log(`Output of sequence: ${outputSequence}`);
    console.log(`Lenght is: ${largest.length}`);
}

const input = (x) => {
    //! function generating Array with length equal input
    const arr = [];
    for (let i = 0; i < x; i++) {
        arr.push(randomNumber(0, 2))
    }
    return arr;
}

solution(input(10));
//solution([1, 1, 2, 0, 1, 1, 1, 2, 2, 2]);
//solution([1, 1, 2, 1, 1, 1, 1, 1, 0, 2]);
//solution([0, 1, 0, 1, 1, 1, 0, 1, 1, 1]);
//                               #8                   #15
//solution([0, 1, 0, 1, 1, 1, 0, 0, 2, 2, 2, 0, 1, 0, 0, 2, 2, 2, 1, 0, 1]);

function randomNumber(min, max) {
    //! function generating random int number in input range
    return Math.round(Math.random() * (max - min) + min);
}