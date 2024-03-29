let number = +window.prompt("Enter number: ");

if (number > 0) {
    if (number % 2 == 0) {
        console.log("BOLUNDU");
    } else {
        console.log(number % 2);
    }
} else {
    console.log("Number is negative!");
}