/* 
    TODO: Да се създаде масив с 10 елемента и след това да се инициализира на всеки от елементите му стойност равна на индекса на елемента по 3.
    TODO: Да се изкара в конзолата.
*/

function solution() {
    const arr = new Array(10);
    console.log(arr);
    for (let i = 0; i < 10; i++) {
        arr[i] = i * 3;
    }
    console.log(arr);
}

solution()