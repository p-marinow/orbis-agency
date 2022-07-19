/* 
    TODO: Да се създаде масив с 10 елемента и след това да се инициализира на всеки от елементите му стойност равна на индекса на елемента по 3.
    TODO: Да се изкара в конзолата.
*/

function solution() {
    const arr = new Array(10);
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = i * 3;
    }
    console.log(arr);
}

function solution2() {
    const arr = new Array(10);

    console.log('before: ' + arr);

    for (let i = 0, len = arr.length; i < len; i++) {
        arr[i] = i * 3;
    }

    console.log('after: ' + arr);
}

solution()
//solution2()