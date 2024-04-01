function wowelCount(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
            count++;
        }
    }
    return count;
}

console.log(wowelCount('hello')); // 2
console.log(wowelCount('friend')); // 2
console.log(wowelCount('mom')); // 1