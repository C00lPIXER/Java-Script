//1/ find longest word in this string "Hello my name is Amalkrishna"........................

const { log } = require("console");
const { Promise } = require("mongoose");

// let str = "Hello my name is Amalkrishna";

// let arr = str.split(" ").reduce((acc, cur) => {
//   if (cur.length > acc.length) {
//     acc = cur;
//   }
//   return acc;
// }, "");

// console.log(arr);

//2/ find longest word in this string "Hello my name is Amalkrishna" and print length.......................

// let str = "Hello my name is Amalkrishna";

// let arr = str.split(" ").reduce((acc, cur) => {
//   if (cur.length > acc.length) {
//     acc = cur;
//   }
//   return acc;
// }, "");


//3/ find sum of odd numbers form an array.................................

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//using for loop
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 !== 0) {
//     sum += array[i];
//   }
// }
// console.log(sum);

//using reduce
// let sum = array.reduce((acc, cur) => {
//   if (cur % 2 !== 0) {
//     acc += cur;
//   }
//   return acc;
// }, 0);

// console.log(sum);

//4/ object and array destrcturing.................................

// let obj = {
//   name: "Amal",
//   age: 20,
//   company: "Brotype",
// };

// let { name, age, company } = obj;
// console.log(name);
// console.log(age);

// let array = [12, 34, 56];

// let [a, b, c] = array;
// console.log(a);

// let x = 2;
// let y = 4;

// [x, y] = [y, x];

// console.log(x);
// console.log(y);

//5/ taje elements from the array which is divisable by 5 and takes its sum?............................

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = array.reduce((acc, cur) => {
//   if (cur % 5 === 0) {
//     acc += cur;
//   }
//   return acc;
// }, 0);

// console.log(sum);

//6/ Revese the String.................................

// let str = "Amal"
// let str1 = "How are You"

// let reves = str1.split("").reverse((a,b) => a - b).join("")

// console.log(reves);

//7/ Object methods.........................................

// let obj = {
//   name: "Amal",
//   age: 19,
//   place: "malapuram",
//   company: "Brototype",
// };

//// Object.keys()
// console.log(Object.keys(obj));

//// Object.values()
// console.log(Object.values(obj));

//// Object.entries
// console.log(Object.entries(obj));

//// Object.assign(target, sources)
// let add = {stack: "MERN"}
// Object.assign(obj, add)
// console.log(obj);

//// Object.freeze()
// const user = { name: "Alice" };
// Object.freeze(user);
// user.age = 25; // This will not add 'age' because the object is frozen.
// console.log(user);

//// Object.seal()
// const user = { name: "Alice" };
// Object.seal(user);
// user.age = 25; // This will add 'age'.
// delete user.name; // This will not delete 'name'.
// console.log(user);

//// Object.create()
// const proto = { greet: function() { return "Hello"; } };
// const obj = Object.create(proto);
// console.log(obj.greet());

//// Object.hasOwnProperty(prop)
// const user = { name: "Alice" };
// console.log(user.hasOwnProperty('name')); // Output: true
// console.log(user.hasOwnProperty('age'));  // Output: false

//// Object.getPrototypeOf(obj)
// const proto = {};
// const obj = Object.create(proto);
// console.log(Object.getPrototypeOf(obj) === proto); // Output: true

////Object.is(obj1, obj2)
// console.log(Object.is('hello', 'hello')); // Output: true
// console.log(Object.is(0, -0));            // Output: false

//8/ Optional chaning..........................................

// let obj = {
//   abj: {
//     bbj: {
//       array: [1, 2, 3, 4, 5],
//     },
//   },
// };

// let arr = obj.abj.bbj.array
// console.log(arr);

//9/ Write a array double the array and find the largest and second largest elements...................

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10];

// let double = array.map((x) => x + x);

// let largest = double.reduce(
//   ([max, sec], cur) => {
//     if (cur > max) {
//       sec = max;
//       max = cur;
//     } else if (cur > sec && cur < max) {
//       sec = max;
//     }
//     return [max,sec]
//   },[0, 0]);

//   console.log(largest);

//10/ Remove Duplicate elements from the array [using set, using Freq]

// let array = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 12, 13, 14, 15,];

// console.log(...new Set(array));

// let freq = array.reduce((acc, cur) => {
//   if (acc[cur]) {
//     acc[cur]++;
//   } else {
//     acc[cur] = 1;
//   }
//   return acc;
// }, {});

// freq;

// let unique = [];
// let duplicates = [];

// for(key in freq){
//   if(freq[key] === 1){
//     unique.push(+key)
//   }else{
//     duplicates.push(key)
//   }
// }

// unique
// duplicates

//11/ How to chek the object is empty or not

// let obj = {
//   name: "amal"
// };

// if(Object.keys(obj).length == 0){
//   console.log(true);
// }else{
//   console.log(false);
// }

//12/ Promice, methods(all,allSettled,rice,any),async,await

// const promise = new Promise((resolve, reject) => {
//   let rain = true;
//   setTimeout(() => {
//     if (rain) {
//       resolve("raining...");
//     } else {
//       reject("No rain");
//     }
//   }, 5000);
// });

// const promise1 = new Promise((resolve, reject) => {
//   let rain = false;
//   setTimeout(() => {
//     if (rain) {
//       resolve("raining...");
//     } else {
//       reject("No rain");
//     }
//   }, 3000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   let rain = false;
//   setTimeout(() => {
//     if (rain) {
//       resolve("raining...");
//     } else {
//       reject("No rain");
//     }
//   }, 4000);
// });

// async function pro() {
//   try {
//     let a = await Promise.allSettled([promise2,promise1]);
//     console.log(a);
//   } catch (error) {
//     console.log(error);
//   }
// }

// pro();

//Proxy Object .............................................

// const obj = {
//   msg: "hello",
//   age: 12
// }

// const handler = {
//   get: function(target, prop) {
//     if (prop in target) {
//       return target[prop];
//     } else {
//       return "Property not found";
//     }
//   }
// };

// const proxy = new Proxy(obj, handler);

// console.log(proxy.age);

// Genaretor fuction ..........................................

// target = 5;
// function* gen() {
//   for (let i = target; i > 0; i--) {
//     yield target;
//     target--;
//   }
// }
// let g = gen();

// let a = setInterval(() => {
//   console.log(g.next().value)
// },1000)

// setTimeout(() => {
//   clearInterval(a)
// },6000)

// let array = [1, 2, 3, 4, 5, 6, 5, 6, 7, 8, 9];
// function* even() {
//   for (i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//       yield array[i];
//     }
//   }
// }

// let printEven = even();

// for (let i = 1; i <= 5; i++) {
//   console.log(printEven.next().value);
// }

// //find second smallest odd number - reduce

// let array = [12, 34, 3, 56, 78, 1, 2, 5];

// let output = array.reduce(([min, sec], cur) => {
//     if (cur % 2 !== 0) {
//       if (cur < min) {
//         sec = min;
//         min = cur;
//       } else if (cur < sec && cur != min) {
//         sec = cur;
//       }
//     }
//     return [min, sec];
//   },[Infinity, Infinity]);

// console.log(output);

//find frequncy of elements in an array

// let array = [12,23,1,34,5,13,4,12,45]

// let frequncy = array.reduce((acc,cur) =>{
//     if(acc[cur]){
//         acc[cur]++
//     }else{
//         acc[cur] = 1
//     }
//     return acc
// },{})

// console.log(frequncy);

// function to reverse a String

// function reverseStr(str){
//     return str.split("").reverse().join("")
// }
// console.log(reverseStr("amal"))

//add remove property in an object

// let obj = {
//     name: "AMAL"
// }

// obj.age =  19
// delete obj.name
// console.log(obj);

// concat array

// let arr1 = [1,2,3]
// let arr2 = [4,5,6]

// let add = arr1.concat(arr2)

// console.log(add);

//generete a array with multles of 7 between 1 and 100

// let array = [];

// for (let i = 1; i <= 100; i++) {
//   if (i % 7 === 0) {
//     array.push(i);
//   }
// }
// console.log(array);

//longest string in an array

// let str = "MYYYYYYYY NAME IS AMAL KRISHNA"

// let longestStr = str.split(" ").reduce((acc,cur) => {
//     if(acc.length < cur.length){
//         acc = cur
//     }
//     return acc
// },"")

// console.log(longestStr);

//ternary with return

// function ternary(x){
//     return x > 2 ? true : false;
// }
// console.log(ternary(1))

//remove onject keys corres ponding to odd number values

// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
//   e: 5,
//   f: 6,
//   g: 7,
// };

// for (let key in obj) {
//   if (obj[key] % 2 !== 0) {
//     delete obj[key];
//   }
// }

// console.log(obj);

//split an array in two equl half

// let array = [1,2,3,4,5,6,7,8,9,0]

// let arr = array.slice(0,array.length/2)
// array = array.slice(array.length/2)

// console.log(arr);
// console.log(array);

//filter number from a mixed array

// let array = ["1",null,undefined,1,2,3,"a","ff",4]

// let numArray = array.filter((x) => Number(x))
// console.log(numArray);

//largest element in an array

// let array = [1,12,3,4,5,6,8,9]

// let largest = array.reduce((acc,cur) => {
//     if(acc < cur){
//         acc = cur
//     }
//     return acc
// },-Infinity)

// console.log(largest);

//generate function to generate multiples of a given number

// function multiples(num){
//     let array = []
//     for (let i = 1; i <= 10; i++) {
//         array.push(i*num)
//         console.log(`${i} x 3 = ${i*num}`);
//     }

// }

// multiples(3)

//function to return sum of all args

// function findSum(...arg){
//     return arg.reduce((acc,cur) => acc+=cur,0);
// }
// console.log(findSum(1,2));

//count occurrences of a value in an array

// let array = [1,2,7,7,7,7,7,7,,3,4,5,6,7,7,8]

// function count(x) {
//     let count = 0
//     array.map((value) => {
//         if(value === x){
//             count++
//         }
//     })
//     return count
// }

// console.log(count(7));

//loop a string array to print value and length

// let array = ["amal","vimal","Anas","athul"]

// array.map((x) => {
//     console.log(`${x} : ${x.length}` )
// })

//revers array

// let array = [1,2,3,4,5,6]

// console.log(array.reverse())

// let arr = []
// for(let i = array.length-1; i >= 0; i--){
//     arr.push(array[i])
// }
// console.log(arr);

// generator function multiple of given numbers

// function* multiplesOf(...numbers) {
//     let count = 1;
//     while (true) {
//         for (let number of numbers) {
//             yield number * count;
//         }
//         count++;
//     }
// }

// const multiples = multiplesOf(3, 5);

// console.log(multiples.next().value);
// console.log(multiples.next().value);
// console.log(multiples.next().value);
// console.log(multiples.next().value);
// console.log(multiples.next().value);
// console.log(multiples.next().value);

//give a number of array and multiply with same number using arrow function

// let array = [1,2,3,4,5,6,7,8,9,0]

// let multipleOf = array.map((x) => x*x)

// console.log(multipleOf);

// let multipleOf = (array) => {
//     for(let i=0; i< array.length; i++){
//         console.log(array[i]*array[i]);

//     }
// }
// multipleOf(array)

//convert string to uppercase useing map()

// let str = "amal"

// let result = str.split("").map((char) => char.toUpperCase()).join("")

// console.log(result)

//concat array using spread

// let ar1 = [1,2,3,4]
// let ar2 = [5,5,6,7]

// let re = [...ar1,...ar2]
// console.log(re);

//loop an object

// let obj = {
//     a:10,
//     b:21,
//     c:3,
//     d:15,
//     f:6,
// }

// for(let key in obj){
//     console.log(obj[key]);

// }

//object sorting

// let obj = {
//     c: 6,
//     a: 1,
//     b: 5
// };

// let sortedByKey = Object.keys(obj).sort().reduce((acc,cur) => {
//     acc[cur] = obj[cur];
//     return acc;
// },{})

// console.log(sortedByKey);

//

// Call back function

// function x(y) {
//   setTimeout(() => {
//     console.log("x");
//     y();
//   },2000);
// }

// function y() {
//   console.log("y");
// }

// x(y);

//pollifil

// if(!Array.prototype.include){
//     Array.prototype.include = function(element){
//         return this.indexOf(element);
//     }
// }

// const fruits = ['apple', 'banana', 'mango'];

// console.log(fruits.include('mango'));
// console.log(fruits.include('grapes'));

//Proxy obj

// let obj = {
//     name: 'Amal',
//     age: 20
// }

// let handler = {
//     get: function(target,prop){
//         if(prop in target){
//             return target[prop];
//         }else{
//             return "Property not fount"
//         }
//     }
// }

// const proxy  = new Proxy(obj, handler);
// console.log(proxy.age);

//pollifil age

// if(!Array.prototype.includes){
//     Array.prototype.includes = function(element){
//         return this.indexOf(element) !== -1
//     }
// }

// const fruits = ['apple', 'banana', 'mango'];

// console.log(fruits.include('mango'));
// console.log(fruits.include('grapes'));

//prime number

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let prime = 0;

// for (let i = 0; i < arr.length; i++) {
//   let flag = 0;
//   for (let j = 2; j <= arr[i] / 2; j++) {
//     if (arr[i] % j === 0) {
//       flag = 1;
//     }
//   }
//   if (flag == 0 && arr[i] >= 2) {}

//     prime +=arr[i]
//   }
// }

// console.log(prime);

// ar = [1, 7, 3, 4, 5, 6, 7, 8, 9];
// for(let i=0 ; i<ar.length;i++){
//     flag=0
//     for(let j=2 ;j<ar[i];j++){
//         if(ar[i]%2===0){
//             flag=1
//         }
//     }
//     if(flag==0 && ar[i]!=1){
//         console.log(ar[i])
//     }
// }

//curring 

// function sum(x){
//     return function(y){
//         return x + y;
//     }
// }
// let addWithfive = sum(4)
// console.log(sum(4)(5));

// console.log(addWithfive(6));
