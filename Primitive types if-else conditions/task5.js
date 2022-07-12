function solution1(a, b, c) {
  const greaterThanTest = () => {
    return c > a && c > b;
  };

  const between = (c > a && c < b) || (c < a && c > b);

  return between
    ? `Number ${c} is between ${a} and ${b}`
    : greaterThanTest()
    ? `Number ${c} is greatest`
    : `Number ${c} is smallest`;
}

function solution2(a, b, c) {
  if (a > b) {
    if (a > c) {
      if (b > c) {
        console.log(a, b, c);
      } else {
        //! b < c
        console.log(a, c, b);
      }
    } else {
      //! a < c
      console.log(c, a, b);
    }
  } else {
    //! a < b
    if (b > c) {
      if (a > c) {
        console.log(b, a, c);
      } else {
        //! a < c
        console.log(b, c, a);
      }
    } else {
      //! b < c
      console.log(c, b, a);
    }
  }
}

console.log(solution1(3, 2, 2.5));
solution2(3, 2, 2.5);
