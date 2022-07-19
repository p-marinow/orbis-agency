/* 
    TODO: Да се създаде масив с 5 произволни стойности. Да се създаде втори масив в който първите му 5 елемента да са като на първия масив,
    TODO: а вторите 5 да са обърнати.

    * Пример: 
    * Масив 1: 4, 1, 7, 3, 5
    * Масив 2: 4, 1, 7, 3, 5, 5, 3, 7, 1, 4
    * Допълнително: дължината на първия масив да е произволно число между 5 и 10.
*/

function solution(arr) {
    console.log(`Random generated Array is: `, arr);
    const arrReverse = [];
    for (let i = arr.length; i > 0; i--) {
        //! starting from last index of input Array and push every element into arrReverse
        arrReverse.push(arr[i - 1]);
    }
    console.log(arr.concat(arrReverse));
    //! concatenate both Arrays
}

function solution2() {
    const arr1 = createRandomArray(getRandomNumberBetween(5, 10, true));
    //! generate Array with random values with length(random number between 5, 10)
 	let arr2 = new Array(arr1.length * 2);
    //! declarate new Array with double size of Array with random values
    for (let i = 0, len = arr1.length; i < len; i++) {
        //! iterate through full length of Array with random values

        //! set value for current index of new Array equal to value of current index of Array with random values 
        arr2[i] = arr1[i];

        //! set value for current index plus length of Array with random values equal to value of last index minus current index of Array with random values
        arr2[i + len] = arr1[len - 1 - i];
    }
    console.log('arr1: ' + arr1);
    console.log('arr2: ' + arr2);
}

function inputSeed(x) {
    //! function generating Array with length equal input
    const arr = [];
    for (let i = 0; i < x; i++) {
        arr.push(randomNumber(-100, 300))
    }
    return arr;
}

solution(inputSeed(5));
//solution2()

function randomNumber(min, max) {
    //! function generating random int number in input range
    return Math.round(Math.random() * (max - min) + min);
}

function createRandomArray(length, min, max) {
	min = min || 0; // use 0 as default value
	max = max || 100; // use 100 as default value
	const arr = new Array(length);
	for (let i = 0; i < arr.length; i++) {
		arr[i] = min + Math.round(Math.random() * (max - min));
	}
	return arr;
}

function getRandomNumberBetween(min, max, round) {
	let num = min + Math.random() * (max - min);
	if (round) {
		num = Math.round(num);
	}
	return num;
}