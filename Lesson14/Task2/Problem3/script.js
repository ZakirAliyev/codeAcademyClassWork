function longWord(str) {
    str = str.split(" ");
    let max = str[0].length;
    for (let i = 0; i < str.length; i++) {
        if (str[i].length > max) {
            max = str[i].length;
        }
    }
    return max;
}

console.log(longWord('Here are some examples of the super sentences they came up with')); // 9
console.log(longWord('I dashed home went in the house and told my dad')); // 6
console.log(longWord('The great Iron man lifted his great iron foot stepped in to the air and fell')); // 7