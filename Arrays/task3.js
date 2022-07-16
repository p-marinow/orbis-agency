/*
    TODO: Да се въведе число, след което да се създаде масив с 10 елемента по следния начин:
    TODO: Първите 2 елемента на масива са въведеното число. Всеки следващ елемент на масива е равен на сбора от предишните 2 елемента в масива.
    TODO: След това изведете масива в конзолата.

    * Пример:
    * Число: 3
    * Масив: 3, 3, 6, 9, 15, 24, 39, 63, 102, 165
*/

function solution(x) {
    const result = [];
    result.push(x, x);
    //! push input number twice

    for (let i = 2; i < 10; i++) {
        //! push sum of previus 2 elements into same Array
        result.push(result[i - 1] + result[i - 2])
    }
    console.log(result);
}

solution(randomNumber(1, 5));


function randomNumber(min, max) {
    //! function generating random int number in input range
    return Math.round(Math.random() * (max - min) + min);
}