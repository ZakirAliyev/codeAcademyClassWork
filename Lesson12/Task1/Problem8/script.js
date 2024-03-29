let number1 = +window.prompt("Enter first number: ");
let number2 = +window.prompt("Enter second number: ");
let number3 = +window.prompt("Enter third number: ");

// console.log(Math.max(Math.max(number1, number2), number3))

if (number1 > number2 && number1 > number3) {
    console.log("Number1 is max!");
} else if (number2 > number1 && number2 > number3) {
    console.log("Number2 is max!");
} else {
    console.log("Number3 is max!");
}