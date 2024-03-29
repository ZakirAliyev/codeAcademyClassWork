function findElement(arr, number) {
  let str = "False";
  arr.forEach((element) => {
    if (element === number) {
      str = "True";
    }
  });
  return str;
}

console.log(findElement([33, 28, 45, 17], 45));
console.log(findElement([33, 28, 45, 17], 38));
console.log(findElement(["a", "g", "y", "d"], "d"));
