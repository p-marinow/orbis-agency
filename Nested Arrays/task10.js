/*
    TODO: Имате предварително въведени стойности на елементи в двумерен масив - естествени числа.
    TODO: Да се състави програма, чрез която се извеждат стойностите на елементите в двумерен масив след обръщането му на +90 градуса.

    ? Пример:
    * [1, 2, 3, 4],
    * [5, 6, 7, 8],
    * [9,10,11,12],
    * [13,14,15,16]
    
    ! Изход:
    * [13, 9, 5, 1],
    * [14,10, 6, 2],
    * [15,11, 7, 3],
    * [16,12, 8, 4]
*/


function solution() {
    let arr = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]
        ];

    let copyArrayRight = [[], [], [], []];
    let copyArrayLeft = [[], [], [], []];
    console.log(`Array is: `, arr);

    for (let i = arr.length - 1; i >= 0; i--) {
        //! turn right >>>
        for (let j = arr.length - 1; j >= 0; j--) {
            copyArrayRight[i].push(arr[j][i]);
        }
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        //! turn left <<<
        for (let j = arr.length - 1; j >= 0; j--) {
            copyArrayLeft[j][i] = arr[i][j];
        }
    }

    console.log(`Rotate right: `, copyArrayRight);
    console.log(`Rotate left: `, copyArrayLeft);

    // let arr2 = [
    //     [1, 2, 3, 4, 5],
    //     [5, 6, 7, 8],
    //     [9, 10, 11, 12],
    //     [13, 14, 15, 16],
    //     [5]
    // ];
    
    // let copyArray2 = [[],[],[],[],[]];

    // for (let i = arr2.length - 1; i >= 0; i--) {
    //     //! turn right <
    //     for (let j = arr2.length - 1; j >= 0; j--) {
    //         copyArray2[i].push(arr2[j][i]);
    //     }
    // }

    // console.log('Rotated Array2 is: ',copyArray2);

}

function inputSeed(m, n) {
    const arr = [];
    //! function generating Double dimensional Array with size M x N
    for (let i = 0; i < m; i++) {
        arr[i] = [];
        for (let j = 0; j < n; j++) {
            arr[i][j] = randomNumber(1, 100)
        }   
    }
    return arr;
}

solution(inputSeed(4, 4));

function randomNumber(min, max) {
    //! function generating random int number in input range
    return Math.round(Math.random() * (max - min) + min);
}