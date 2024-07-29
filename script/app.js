//TASK - 81
// function uniqueWords(s) {
//     let arr = s.split(" ")
//     let uniqWorld = arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item))
//     return uniqWorld
// }

// // Test case
// console.log(uniqueWords("this is a test this is only a test")); // Output: ["only"]
// console.log(uniqueWords("hello world hello")); // Output: ["world"]

// //TASK - 82
// function collectValues(obj) {
//     let newArr = []
//     let total = 0
//     let item = null
//     let arr = [{value:obj, step:1}]
//     for(let i = 0; i < arr.length; i++){
//         const {value,step} = arr[i]
//         for (const key in value) {
//         arr.push({value:value[key], step:step+1})
//          if (step > total) {
//             total = step
//             item = value[key]
//             newArr.push(v)
//          }
//         }
//     }
//     console.log(newArr)
//  }

//  // Test case
//  const obj = {
//      a: 1,
//      b: {
//          c: 2,
//          d: {
//              e: 3,
//              f: {
//                  g: 4
//              }
//          }
//      }
//  };
//  console.log(collectValues(obj)); // Output: [1, 2, 3, 4]


// //TASK - 83
// function swapFirstLast(s) {
//    return s.split(" ").map((item) => {
//          if (item.length > 1) {
//             return item[item.length - 1] + item.slice(1, -1) + item[0];
//          }
//          return item;
//       }).join(" ");
// }

// // Test cases
// console.log(swapFirstLast("hello world"));
// console.log(swapFirstLast("a quick brown fox"));

//TASK - 84
// function indexOfMax(arr) {

//     let maxV = Math.max(...arr)
//    return arr.indexOf(maxV)
//  }

//  // Test case
//  console.log(indexOfMax([1, 3, 7, 1, 2, 5, 7])); // Output: 2

//TASK - 85
// function sqrtElements(arr) {
//    let newArr = arr.map(item => Math.sqrt(item))
//    return newArr
//  }

//  // Test case
//  console.log(sqrtElements([1, 4, 9, 16, 25])); // Output: [1, 2, 3, 4, 5]

//TASK - 86
// function separateEvenOdd(arr) {
//  let even = []
//  let odd = []
//  arr.filter(el => el%2 === 0? even.push(el) : odd.push(el))
//  return {even,odd}
//  }

//  // Test case
//  console.log(separateEvenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// Output: { even: [2, 4, 6, 8], odd: [1, 3, 5, 7, 9] }

//TASK - 87
// function findPrimeNumbers(nums) {
//    let result = [];
//    for (let num of nums) {
//       let isPrime = true;
//       for (let i = 2; i < num; i++) {
//          if (num % 2 === 0) {
//             isPrime = false;
//             break;
//          }
//       }
//       if (isPrime) {
//          result.push(num);
//       }
//    }

//    return result;
// }

// Test case
// console.log(findPrimeNumbers([2, 3, 4, 5, 6, 7])); // Output: [2, 3, 5, 7]

// //TASK - 88
// function rotateArray(arr, k) {
//     let n = arr.slice(k + 1)
//     arr.splice(k + 1)
//     n.push(...arr)
//     return n
// }

// // Test case
// console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]

// //TASK - 89
// function trimmedMean(arr) {
//     let maxV = Math.max(...arr)
//     let minV = Math.min(...arr)
//     let newArr = arr.filter(item => item !== maxV && item !== minV)
//     let result = newArr.reduce((a, b) => a + b)
//     return result / newArr.length
// }

// // Test case
// console.log(trimmedMean([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: 5.5

//TASK - 90
// function findPalindromes(arr) {
//     let newArr = arr.filter(num => {
//         let newN = num.toString();
//       return newN === newN.split('').reverse().join('');
//     });
//     return newArr
// }

// // Test case
// console.log(findPalindromes([121, 123, 202, 345, 454])); // Output: [121, 202, 454]

//TASK - 91
// function allElementsEqual(arr) {
//    return arr.every((num) => num === arr[0]);
// }

// // Test case
// console.log(allElementsEqual([1, 1, 1, 1])); // Output: true
// console.log(allElementsEqual([1, 2, 1, 1])); // Output: false

// //TASK - 92
// function arraysHaveSameElements(arr1, arr2) {

//     const sortedArr1 = arr1.slice().sort();
//     const sortedArr2 = arr2.slice().sort();
//     return sortedArr1.every((value, index) => value === sortedArr2[index]);
// }

// // Test cases
// console.log(arraysHaveSameElements([1, 2, 3], [3, 2, 1])); // Output: true
// console.log(arraysHaveSameElements([1, 2, 3], [3, 2, 2])); // Output: false


//TASK - 93
// function isUniqueSet(arr) {

//     const uniqueEl = new Set(arr);
//     return uniqueEl.size === arr.length;    
  
// }

// // Test cases
// console.log(isUniqueSet([1, 2, 3, 4])); // Output: true
// console.log(isUniqueSet([1, 2, 3, 3])); // Output: false

//TASK - 94



// //TASK - 95
// function isMonotonic(arr) {

//     let increment = true;
//     let decrement = true;

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > arr[i - 1]) {
//             decrement = false;
//         }
//         if (arr[i] < arr[i - 1]) {
//             increment = false;
//         }
//     }

//     return increment || decrement;
// }

// // Test cases
// console.log(isMonotonic([1, 2, 2, 3])); // Output: true
// console.log(isMonotonic([6, 5, 4, 4])); // Output: true
// console.log(isMonotonic([1, 3, 2])); // Output: false



