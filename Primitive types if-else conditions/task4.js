let x = 11; // target 27 0b11011
x = (x >> 3) | 3;
console.log((x << 3) | 3);

let y = 8; // target 22 0b10110
y = y | 3;

console.log(y << 1);
