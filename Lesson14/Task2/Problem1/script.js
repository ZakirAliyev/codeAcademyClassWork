function volumeOfBox(size) {
    return size.width * size.length * size.height;
}

console.log(volumeOfBox({ width: 2, length: 5, height: 1 })); // 10
console.log(volumeOfBox({ width: 4, length: 2, height: 2 })); // 16
console.log(volumeOfBox({ width: 2, length: 3, height: 5 })); // 30