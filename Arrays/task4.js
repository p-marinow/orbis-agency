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
    let flag = true;
    //! set flag as true, because when is false values of Arrays are NOT equal
    for( let i = 0, lastIndex = arr.length - 1; i < arr.length / 2; i++) {
        //! iterate through middle of array
        if(arr[i] !== arr[lastIndex - i]) {
        //! check if index from start not equal index from end
            flag = false;
            break;
        }
    }
  
    console.log(`${arr} - array is`, flag === true 
        ? `mirrored!`
        : `not mirrored!`);
}

function solution2() {
    let num = utils.getPromptNumber(),
	arr = new Array(num),
	isMirrored = true;
    //! set value as 'true', so we can break if need

    for (let i = 0; i < num; i++) {
        arr[i] = utils.getPromptNumber();
    }

    for (let i = 0, half = Math.floor(num / 2); i < half; i++) {
        //! iterate through half Array
        console.log(i);
        if (arr[i] !== arr[num - 1 - i]) {
            //! if value of current index is not equal to value of Arrays length - 1 - current index of Array

            isMirrored = false;
            //! set value as false and break
            break;
        }
    }

    console.log('num: ' + num);
    console.log('arr: ' + arr);
    console.log('isMirrored: ' + isMirrored);
}

function inputSeed(x) {
    //! function generating Array with length equal input
    let arr = [];
    for (let i = 0; i < x; i++) {
        arr.push(randomNumber(1, 10))
    }
    return arr;
}

solution(inputSeed(randomNumber(2, 10)));
//solution2();

function randomNumber(min, max) {
    //! function generating random int number in input range
    return Math.round(Math.random() * (max - min) + min);
}

function getPromptNumber(text, error) {
    let num;
    do {
        num = +prompt((error || num !== undefined ? 'Не сте въвели валидно число!\n' : '') + (text ? text : 'Въведете число.'));
    } while (isNaN(num));
    return num;
}