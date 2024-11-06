/* 1 Sort the array in ascending order and remove the next two
    array elements after the occurrence of multiple of 5.*/

// function x(array) {
//   array.sort((a, b) => a - b);

//   for (let i = 0; i < array.length ; i++ ){
//     if ( array[i] % 5 === 0){
//         array.splice(i + 1,2)
//     }
//   }
//   return array;
// }

// let array = [5, 6, 7, 15, 23, 34, 46, 55, 67, 76, 68, 95];

// console.log(array);

// let arr = x(array);

// console.log(arr);

//----------------------------------------------------------------------------------------

/*2. Write a program to delete all the multiples of 5 from an array and
reverse the remaining elements of the array?*/

// const array = [12,34,5,6,54,45,10,5];

// let output = array.reduce((acc,cur) => {
//     if (cur % 5 != 0){
//         acc.push(cur)
//     }
//     return acc;
// },[])

// console.log(output)

//-------------------------------------------------------------------------------------------

/*3. Reverse the array elements and if the sum of array elements are
greater than 100, then remove the second largest element from it.*/

// const array = [10, 15, 20, 50, 40];

// let output = array.reverse().reduce((acc,cur) => {
//     acc += cur
//     return acc
// })

// let out

// if( output > 100){
//     out = array.sort((a,b) => b - a)
// }
// out.splice(1,1)
// console.log(out)

//---------------------------------------------------------------------------------------------

/*4. Write a program to find the most repeated element in an array*/

// const array = [1, 2, 3, 5, 5, 5, 5, 3, 2];

// let frequencyCounter = array.reduce((acc, curr) => {
//   acc[curr] = (acc[curr] || 0) + 1;
//   return acc;
// }, {});

// let mostFrequentElement = null;
// let maxCount = 0;

// for (let element in frequencyCounter) {
//   if (frequencyCounter[element] > maxCount) {
//     maxCount = frequencyCounter[element];
//     mostFrequentElement = parseInt(element);
//   }
// }

// console.log("Most Frequent Element:", mostFrequentElement);

//-------------------------------------------------------------------------------------------

/*5. Write a program to find array elements that repeat 2 times in the
array and replace by its double. */

// let array = [1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 3];

// const cp = array.reduce((acc, num) => {
//   acc[num] = (acc[num] || 0) + 1;
//   return acc;
// }, {});

// let re = array.map((num) => {
//   if (cp[num] === 2) {
//     cp[num] = 0;
//     return num * 2;
//   }
//   return num;
// });

// console.log(cp)
// console.log(array)
// console.log(re)

//--------------------------------------------------------------------------------------------

/*6. Sort the array and replace prime numbers with it's double*/

// let array = [1, 5, 2, 4, 3, 6, 9, 8, 7];

//--------------------------------------------------------------------------------------------

/*7. Write a program to delete two elements after the occurrence of an odd number.*/

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 !== 0) {
//     array.splice(i + 1, 2);
//   }
// }

// console.log(array);

//----------------------------------------------------------------------------------------------

/*8. Write a program to merge two unsorted arrays in sorted order?*/

// let array = [12,67,3,4,566,23];
// let array1 = [34,45,23,77,12];

// let re = array.concat(array1).sort((a,b) => a - b)

// let ret = [...array,...array1].sort((a,b) => a - b)

// console.log(re)
// console.log(ret)

//-----------------------------------------------------------------------------------------------

/*9. Write a program to get an array from users, remove odd numbers
from the array and find the sum of the existing values in the array*/

// let array = prompt("Enter a list of numbers separated by commas:");

// let re = array.split(",").map(Number).filter((x) => !(x % 2));

// let final = re.reduce((ac, cr) => (ac += cr));

// console.log(re);
// console.log(final);

/*13. Write a program to find the unique largest number in an array*/

//let array = [5,16,3,7,2,4,,16,8,9,,10,1]

// let re = array.sort((a,b) => b-a).filter((v,ind,ar) => ar.indexOf(v) === ar.lastIndexOf(v))[0]

// console.log(re)

// function x(name = "World"){
//     return `hello ${name}`
// }

// console.log(x(``))

// let array = [12,2,34,5,5]

// let re = array.includes(55)

// console.log(re);

// const myPromise = new Promise((re, rj) => {
//   let rain = false;
//   if (rain) {
//     re("Dont go");
//   } else {
//     rj("Go any where");
//   }
// });

// myPromise
// .then((re) => console.log(re))
// .then((re) => console.log("Havey rain"))
// .catch((ww) => console.log(ww))

// const myPromise = new Promise((resolve, reject) => {
//     let rain = true;
//     setTimeout(() => {
//         if (rain) {
//             resolve("Don't go");
//           } else {
//             reject("Go anywhere");
//           }
//     },3000)
//   });

//   async function checkWeather(){
//     try{
//       const re = await myPromise;
//     console.log(re)
//     console.log("Havey rain")
//     }
//     catch{

//     const rej = await myPromise;
//     console.log(rej)
//     }
//   }

//   checkWeather();

// function add(a){
//   return function (b){
//     return function (c){
//       return a+b+c
//     }
//   }
// }

// console.log(add(1)(3)(6))

// const ar = [1, 1, 1, 2, 2, 3, 4, 4, 5, 6, 6, 6, 7, 7, 7, 8, 9];

// let re = [...new Set(ar)];

// console.log(re)

// let re = ar.reduce((acc,cur) => {
//   if(!acc.includes(cur)){
//     acc.push(cur)
//   }
//   return acc;
// },[])

// console.log(re)