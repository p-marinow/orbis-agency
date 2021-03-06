/*
    TODO: Да се създадат два масива с 10 произволни уникални стойности от 1 до 20.
    TODO: Ако дадена стойност във втория масив я има и в първия масив то тя да се премахне от втория
    TODO: и да се вмъкне в първия непосредствено след същата стойност в първия масив и въпросната цифра да бъде префиксната с буквата “n”.
    TODO: Да се визуализират в конзолата двата масива.

    * Пример:
    * Първи масив: 8, 16, 11, 19, 20, 3, 18, 7, 10
    * Втори масив: 3, 11, 14, 12, 6, 7, 8, 10, 13, 19

    * Резултат:
    * Първи масив: 8, ’n8’, 16, 11, ’n11’, 19, ’n19’, 20, 3, ’n3’, 18, 7, ’n7’, 10, ’n10’
    * Втори масив: 14, 12, 6, 13
*/

function solution(arr1, arr2) {
    console.log(`\tFIRST / SECOND\n${arr1}\n${arr2}\n`);
    for(let i = 0; i < arr1.length; i++) {
        //! iterate through first Array
        for(let num of arr2) {
            //! for every index i of first Array -> iterate throuh values of second Array
            if(num === arr1[i]) {
                //! if value of second Array match with value of current iteration 
                arr1.splice(i + 1, 0, 'n' + num);
                //! splice from index i + 1 -> don't delete any value -> add 'n' + num
                arr2.splice(arr2.indexOf(num), 1);
                //! splice from indexOf current value of second Array -> delete 1 value
            }
        }
    }
    console.log(`First Array is: ${arr1}`);
    console.log(`Second Array is: ${arr2}`);
}

function solution2(arr1, arr2) {
    console.log('before arr1: ' + arr1);
    console.log('before arr2: ' + arr2);

    for (let i = arr2.length - 1, index, removed; i >= 0; i--) {
        index = arr1.indexOf(arr2[i]);
        if (index !== -1) {
            removed = arr2.splice(i, 1);
            arr1.splice(index + 1, 0, 'n' + removed[0]);
        }
    }

    console.log('after arr1: ' + arr1);
    console.log('after arr2: ' + arr2);

}

function uniqueInputSeed(x) {
    //! function generating Array with length equal input
    const arr = [];
    do {
        number = randomNumber(1, 20);
        if(arr.includes(number) === false) {
            arr.push(number);
        }
    } while(arr.length <= x);
    return arr;
}

solution(uniqueInputSeed(10), uniqueInputSeed(10));
//solution2(uniqueInputSeed(10), uniqueInputSeed(10))

function randomNumber(min, max) {
    //! function generating random int number in input range
    return Math.round(Math.random() * (max - min) + min);
}