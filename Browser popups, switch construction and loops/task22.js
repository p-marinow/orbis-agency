/* 
    TODO: Да се състави програма, която извежда първите 10 най-малки числа, които се делят на 2, 3 или на 5 и които са по-големи от въведено естествено число.
    TODO: Числата се извеждат, заедно с техния пореден номер. Входни данни: число от интервала [1 … 999]. 
    ! Използвайте цикъл while.
    * Пример:
    * Число: 1
    * Резултат: 1:2; 2:3, 3:4, 4:5, 5:6, 6:8, 7:9, 8:10, 9:12, 10:14 
*/



function solution(x) {
    let flag = 1;
    console.log(`Number is ${x}\n`);
    while(flag <= 10) { 
        //! log flag:x, ONLY if result is printed -> increment flag else x++ for next value  
        if(x % 2 === 0 || x % 3 === 0 || x % 5 === 0) {
            console.log(`${flag}: ${x}`);  
            flag++;
        }
        x++
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//solution(randomNumber(1, 999))
//solution(1)
