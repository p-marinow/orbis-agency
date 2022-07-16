/* 
    TODO: Да се въведе число между 1 и 10 след което да се създаде масив с дължина въведеното число и да се въведат стойности в него
    TODO: - всички стойности се въвеждат от потребителя.
    ! Да се определи дали масива е огледален и да се изведе резултата в конзолата.

    * Пример:
    * Число: 5
    * Масив: 1, 4, 5, 4, 1 - масива е огледален
    * или Масив: 1, 3, 5, 2, 6 - масива не е огледален
*/

function solution(arr) {
    let flag = false;
    for( let i = 1; i <= arr.length / 2; i++) {
        //! iterate through middle of array
        if(arr[i - 1] !== arr[arr.length - i]) {
        //! check if index from start not equal index from end
            flag = false;
            break;
        } else {
            flag = true;
        }
    }

    flag === true ? console.log(`${arr} - array is mirrored!`) : console.log(`${arr} - array is not mirrored!`);;
}

const inputSeed = (x) => {
    //! function generating Array with length equal input
    let arr = [];
    for (let i = 0; i < x; i++) {
        arr.push(randomNumber(1, 10))
    }
    return arr;
}

solution(inputSeed(randomNumber(1, 10)));
// solution([6, 9, 5, 4, 4, 9, 8, 6]);
// solution([6, 9, 5, 4, 5, 9, 6]);
// solution([6, 9, 5, 4, 4, 5, 9, 6]);
// solution([4, 4, 4, 4, 4, 4]);

function randomNumber(min, max) {
    //! function generating random int number in input range
    return Math.round(Math.random() * (max - min) + min);
}