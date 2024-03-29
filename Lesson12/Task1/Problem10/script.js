let point = +window.prompt("Enter your point: ");

if (point > 0 && point <= 100) {
    if (point >= 90) {
        console.log("A")
    } else if (point >= 80 && point < 90) {
        console.log("B")
    } else if (point >= 70 && point < 80) {
        console.log("C")
    } else if (point >= 60 && point < 70) {
        console.log("D")
    } else if (point >= 50 && point < 60) {
        console.log("E")
    } else {
        console.log("F")
    }
} else {
    console.log("Point is invalid!");
}