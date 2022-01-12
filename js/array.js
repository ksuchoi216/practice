
// console.log(cells);
// console.log(checkcondition());

// EVERY and SOME
let arr = [1,3,8];

let res1 = arr.some((element) => {
    return element === 3;
})

console.log(res1); //true

arr = [3,3,3];

let res2 = arr.every((element) => {
    return element === 3;
})

console.log(res2); //true


// ADVANCED EVERY AND SOME
const conditions = [
    [1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1],
    [0, 1, 1, 1, 0],
];

let cells = [1, 1, 1, 1, 0];

function isSubset(array1, array2) {
    // returns true if array2 is a subset of array1
  
    return array2.every(function (element) {
      return array1.includes(element);
    });
  }

console.log(isSubset())

// function checkcondition() {
//     conditions.some((condition) => {
//         return condition.every((i) => {
//             if (condition[i] === 1){
//                 return cells[i] === condition[i];
//             }
//         })
//     })
// }

// console.log(checkcondition());