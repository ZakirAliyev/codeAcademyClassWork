let number1 = +window.prompt("Enter number 1: ");
let number2 = +window.prompt("Enter number 2: ");
let number3 = +window.prompt("Enter number 3: ");


let a = number1 ** 2;
let b = number2 ** 2;
let c = number3 ** 2;

if ((a + b === c) ||
    (b + c === a) ||
    (c + a === b)) {
    console.log("Duzbucaqli ucbucaqdir!");
} else {
    console.log("Duzbucaqli ucbucaq deyil!")
}