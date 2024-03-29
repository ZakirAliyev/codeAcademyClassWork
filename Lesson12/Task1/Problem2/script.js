function isEven(x) {
    return x % 2 === 0;
}

let number = +window.prompt("Enter number: ");

if (number > 0) {
    if (isEven(number)) {
        console.log("Number is even!");
    } else {
        console.log("Number is odd!")
    }
} else {
    console.log("Number is invalid!")
}