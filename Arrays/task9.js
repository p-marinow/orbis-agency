/*
    TODO: Напишете програма, в която потребителя въвежда масив, след което елементите на масива се обръщат в обратен ред
    !(Целта не е масива да се отпечата в обратен ред, ами първо да се обърне, след което да се отпечата в нормален ред). 
    TODO: Пробвайте да решите задачата първо с един допълнителен масив и после без да използвате друг масив. Ако може без метода sort и reverse.
*/

function solution(arr) {
    console.log(`Random generated Array: ${arr}`);
    for(let i = 0, halfSize = arr.length / 2, initialLastIndex = arr.length - 1; i < halfSize; i++) {
        lastIndex = initialLastIndex - i;
        //! iterate over half of Array's length
        //! on every iteration swap elements in Array on index i and last element of Array minus index i
        [arr[i], arr[lastIndex]] = [arr[lastIndex], arr[i]]
    }
    console.log(arr);
}

function solution2(arr) {
    console.log('start arr: ' + arr);
    for (let i = 1, len = arr.length; i < len; i++) {
        //? iterate through full length of Array

        let removed = arr.splice(i, 1);
        //! take a single part starting from current index

        arr.unshift(removed[0]);
        //! put part in front of Array
    }
    console.log('reversed arr: ' + arr);
}

function inputSeed(x) {
    //! function generating Array with length equal input
    const arr = [];
    for (let i = 0; i < x; i++) {
        arr.push(randomNumber(-100, 300))
    }
    return arr;
}

solution(inputSeed(10));
solution2(inputSeed(10));

function randomNumber(min, max) {
    //! function generating random int number in input range
    return Math.round(Math.random() * (max - min) + min);
}