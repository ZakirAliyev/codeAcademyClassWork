let n = +window.prompt("Enter number: "), str = "", i = 0, arr = [];

while (n > 0) {
    arr[i++] = parseInt(n % 10);
    n = parseInt(n / 10);
}

for (let i = arr.length - 1; i >= 0; i--)
    i != 0 ? str += arr[i] + ", " : str += arr[i];

console.log(`Result: ${str}`);