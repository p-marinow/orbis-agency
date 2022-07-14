/* 
    TODO: Да се направи програма, която по дадено число N, да изчислява N!, т.е. 1*2*3*4...*N.
    ! Използвайте цикъл do-while.
    * Пример:
    * Число: 5
    * Резултат: 120  - 1*2*3*4*5
*/

function solution(x) {
    let flag = 0;
    let result = 1;
    let output = '';
    do {
        for(let i = 1; i <= x; i++) {
            result *= i;
            output += '' + i;
            if(i !== x) {
                output += '*'
            }
        }
        console.log(`Result is ${result} - ${output}`);

        flag++;
    } while(flag === 0)
}

solution(6)


function solution2(num) {
    let count = 1;
    let result = 1;
    let text = '';

    do {
        result *= count;
        text += count + '*';
    } while(++count <= num);
    console.log(result + ' - ' + text.slice(0, -1));

}

//solution2(6)