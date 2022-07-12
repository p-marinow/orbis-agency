function calc(x, y) {
  console.log(
    `Sum of numbers ${x} and ${y} is: ${add(x, y)}\n`,
    `Substraction of numbers ${x} and ${y} is: ${substract(x, y)}\n`,
    `Multiplication of numbers ${x} and ${y} is: ${multiply(x, y)}\n`,
    `Division of numbers ${x} and ${y} is: ${divide(x, y)}\n`,
    `Modulus of numbers ${x} and ${y} is: ${modulus(x, y)}\n`
  );
}
const add = (x, y) => {
  return x + y;
};

const substract = (x, y) => {
  return x - y;
};

const multiply = (x, y) => {
  return x * y;
};

const divide = (x, y) => {
  return x / y;
};

const modulus = (x, y) => {
  return x % y;
};

calc(9, 2);
