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
            //? 3x0 2x0 ...
            //? 3x1 ... 0x2
            //? ... 2x3 0x3
            //! on row[0] -> [lastIndex--][indexOfRow]
            copyArrayRight[i].push(arr[j][i]);
        }
    }

    for (let row of arr) {
        //! turn left <<<
        for (let i = 0, len = arr.length - 1; i <= len; i++) {   
            //? ... ... 3x3
            //? 0x1 ... ...
            //? 0x0 1x0 ...
            //! from top to bottom rows -> PUSH element from current row (start from first row) with index[i](start from index 0)
            //! into last copy[] row => [ixRow]
            //? ex: on row[last--].push(row[0], row[1])
            copyArrayLeft[len - i].push(row[i]);
        }
    }

    console.log(`Rotate right: `, copyArrayRight);
    console.log(`Rotate left: `, copyArrayLeft);

////==========================================================

    // let arr2 = [
    //     [1, 2, 3, 4],
    //     [5, 6, 7, 8],
    //     [9, 10, 11, 12, 'x'],
    //     [13, 14, 15, 16],
    //     ['x'],
    //     ['x']
    // ];

    //let copyArray = [[],[],[],[],[]];

    // let longest = 0;
    // for (let row of arr2) {
    //     //! check for longest length of row
    //     longest < row.length
    //         ? longest = row.length
    //         : '';
    // }
    
    // for (let i = longest - 1; i >= 0; i--) {
    //     //! turn right >>>
    //     for (let j = arr2.length - 1; j >= 0; j--) {
    //         arr2[j][i] !== undefined 
    //             ? copyArray2[i].push(arr2[j][i])
    //             : copyArray2[i].push('');   
    //     }
    // }

    //console.log('Rotated Array2 is: ',copyArray2);
}

solution();