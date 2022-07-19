/*
    TODO: Да се въведе число, след което да се създаде масив с 10 елемента по следния начин:
    TODO: Първите 2 елемента на масива са въведеното число. Всеки следващ елемент на масива е равен на сбора от предишните 2 елемента в масива.
    TODO: След това изведете масива в конзолата.

    * Пример:
    * Число: 3
    * Масив: 3, 3, 6, 9, 15, 24, 39, 63, 102, 165
*/

function solution(x, arrTotal) {
    const result = [x, x];

    for (let i = result.length; i < arrTotal; i++) {
        //! push sum of previus 2 elements into same Array
        result.push(result[i - 1] + result[i - 2])
    }
    console.log(result);
}

function solution2(x) {
    const arr = new Array(10),
    //! declare new Array with size of 10
	num = x;
    arr[0] = num;
    //! set value for Array on first index
    arr[1] = num;
    //! set value for Array on second index
    for (let i = 2, len = arr.length; i < len; i++) {
        //! iterate throug full length of Array
        arr[i] = arr[i - 1] + arr[i - 2];
        //! set value of current Array index with sum of values of previus and pre previus indexes
    }
    console.log('num: ' + num);
    console.log('arr: ' + arr);

}

solution(randomNumber(1, 5), 10);
//solution2(randomNumber(1, 5))

function randomNumber(min, max) {
    //! function generating random int number in input range
    return Math.round(Math.random() * (max - min) + min);
}

