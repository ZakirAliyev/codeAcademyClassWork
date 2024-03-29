let number = +window.prompt("Enter number: ");

if (number > 0) {
    if (number > 0 && number <= 100) {
        console.log("Number in range 1-100");
    } else {
        console.log("Number not in range 1-100");
    }
} else {
    console.log("Number is negative!");
}