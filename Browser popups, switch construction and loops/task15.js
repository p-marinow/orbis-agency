/*
    TODO: Да се състави програма, която да изчисли сумата на всички числа от 1 до въведено число N.
    * Пример:
    * Числото ако е 5
    * Изход: 15 - (1+2+3+4+5)
*/

function solution(x) {
    let result = 0;
    console.log(`Number is ${x}`);
    for(let i = 1; i <= x; i++) {
        result += i;
    }
    console.log(result);
}

const x = solution(Math.floor(Math.random() * 10))
