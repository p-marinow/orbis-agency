function task1(number, radix) {
  const result = parseInt(number, radix);
  console.log(result.toString(10));
}
// Input     	Output
// base-7     base-10
// 315      	159
task1(315, 7);

function task2(number, radix) {
  const result = parseInt(number, radix);
  console.log(result.toString(2));
}
// Input     	Output
// base-10    base-2
// 315      	100111011
task2(315, 10);

function task3(number, radix) {
  const result = parseInt(number, radix);
  console.log(result.toString(5));
}
// Input     	Output
// base-9     base-5
// 315      	2012
task3(315, 9);
