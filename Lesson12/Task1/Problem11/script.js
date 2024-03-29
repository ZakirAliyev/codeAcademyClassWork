let age = +window.prompt("Enter your age: ");

if(age>0) {
    if(age<18) {
        console.log("Yeniyetme");
    } else if(age>=18 && age<=64) {
        console.log("Yetkin");
    } else {
        console.log("Yasli");
    }
} 