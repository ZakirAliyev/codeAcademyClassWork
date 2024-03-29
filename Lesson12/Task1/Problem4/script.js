let number = +window.prompt("Enter number: ");

if (number > 0) {
    if (number % 3 == 0 && number % 5 == 0) {
        console.log("The number is divisible by both 3 and 5.")
    } else {
        console.log("The number is not divisible by 3 or 5.")
    }
} else {
    console.log("Number is negative!");
}