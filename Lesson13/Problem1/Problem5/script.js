const getSum = (array) => {
  return array[0] + array[array.length - 1];
};

console.log(getSum([1, 2, 3]));
console.log(getSum([80, 5, 58, 17, 100]));
console.log(getSum([15, -500, 0, 50])); 