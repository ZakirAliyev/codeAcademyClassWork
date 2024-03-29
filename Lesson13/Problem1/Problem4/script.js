function calculator(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "/") {
    return num1 / num2;
  } else {
    return "Invalid operator!";
  }
}

console.log(calculator(2, 5, "+"));
console.log(calculator(2, 5, "*"));
console.log(calculator(2, 5, "/"));
console.log(calculator(2, 5, "-"));
console.log(calculator(2, 5, "."));