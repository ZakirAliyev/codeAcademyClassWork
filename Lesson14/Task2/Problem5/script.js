function unique(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        let count = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[i] == str[j]) {
                count++;
            }
        }
        if (count === 1) {
            arr.push(str[i]);
        }
    }
    return arr;
}

console.log(unique('alma'));  // l, m
console.log(unique('salam')); // s, l, m