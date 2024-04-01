function anagram(str1, str2) {
    str1 = str1.split("").sort();
    str2 = str2.split("").sort();
    return str1.toString() === str2.toString();
}

console.log(anagram('alma', 'salam'));  // false
console.log(anagram('salam', 'masal')); // true
