const getSum = (array) => {
  let max = Number.MIN_VALUE;
  array.forEach((element) => {
    if (element > max) {
      max = element;
    }
  });
  return max;
};

console.log(getSum([1, 2, 3]));
console.log(getSum([80, 5, 58, 17, 100]));
console.log(getSum([15, -500, 0, 50]));
