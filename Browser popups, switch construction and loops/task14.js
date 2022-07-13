/* 
    TODO: Да се състави програма, която по въведено естествено число N от интервала [10 … 200] извежда в обратен ред всички числа, които са кратни на 7 и са по-малки от N.
*/

function solution(x) {
    console.log(`Number is: ${x}`);
    x -= x % 7
    let result = [];

    for(let i = x; i >= 0; i--) {
        i % 7 === 0 ? result.push(i): '';
    }
    console.log(result);
}   
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

solution(randomNumber(10, 200))