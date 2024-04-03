let arr = [
    {
        name: "test",
        key: 1,
    },
    {
        name: "task",
        key: 2,
    },
    {
        name: "tanqo",
        key: 3,
    },
    {
        name: "like",
        key: 4,
    },
    {
        name: "task",
        key: 5,
    },
    {
        name: "trust",
        key: 6,
    },
    {
        name: "test",
        key: 7,
    },
    {
        name: "last",
        key: 8,
    },
    {
        name: "tanqo",
        key: 9,
    },
    {
        name: "elephant",
        key: 10,
    },
    {
        name: "love",
        key: 11,
    },
    {
        name: "small",
        key: 12,
    },
    {
        name: "little",
        key: 13,
    },
];

let copyArray = [...arr];

function function1(array) {
    return array.filter((element) => element.name.startsWith('t'));
}

// function function2(array) {
//     return array.filter((element) => element.name.startsWith('t') && element.name.endsWith('t')).length;
// }

// function function3(array) {
//     return array
//         .filter((element) => element.name.startsWith('t') && element.name.endsWith('t'))
//         .reduce((sum, element) => sum + element.key, 0);
// }


// function function4(array) {
//     return array
//         .filter((element) => element.name.endsWith('e'))
//         .map(element => {
//             element.name = 'SuperDev';
//             return element;
//         });
// }


// function function5(array) {
//     return array.sort((element1, element2) => element1.name.length - element2.name.length)[array.length - 1];
// }

// function function6(array) {
//     return array.sort((element1, element2) => element1.name.length - element2.name.length)[array.length - 1].key;
// }

// function function7(array) {
//     let max = 0, k = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].name.length > max) {
//             max = array[i].name.length;
//             k = i;
//         }
//     }
//     return k ** 2;
// }

// function function8(array) {
//     return array.filter((element) => element.name.length > 4);
// }

// function function9(array) {
//     return array.sort((element1, element2) => element2.key - element1.key)[0].name;
// }

// function function10(array) {
//     let sum = 0;
//     array.forEach(element => {
//         sum += element.key;
//     });
//     return sum;
// }



// function function11(array) {
//     return array.filter(element => {
//         let tCount = element.split('').filter(letter => letter.toLowerCase() === 't').length;
//         return tCount >= 2;
//     });
// }


// function function12() {

// }

console.log(function1(copyArray));
// console.log(function2(copyArray));
// console.log(function3(copyArray));
// console.log(function4(copyArray));
// console.log(function5(copyArray));
// console.log(function6(copyArray));
// console.log(function7(copyArray));
// console.log(function8(copyArray));
// console.log(function9(copyArray));
// console.log(function10(copyArray));
// console.log(function11(copyArray));
// console.log(function12(copyArray));