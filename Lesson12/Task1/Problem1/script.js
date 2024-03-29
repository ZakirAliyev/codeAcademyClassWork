let age = +window.prompt("Enter your age: ");

if (age > 0 && age < 125) {
    if (age < 65) {
        console.log("You are not old enough!");
    } else {
        console.log("You are getting older!");
    }
} else {
    console.log("Age is invalid!")
}