function getUpper(array) {
    let arr = [];
    array.forEach(element => {
        arr.push(element.toUpperCase());
    });
    return arr;
}

console.log(getUpper(["guba", "mingecevir", "baku", "gazag", "gence", "shirvan"]));  