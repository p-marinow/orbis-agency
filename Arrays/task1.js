/*
    TODO: Да се създаде масив с 20 произволни стойности (цели лисла)
    TODO: и след това да се покаже в конзолата кое е най-малкото и най-голямото от тях което се дели на 3 ако има такива.
*/

function solution(arr) {
    const result = [];
    console.log(`Array is ${arr.length} elements long`, arr);
    for (let i = 0; i < arr.length; i++) {
        //! every element divisible to 3 -> adds element to result[]
        arr[i] % 3 === 0 ? result.push(arr[i]) : '';
    }
    console.log(`Min: ${Math.min(...result)} Max: ${Math.max(...result)}`);
    //! log min number from result[] and max number from result[]
}

function solution2() {
    const arr = createRandomArray(20);
	//! declarate new Array with 20 random values
	let min;
	let max;
    for (let i = 0, len = arr.length; i < len; i++) 
	//! iterate through full length of Array with random values
	{
        if (!(arr[i] % 3)) {
			//! checking value on current index devisible 3 to be 0 and invert boolean
            if (!min || min > arr[i]) {
				//! checking current value of min is greater than current value of Array on current index

                min = arr[i];
				//! set new value as min
            }
            if (!max || max < arr[i]) {
				//! checking vurrent value of max is lesser than current value of Array on current index
				
                max = arr[i];
				//! set ne value as max
            }
        }
    }
    console.log('arr: ' + arr);
    console.log('min: ' + min);
    console.log('max: ' + max);
}

function inputSeed(x) {
    const arr = [];
    //! function generating Array with length equal input
    for (let i = 0; i < x; i++) {
        arr.push(randomNumber(-100, 300))
    }
    return arr;
}

solution(inputSeed(20));
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