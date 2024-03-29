let number1 = +window.prompt("Enter first number: ");
let number2 = +window.prompt("Enter second number: ");

let multy = number1 * number2;

if (multy % 2 == 0) {
    console.log("Even");
} else {
    console.log("Odd");
}