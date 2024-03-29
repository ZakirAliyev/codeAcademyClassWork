function array_filled(num1, num2) {
  let arr = [];
  for (let i = 0; i < num1; i++) {
    arr.push(num2);
  }
  return arr;
}

console.log(array_filled(6, 0));
