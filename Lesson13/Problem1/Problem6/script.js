const getSum = (array) => {
  let sum = 0;
  array.forEach((element) => {
    sum += element;
  });
  return sum;
};

console.log(getSum([1, 2, 3]));
console.log(getSum([80, 5, 58, 17, 100]));
console.log(getSum([15, -500, 0, 50]));
