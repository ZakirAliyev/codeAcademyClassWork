function move(arr1, num1, num2) {
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (i != num1) {
      arr.push(arr1[i]);
      if (i === num2) {
        arr.push(arr1[num1]);
      }
    }
  }
  return arr;
}

console.log(move([10, 20, 30, 40, 50], 3,1));
