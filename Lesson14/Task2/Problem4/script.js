function upperCase(str) {
    str = str.split(" ");
    let s = "";
    for (let i = 0; i < str.length; i++) {
        s += str[i].charAt(0).toUpperCase() + str[i].slice(1) + ' ';
    }
    return s;
}

console.log(upperCase('Here are some examples of the super sentences they came up with'));
console.log(upperCase('I dashed home went in the house and told my dad'));
console.log(upperCase('The great Iron man lifted his great iron foot stepped in to the air and fell')); 