//

// //....Map....

// //double this array

// function double(x) {
//     return x * 2;
// }

// //triple
// function triple(x){
//     return x * 3;
// }

// const result = arr.map(double);
// const result2 = arr.map(triple);

// console.log(result);
// console.log(result2);

// //....Filter.....

// function odd(x){
//     return x % 2 ===0;
// }

// function even(x){
//     return x % 2;
// }

// const result = arr.filter(even);

// const result = arr.filter((x) => x % 2);

// console.log(result);

//...Reduce...

// const result = arr.reduce(function (max, curr){
//     if (curr > max){
//         max = curr;
//     }
//     return max;
// }, 0);

// console.log(result);

//Named fuction expression

// let a = function b(){
//     console.log("just do man");
// }
// // b();
// a();

//first class function

// function a(){
//     return "Hello";
// }

// function test(msg, name){
//     console.log(msg() + name);
// }

// test(a, " "+"amal")

// let arr = [1,2,3,4];
// let obj ={
//   name: "hhh"
// }

// let list = ["Amal", "Vimal", "Jay", "Abhi"];

// list.forEach(function (il, aa) {
//   if (il  ==="jj") {
//     console.log(il+aa);
//   }
// });

// const a =["Amal"]
// const n = "A<A"

// const con = [...a,...n]
// console.log(con)

// let a =[10,20,30,30]

// let b = a.reduce((a,b) =>  a + b);

// console.log(b)

// let a = ["java", "js", "python", "ruby", "Html", "Html5"]

// let userinput =prompt("search")

// const b = a.filter((ss)=> ss.includes(userinput))

// console.log(b)

// function higherOrder(fn) {
//     var a =10
//   return function () {

//     console.log("This is a higher order function.");
//     console.log(a);
//     fn();
//   };
// }
// function fn() {
//   console.log("hello");
// }
//  let value = higherOrder(fn);
//  value()
//  console.log(value)

// const arr = [1, 3, 4, 6, 6, 1];
// let re = [...new Set(arr)]
// console.log(re)/

// Creating a new promise
// const myPromise = new Promise((resolve, reject) => {

//   setTimeout(() => {
//     const success = true;
//     if (success) {
//       resolve("The operation was successful!");
//     } else {
//       reject("The operation failed!"); // Reject the promise with an error message
//     }
//   }, 2000); // Simulate a 2-second delay
// });

// // Using the promise
// myPromise
//   .then((message) => {
//     console.log(message); // Logs: "The operation was successful!" if resolved
//   })
//   .catch((error) => {
//     console.error(error); // Logs: "The operation failed!" if rejected
//   });

// const user = [
//     { firstname: "Mohammad", lastname: "Noushad", age: 22 },
//     { firstname: "Aniket", lastname: "Bhalla", age: 45 },
//     { firstname: "Bidhi", lastname: "Chand", age: 21 },
//     { firstname: "Saif", lastname: "Siddiqi", age: 67 },
//   ];

//   const output = user.reduce((acc, current) => {

//     if(current.age < 30){
//         acc.push(current.firstname);
//     }

//     return acc;

//   }, []);

//   console.log(output);

// function x(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// console.log(x(5)(6));

// const fruits = ["apple", "orange", "banana"];

// for (let fruit in fruits) {
//   console.log(fruit);
// }

// const myPromise = new Promise((resolve,reject) => {
//     let rain = false;
//     setInterval(() => {
//         if(rain) {
//             resolve("Raining!");
//         }else{
//             reject()
//         }
//     },2000)
// })

// myPromise
// .then((res) => console.log(res))
// .then((res) => console.log("Dont go outside"))
// .catch((res) => alert("No rain"))
// .finally((res) => console.log("complte"))
// console.log("start")

//    let a = setInterval(()=>{
//         console.log("vishnu")
//     },1000)

// console.log("end")
// setTimeout(()=>{
//     clearInterval(a)
// },10000)

// let output = array.reduce((acc,cur) => {
//     return acc + cur
// },0)

// console.log(output)

// let output =array.reduce((acc,cur) => {
//     if(cur < acc){
//         acc = cur
//     }
//     return acc
// },Infinity)
// console.log(output)

// let a = "hellollo"

// let split = a.split("").map((x) => x)
// console.log(split)

// let ans = [...new Set(split)]
// console.log(ans)

// let array = [1, 2, 34, 5, 6, 8];

// let out = array.reduce(
//   (acc, cur) => {
//     if (cur > acc[0]) {
//       acc[1] = acc[0];
//       acc[0] = cur;
//     } else if (cur > acc[1] && cur != acc[0]) {
//       acc[1] = cur;
//     }
//     return acc;
//   },
//   [0, 0]
// );

//  console.log(out[0]);

// let larg = array.reduce((acc, cur) => {
//   if (cur < acc) {
//     acc = cur;
//   }
//   return acc;
// }, 90);

// console.log(larg);

// let array = [1,2,3,4,5]

// function c(arr){
//     let a = arr*arr*arr
//     return a
// }

// let out = array.map(c)

// console.log(out)

// array.forEach((x) => {
//     let a = x*x*x
//     console.log(a)
// })

// console.log(array)

// let ab = {af:{ab:{df:[12,24,5,67,8]}}}

// let m = ab.af.ab.df.reduce((acc,cur) => acc+=cur)

// console.log(m)

// let x = [{ df: 2, er: 3 },{ df: 9, er: 3 },{ df: 11, er: 3 },{ df: 6, er: 4 },{ df: 1, er: 3 },];

// let arr = [];
// let out = x.map((a) => arr.push(a.df, a.er));
// console.log(arr);

// let re = arr.reduce((a,c) => {
//     if (c % 2 != 0){
//         a += c;
//     }
//     return a
// },0)

// console.log(re)

// let ab = {af:{cf:{as:[12,3,4,5]}}}

// let sum = ab.af.cf.as.reduce((a,c) => a += c)

// console.log(sum)

/*9. Write a program to get an array from users, remove odd numbers
from the array and find the sum of the existing values in the array */

// let arr = [1,2,3,4,5];
// const a1 = arr.filter((x) => !(x%2)).reduce((ac,cr) => ac+=cr);
// console.log(a1)

// function z() {
//   var b = 20;
//   function x() {
//     var a = 10;
//     function y() {
//       console.log(a, b);
//     }
//     y();
//   }
//   x();
// }

// z();

// document.getElementById("clickme").addEventListener("click",function () {
//     document.getElementById("count").innerHTML = count++;
//   },
//   (count = 1)
// );

// document.getElementById("gp").addEventListener("click", () => {
//     console.log("gp clicked")
// }, false);

// document.getElementById("p").addEventListener("click", () => {
//     console.log("p clicked")
// }, false);

// document.getElementById("c").addEventListener("click", () => {
//     console.log("c clicked")
// }, false);

// const obj = {
//     name: "amal",
//     age: 19,
//     stack: "mern"
// }

// let { name, age, stack} = obj

// console.log(name)
// console.log(stack)

// let ab = {
//   a: 12,
//   b: 23,
//   c: 45,
//   e: function r(){
//     console.log(this);
//   }
// };

// ab.e();
// this

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     };
//   }

//   const john = new Person('John', 30);
//   john.greet(); // Hello, my name is John and I am 30 years old.
//   const amal = new Person('amal', 19)
//   amal.greet()

// function sum(...nub){
//     return nub.reduce((acc,cur) => acc+=cur)
// }

// console.log(sum(12,18))

// Function.prototype.myFun = function (a, b) {
//   sum = a + b;
//   console.log(sum);
//   return sum;
// };

// function fun() {}

// fun.myFun(8, 4);

// const arr = [1,2,3,4,5,6,7,8,10]

//  arr.filter((curr , index) =>{
//      if(curr % 3 ==0){
//         arr.splice(index,1)
//      }
// })
// console.log(arr);

// let ac = [{name:'amal'},{name:'vimal'},{name:'soman'}]
// let ar = [76,45,3,2,8,2,1,4,2,9]

// console.log(ab)

// ac.splice(0,1,12)

// console.log(ab);

// let re = ac.find(o => o.name === 'soman')

// console.log(re)

//Remove all multiples of 3 from an array of numbers.

// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// let re1 = array.reduce((acc,cur) => {
//     if(cur%3!==0){
//         acc.push(cur)
//     }
//     return acc
// },[])

// console.log(re1)

// let re = array.filter(a => a % 3 != 0)
// console.log(re)

// Find the highest odd number in an array using .reduce().

// let array = [1,2,3,4,5,6,7,8,15,10,11,12,13,14,]

// let re = array.reduce((acc,cur) => {
//     if(cur%2!=0 && cur > acc){
//         acc = cur
//     }
//     return acc
// },0)

// console.log(re)

// Calculate the sum of all even numbers in an array.

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// let sum = array.reduce((acc, cur) => {
//   if (cur % 2 === 0) {
//     acc += cur;
//   }
//   return acc
// },0);
// console.log(sum)

// Count the number of occurrences of a specific number in an array.

// let array = [1,2,3,4,2,6,2,8,9,10,11,12,2,14,15,15,15,15]

// let re = array.reduce((acc,cur) => {
//     if(cur === 15){
//        acc++
//     }
//     return acc
// },0)

// console.log(re)

// Reverse the elements of an array.

// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// array.reverse((a,b) => b-a)

// console.log(array)

// Find the smallest number in an array using .reduce()

// let array = [19, 2, 3, 4, 5, 6, 7, .7, 9, 10, 11, 12,.5, 13, 14, 15];

// let re = array.reduce((acc,cur) => {
//     if(cur < acc){
//         acc = cur
//     }
//     return acc
// },Infinity)

// console.log(re)

//Remove all duplicate numbers from an array.

// let array = [11,11,22,22,33,33]

// let re = [...new Set(array)]

// console.log(re)

// Find the average of all numbers in an array.

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// let re = array.reduce((acc, cur) => {
//   acc += cur;
//   return acc;
// }, 0);

// console.log(re/array.length);

// Merge two arrays into one without duplicates.

// let ar1 = [1,1,2,2,3,3,4]
// let ar2 = [4,5,5,6,6,7,7]

// let re =[...new Set([...ar1, ...ar2])]

// console.log(re);

// Find the second largest number in an array.

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// let re = array.reduce(([l1, sl], cur) => {
//     if (cur > l1) {
//       sl = l1;
//       l1 = cur;
//     } else if (cur > sl && cur < l1) {
//       sl = cur;
//     }
//     return [l1, sl];
//   },[-Infinity, -Infinity]);

// console.log(re);

// Split an array into chunks of a specified size.

// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// let re = array.reduce((acc, cur, index) => {
//     if (index % 55 === 0) {
//       acc.push([cur]);
//     } else {
//       acc[acc.length - 1].push(cur);
//     }
//     return acc;
//   }, []);

//   console.log(re)

// Find the product of all numbers in an array.

// let array = [1,2,3,4,5,]

// let re = array.reduce((acc,cur) => acc*=cur)

// console.log(re)

// Sort an array of numbers in ascending order.

// let array = [23,5,67,1,2,34,5]

// array.sort((a,b) => a - b)

// console.log(array)

// Find the median of an array of numbers.

// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// let length = array.length
// let re = array.reduce((acc,cur) => {
//     return acc+=cur/length
// },0)
// console.log(re)

// Check if all elements in an array are positive.

// let array = [1,2,3,4,5,6,7]
// let ans
// for(let i=0;i<array.length;i++){
//     if(array[i] > 0){
//         ans = true
//     }else{
//         ans = false
//     }
// }

// console.log(ans)

// Find the first number in an array that is greater than a specified value.

// let array = [10,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// let value = 5;

// if(array[0] > 5){
//     console.log(true)
// }else{
//     console.log(false)
// }

// Remove all falsy values from an array.

// let array = [1,true,3,4,"6",7,8,9,NaN,11,"an",13,14,15]

// let re = array.reduce((acc,cur) => {
//     if(!isNaN(cur) && typeof cur === 'number'){
//         acc.push(cur)
//     }
//     return acc
// },[])

// console.log(re)

//? Find the longest string in an array of strings.

// let array = ['amal','Krishna','Dony']

// let re = array.reduce((acc,cur) => {
//     if (cur.length > acc.length){
//         acc = cur;
//     }
//     return acc
// },"")

// console.log(re)

// let a = 'Amal'
// let b = a.length
// console.log(b);

//? Check if an array contains a specific number.

// let array = [1,3,2,4,2,45,0,5]

// let re = array.includes(0)

// console.log(re);

// Find the intersection of two arrays.

// let arra1 = [1,2,3,4,5,6,90,34,23,12]
// let arra2 = [2,5,3,7,8,9,23,45,2]

// let re = arra1.filter((a) => arra2.includes(a))

// console.log(re)

//? Rotate an array to the right by a given number of steps.

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// const len = array.length;

// let arr = array.reduce((acc, _, i,array) => {
//   acc[(i + 5) % len] = array[i];
//   return acc;
// }, []);

// console.log(arr);

//? Find the longest increasing subsequence in an array.

// Implement a function to flatten a nested array.

// let array = [12,[12,[2,[3,[34,5],4],3,3],2,3],3,[2,3,4,[12,4,5,2],23,[23,34]]]

// let re = array.flat(4)

// console.log(re)

// Find the most frequent element in an array.

//  let array = [1, 2, 3, 3, 3, 4, 4, 5, 5, 6, 8, 1, 2, 3, 45, 6, 7, 89, 4];

// let obj = array.reduce((acc, cur) => {
//   acc[cur] = (acc[cur] || 0) + 1;
//   return acc;
// }, {});

// console.log(obj);

// const largestEntry = Object.entries(obj).reduce((max, entry) => {
//     return entry[1] > max[1] ? entry : max;
//   });

//   console.log(largestEntry)

// let day = 2;
// let dayname;

// switch (day) {
//   case 1:
//     dayname = "sun";
//     break;
//   case 2:
//     dayname = "mon";
//     break;
//   default:
//     dayname = "nodaytoday";
// }

// console.log(dayname);

// function regularFunc() {
//     const arrowFunc = () => {
//       console.log(arguments);
//     };
//     arrowFunc(1, 2, 3);
//   }

//   regularFunc(4, 5, 6);

// const obj = {
//     count: 10,
//     in: () => {
//         this.count--;
//     },
//     inc: function (){
//         this.count++;
//        }
//   };

//   obj.inc();
//   console.log(obj.count);

// const original = {
//     a: 1,
//     b: {
//       c: 2
//     }
//   };

//   // Using JSON methods for deep copy
//   const deepCopy = JSON.parse(JSON.stringify(original))

//   deepCopy.a = 10;
//   deepCopy.b.c = 20;

//   console.log(original);
//   console.log(deepCopy);

// const myPromise = new Promise((resolve, rejest) => {
//   let rain = false;
//   setTimeout(() => {
//     if (rain) {
//       resolve("Dont Go Out Side");
//     } else {
//       rejest("Go Any Where");
//     }
//   },1000);
// });

// myPromise
//   .then((e) => console.log(e))
//   .then(() => console.log("havey rain"))
//   .then(() => console.log('tea'))
//   .catch((re) => console.error(re))

// async function check(){
//     try{
//         let data = await myPromise;
//         console.log(data)
//     }catch(rej){
//         console.error(rej)
//     }
// }
// check()

// console.error('amal kdjfehrhf')

// let t = setInterval(() => {
//   console.log("timer");
// }, 1000);

// setTimeout(() => {
//   clearInterval(t);
// },5000);

// let ar = [{ ab: 2, ac: 5 },{ ab: 2, ac: 5 },{ ab: 2, ac: 5 },{ ab: 2, ac: 5 },{ ab: 2, ac: 5 },];

// let re = [];

// ar.map((x) => re.push(x.ac, x.ab))
// let r = re.reduce((ac, cr) => {
//   if (cr % 2 === 0 ) {
//     ac += cr;
//   }
//   return ac
// },0);
// console.log(r);

// let array = [1,2,3,4,5,61,17,8,9,10,11,12,13,14,15]

// let re = array.reduce(([l1,l2,l3],cur) => {
//   if(cur > l1){
//     l2 = l1
//     l1 = cur
//   }else if(cur > l2 && cur < l1){
//     l3 = l2
//     l2 = cur
//   }else if(cur > l3 && cur < l2){
//     l3 = cur
//   }
//   return [l1,l2,l3]

// },[-Infinity,-Infinity,-Infinity])

// console.log(re)

// function* x(){
//   yield 1
//   yield 3
//   yield 4
//   yield "a,aspkjvejne"
//   yield undefined
//   yield true
// }

// const y = x()

// console.log(y.next().value)
// console.log(y.next().value)
// console.log(y.next().value)
// console.log(y.next().value)
// console.log(y.next().value)
// console.log(y.next().value)

// Given an array of numbers, double each number using map().

// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// let re = array.map((a) => a+a);
// console.log(re)

// Given an array of strings, capitalize the first letter of each string using map().

// let array = ['amal','krin','nsjf']

// let re = array.map((a) => a.toUpperCase())
// console.log(re);

// Gien an array of objects representing people with name and age properties, create a new array containing only the names of these people using map().

// let obj = [
//   {name: 'amal', age: 12},
//   {name: 'kerin', age: 22},
//   {name: 'venu', age: 43},
// ]

// let re = obj.map((a) => a.name)

// console.log(re);

// Given an array of numbers, create a new array where each element is the original number multiplied by its index in the array using map().

// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// let re = array.map((a,i) => a*i)
// console.log(re);

// Given an array of numbers, create a new array containing only the even numbers, and double each even number using map().

// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// let re = array.filter(a => a%2===0).map(a => a*a)

// console.log(re);

// Given an array of strings, filter out the strings that contain fewer than 5 characters, and capitalize the first letter of each remaining string using map().

// let array = ['amal','krishna','abeeshna','ammu',]

// let re = array.filter(a => a.length > 5).map(a => a.charAt(0).toUpperCase() + a.slice(1))
// console.log(re);

// Given an array of numbers, create a new array where each number is replaced by "even" if it's even, and "odd" if it's odd using map().

// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// let re = array.map((a,i) => {
//   if(a%2===0){
//     return 'Even'
//   }else{
//     return 'odd'
//   }
// })
// console.log(re)

// Given an array of strings, transform each string to uppercase and then append " - LENGTH: {length}" to each string, indicating its length, using map().

// let array = ['amal','krishna','abeeshna','ammu', 'Dony']

// let re = array.map((a)=> a.toUpperCase() +" : " + a.length)
// console.log(re);

// Rewrite any of the above examples using arrow functions within the map() method.

// let array = ['amal','krishna','abeeshna','ammu', 'Dony']

// let re = array.map( function a(a){
//   return a.toUpperCase() +" : " + a.length
// })
// console.log(re)

// Given an array of objects representing products with name and price properties, filter out the products with a price greater than $50.

// let array = [{name: 'a', price: 40},{name: 'a', price: 50},{name: 'a', price: 20},{name: 'a', price: 100},]

// let re = array.filter((a) => a.price >= 50)

// console.log(re);

// Given an array of strings, filter out the strings that have a length greater than 5 characters.

// let array = ['amal','krishna','abeeshna','ammu',]

// let re = array.filter(a => a.length > 5)
// console.log(re);

// Given an array of numbers, filter out the numbers that are greater than 100 and less than 1000.

// let array = [1,2,3,4,5,600,7,8,900,10,1100,12,130,140,1500]

// let re = array.filter(a => a > 100 && a < 1000)

// console.log(re);

// Given an array of objects representing students with name, age, and grade properties, filter out the students who are younger than 18 and have a grade lower than 80.

// let array = [{name: 'a', price: 40, m: 12},{name: 'a', price: 50, m: 13},{name: 'a', price: 20, m:34},{name: 'a', price: 100, m: 20},]

// let re = array.filter(a => a.m < 18 && a.price < 80)

// console.log(re);

// Given an array of objects representing employees with name, age, and department properties, filter out the employees who are older than 30 and work in the "Sales" department.

// let array = [{name: 'a', price: 40, m: 12},{name: 'a', price: 'sale', m: 130},{name: 'a', price: 20, m:34},{name: 'a', price: 100, m: 20},]

// let re = array.filter(a => a.m > 30 && a.price === 'sale')

// console.log(re);

// Given an array of numbers, filter out the duplicate numbers, so the resulting array contains only unique values.

// let array = [1,1,3,4,5,6,5,8,9,11,11,12,13,14,15]

// console.log(...new Set(array))

// Given an array containing various data types (such as strings, numbers, booleans, null, undefined), filter out the falsy values (e.g., empty strings, zero, false, null, undefined).

// let array = ['arat',123,null,1234,undefined,'string',NaN,true]

// let re = array.filter(Boolean)
// console.log(re);

// Given two arrays of numbers, filter out the numbers that are common to both arrays.

// let array2 = [1,12,3,4,15,6,7]
// let array1 = [1,2,13,4,5,16,7]

// let re = array1.filter(v => array2.includes(v))
// console.log(re);

// Given two arrays of numbers, filter out the numbers that are present in the first array but not in the second array.

// let array2 = [1,32,12,3,4,15,6,7]
// let array1 = [1,2,13,4,5,16,7]

// let re = array2.filter((a) => !array1.includes(a))

// console.log(re);

// Given an array of strings, filter out the strings that match a specific regular expression pattern.

// let array = ['abcd','asdf','123']

// let p = /\d/

// let re = array.filter(a => !p.test(a))
// console.log(re);

// 1. reversing using for loop

// 2. ⁠[2,5,7,9] convert to [7,9,2,5]

// let array = [2,5,7,9]

// let re = array.splice(2).concat(array.splice(0,2))

// console.log(re);

// 3. ⁠even numbers square cheyyan array lle

// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// let re = array.reduce((acc,cur) => {
//     if(cur % 2 === 0 ){
//         acc.push(cur*2)
//     }
//     return acc
// },[])
// console.log(re);

// 4. ⁠oru array ll korch number athil eathoke number add add cheythal ann oru value kittuka ennulath kanan eg. [2,4,6,8,9,7,15] ithil eathoke numbers add cheythal ann 21 kittuka aa numbers printcheyyuka

// 5. ⁠prime numbers print cheyyuka using for loop

// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// let re = []
// for (let i=0;i<array.length;i++){
//     if(array[i]%2===0)
//         re.push(array[i])
// }
// console.log(re);

// 6. ⁠array reverse cheyyuka puthiya oru variable create cheyyathe swapping method

// 7. ⁠duplicate elements print cheyyuka

// let array = [1,2,2,3,3,4,4,5,6,7,8,9,10,11,12,13,14,15]

// console.log(...new Set(array))

// 8. ⁠odd number square cheyyukayum even number cube cheyyukayum cheyyuka in a array

// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// let a = []
// let result = array.map((cur) => {
//   if(cur%2===0){
//     return a.push(cur*cur)
//   }else{
//     return a.push(cur*cur*cur)
//   }
// })

// console.log(a)

// 9. ⁠second largest number print

// let array = [1, 2, 3, 41, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// let result = array.reduce(
//   ([large, secondlarge], cur) => {
//     if (cur > large) {
//       secondlarge = large;
//       large = cur;
//     } else if (cur > secondlarge && cur < large) {
//       secondlarge = cur;
//     }
//     return [large, secondlarge];
//   },
//   [-Infinity, -Infinity]
// );

// console.log(result[0])

// 10. ⁠3 rd largest number print

// let array = [13,2,3,4,35,63,7,8,9,10,11,12,13,14,15]

// let thirdLargest = array.reduce(([large,secLarge,thirdLarge],cur) => {
//     if(cur > large){
//         thirdLarge = secLarge;
//         secLarge = large;
//         large = cur
//     }else if(cur > secLarge && cur < large){
//         thirdLarge = secLarge;
//         secLarge = cur;
//     }else if(cur > thirdLarge && cur < secLarge){
//         thirdLarge = cur
//     }
//     return [large,secLarge,thirdLarge]

// },[-Infinity,-Infinity,-Infinity])

// console.log(thirdLargest)

// 11. ⁠oru arrayile 1-100 ll prime numbers oke square cheyuka baaki ullath normal ayit print cheyyuka

// 12. ⁠array 1-10 ll even numbers true ennum odd numbers false ennum kanikuka

// 13. ⁠array list even or odd numbers remove chyth print cheyyuka like filter

// 14. ⁠[2,4,6,8,9,7,15]. 2 square cheyyuka 4 cube cheyyuka 6 square cheyyuka 8 cube like angane array ith thanne avanam enn illa

// 14. ⁠[2,4,6,8,9,7,15]. 2 square cheyyuka 4 cube cheyyuka 6 square cheyyuka 8 cube like angane array ith thanne avanam enn illa

// 1. Write a function that takes an array of numbers and returns a promise that resolves with the sum of all numbers in the array.

// 2. Create a function that accepts an array of promises and returns a promise that resolves with an array of their resolved values

// 3. Implement a function that takes an array of URLs and fetches them asynchronously using promises, returning a promise that resolves with an array of response data.

// 4. Write a program to filter an array of numbers asynchronously using promises, returning a promise that resolves with the filtered array.

// 5. Create a function that accepts an array of file paths and reads them asynchronously using promises, returning a promise that resolves with an array of file contents

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   let person1 = new Person('John', 30);
//   let person2 = new Person('Jane', 25);

//   console.log(person1)
//   console.log(person2)

// (function x(){
//     console.log("amal")
// })()

// console.log("amal")

// console.log(x)
// var x =10
// foo();

// function foo() {
// }

// // ================================================================================================

// // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // arr.filter((a,i) => {
// //     if (a%3===0){
// //         arr.splice(i,1)
// //     }
// // })

// // console.log(arr)

// // arr.forEach((x,i) => {
// //   if (x % 3 === 0) {
// //     arr.splice(i, 1);
// //   }
// // });

// // console.log(arr)

// // =================================================================================================

// // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // let re = arr.reduce((ac, cur) => {
// //   if (cur % 2 != 0 && ac < cur) {
// //     ac = cur;
// //   }
// //   return ac;
// // });

// // console.log(re);

// // ======================================================================================

// // const obj = {
// //     a:4,
// //     b:2,
// //     c:3
// // }

// // let aee =Object.values(obj).reduce((a,c) => a+=c,0)

// // console.log(aee)

// // ------------------------------------------------------------------------------------

// let b = 100

// setTimeout(function() {
//   console.log(b);
//   b = 5
// }, 1000);

// b = 150

// setTimeout(function() {
//   console.log(b);
// }, 1500);

// b = 200

// let x = 1;
// let y = 0;

// [x,y] = [y,x]

// console.log(x,y)

// // ==========================================================================

// let array = [1,2,3,4,5,6,4,8,9,10,11,17,13,14,15]

// let re = array.reduce(([l1,l2,l3],cur) => {
//     if(cur < l1){
//         l2=l1
//         l1=cur
//     }else if(cur < l2 && cur > l1){
//         l3 = l2
//         l2 = cur
//     }else if(cur < l3 && cur > l2){
//         l3 = cur
//     }
//     return [l1,l2,l3]
// },[Infinity,Infinity,Infinity])

// console.log(re)

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// let l1 = -Infinity
// let l2 = -Infinity

// for(let i=0;i<array.length;i++){
//     let cur = array[i]
//     if(cur > l1){
//         l2 = l1
//         l1 = cur
//     }else if(cur > l2 && cur < l1){
//         l2 = cur
//     }
// }

// let re = [l1,l2]
// console.log(re);

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//  for(let i=0;i<array.length;i++)
//     if(array[i]%2==0){
//         array.splice(i,1)
//     }

// console.log(array)

//===================================================================================================================

// let greeting = "Hellllo World";

// let result = greeting.split("").reduce((acc, cur) => {
//   acc[cur] = (acc[cur] || 0) + 1;
//   return acc;
// }, {});

// console.log(result);

// let CountObj = Object.values(result).reduce((acc,cur) => {
//   if(cur > acc)
//   acc = cur
//   return acc
// })

// let maxUsedLetter = Object.keys(result).filter(key => result[key] === CountObj)

// console.log(CountObj)

// console.log(`${maxUsedLetter} : ${CountObj}`);

// ==========================================================================

// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };

// alert( user['name'] )

// let str = 'HelloWorld'

// let arr = str.split("");
// console.log(arr);

// let obj={}
// let largest=1;
// let value;
// arr.map((curr) =>{
//     if(obj[curr]){
//         obj[curr]++;

//     }else{
//         obj[curr]=1;
//     }
//     if(obj[curr]>largest){
//         largest = obj[curr];
//         value=curr;
//     }
// })
// console.log(obj);

// console.log(value);
// console.log(largest)

// let a = [{ab:2,ac:4},{ab:1,ac:4},{ab:9,ac:4},{ab:2,ac:4},{ab:5,ac:4}]

// let array = [];
// let value = a.map((curr) => array.push(curr.ab,curr.ac)).reduce((ac,cur) => {
//     if(cur%2===0){
//        return ac += cur
//     }
// },0)
// console.log(value);

// =================================================================================== 1

// let str = '6Hellollollou mymmmhdfuhewemmmmmmmmm name is amalkrishna'

// // // let longestword = str.split(" ").reduce((acc,cur) => {
// // //     if(cur.length > acc.length){
// // //     acc = cur;
// // //     }
// // //     return acc
// // // },"")

// // // console.log(longestword)

// let convrtToArray = str.split(" ")

// let longestword = ''

// for (let i = 0; i < convrtToArray.length; i++){
//     if (convrtToArray[i].length > longestword.length){
//         longestword = convrtToArray[i]
//     }
// }

// console.log(longestword)

// ======================================================================================== 2

// let str = 'wecome to javastript'

// let ans = str.split("").filter((a,i) => {
//     if(a == 'a' || a == 'e' || a == 'i' || a == 'o' || a == 'u'){
//         a.slice(i,1)
//     }else{
//         return a
//     }
// }).join("")

// console.log(ans)

// ======================================================================================== 3

// let array = [1,2,3,4,5,6,7,8,9,10]

// let [a,b,c,d,e,...rest] = array

// console.log(rest)

// ======================================================================================== 4

// let obj = {
//     name: 'amal',
//     age: 34,
//     place: 'kerala',
//     av:34,
//     fv:'knwwem'
// }

// let {name,age,place,...rest} = obj;

// console.log(rest)

//  ========================================================================================== 5

// let array = [1,2,3,4,5,6,7,8,9]

// let result = array.filter((a) => a%3!==0)

// console.log(result)

// =========================================================================================== 6

// let array = [1,2,3,4,5,6,7,8,9]

// let result = array.reduce((acc,cur) => {
//     if(cur%2!==0){
//         if(cur > acc){
//             acc = cur
//         }
//     }
//     return acc
// })

// console.log(result)

// ============================================================================================ 7

// let str = 'amal'

// let reversStr = str.split("").reverse().join("")

// console.log(reversStr)

// ============================================================================================= 8

// let obj = {
//     fname: 'amal',
//     age: 19,
//     place: 'Malapuram',
//     innerobj: {
//         fullName: 'Amal Krishna'
//     }
// }

// obj.sname = 'krishna.....'
// obj['tname'] = 'pambalath....'
// const newObj = JSON.parse(JSON.stringify(obj))
// newObj.innerobj.cname = 'none....'

// console.log(obj)
// console.log(newObj)

// =========================================================================================== 9

// let obj = {
//     name: 'amal',
//     age: 29
// }

// Object.freeze(obj);
// Object.seal(obj);

// obj.name = 'krishna'
// obj.place = 'Malapuram'

// console.log(obj)

// =========================================================================================== 10

// let obj = {obj1:{obj2:{ name: 'amal'}}}

// console.log(obj?.obj1?.obj2?.name)

// =========================================================================================== 11

//     let array = [11,2,3,4,5,6,7,8,9,10]

// let result = array.map((a) => a*2).reduce(([largest,secLargest,third],cur) => {
//     if(cur > largest){
//          third = secLargest;
//          secLargest =largest;
//          largest = cur;
//     }else if(cur > secLargest && cur < largest){
//         third = secLargest;
//         secLargest = cur;
//     }else if(cur > third && cur < secLargest)
//         third = cur
//     return [largest,secLargest,third]
// },[-Infinity,-Infinity,-Infinity])

// console.log(result)

// ========================================================================================== 12

// let array = [1,2,1,2,3,4,4,5,7,3,9,]

// let result = new Set(array)

// console.log(result)

// let result2 = array.reduce((acc,cur) => {
//     acc[cur] = (acc[cur] || 0) +1
//     return acc
// },{})

// console.log(result2)

// =========================================================================================== 13

// let obj = {a:1,q:3}

// let a = Object.keys(obj).length === 0

// console.log(a)

// ============================================================================================ 14

// const myPromise = new Promise((resolve,reject) => {
//     let rain = false;
//     setTimeout(() => {
//     if(rain){
//         resolve('Heavy Rain')
//     }else{
//         reject('No Rain')
//     }
//     },6000)
// })

// myPromise
// .then((data) => console.log(data))
// .catch((data) => console.log(data))

// =============================================================================================== 15

// const myPromise = new Promise((resolve,reject) => {
//     let rain = true;
//     setTimeout(() => {
//         if(rain){
//             resolve("Heavy rain")
//         }else{
//             reject("No rain")
//         }
//     },2000)
// })

// async function x(){
//     try{
//         let a = await myPromise
//         console.log(a)
//         console.log("logy");
//     }
//     catch(error){
//         console.log(Error(error))
//     }
// }
//    x()
// ============================================================================================== 16

// let obj = {
//     name: 'amal',
//     age: 23,
//     print: function x(place,street){
//         console.log(`my name ${this.name} and my age ${this.age} place ${place} and street ${street}`)
//     }
// }
// let obj2 = {
//     name: 'abhi',
//     age: 22,
// }

// obj.print('malapuram','mkba')
// obj.print.apply(obj2, ['malapuram','ramoram'])

// let re = obj.print.bind(obj2, 'malapuram','ramoram')

// re()

// ================================================================================================ 17

// print the largest length word form the string

// let str = "hello my name is amalkrishna"

// let largeWord = str.split(" ").reduce((acc,cur) => {
//     if(acc.length < cur.length){
//         acc = cur;
//     }
//     return acc
// },"")

// console.log(largeWord)

//  print values of this string

// let values = str.split(" ").map((a) => a.length);

// console.log(values)

////////////////////////////////////////////////////////////

// find sum of odd numbers form an array

// let array = [2,4,1,5,2,7,5,3,8,9]

// let sum = array.reduce((acc,cur) => {
//     if(cur % 2 !== 0){
//         acc += cur;
//     }
//     return acc;
// },0)

// console.log(sum)

// filter all odd number

// let odd = array.filter((value) => value % 2 !== 0)

// console.log(odd)

// remove all odd number and add 0

// let newArray = array.map((value,index) => {
//     if(value % 2 !== 0){
//         return 0;
//     }else{
//         return value;
//     }
// })

// console.log(newArray)

////////////////////////////////////////////////////////////////

// Object and array destructuring

// let obj = {
//     name: 'Master',
//     age: 13,
//     place: 'Kochi'
// }

// let {name,age,place} = obj;

// console.log(name)
// console.log(age)

// let array = [2,4,1,5,6,7,8]

// let [a,b,c,d,...rest] = array;

// console.log(rest)

// console.log(a + c)

///////////////////////////////////////////////////////////

// take element form the array which is divisible by 5 and take its sum?

// let array = [23,5,46,23,78,5];

// let sum = array.reduce((acc,cur) => {
//     if(cur % 5 === 0){
//         acc += cur;
//     }
//     return acc;
// },0)

// console.log(sum);

////////////////////////////////////////////////////////////////////

// let str = "Amalkrishna"

// let reversed = str.split("").reverse((a,b) => b-a)

// console.log(reversed)

//  array sorting

// let array = [6,3,4,2,1,5,7,0,9,8]

// let sorted = array.sort((a,b) => a-b)

// console.log(sorted)

/////////////////////////////////////////////////////////////////////

// optional chaining

// let obj = {
//     name: {
//         fname: 'Amal',
//         sname: 'Krishna'
//     },
//     age: 23
// }

// let re = obj?.name?.fname

// console.log(re)

//////////////////////////////////////////////////////////////////////

// let array = [1,2,3,4,5];

// let result = array.map((a) => a + a)
// .reduce(([large,second],cur) => {
//     if(cur > large){
//         second = large;
//         large = cur;
//     }else if(cur > second && cur < large){
//         second = large;
//     }
//     return [large,second]
// },[0,0])

// console.log(result)

////////////////////////////////////////////////////////////////////

// let array = [1,2,3,4,5,6,7,1,2,3,4,5,6,7,9]

// let uniq = new Set(array)

// console.log(uniq)

// let unique = array.reduce((acc,cur) => {
//   if(acc[cur]){
//       acc[cur]++
//   }else{
//       acc[cur] = 1
//   }
//   return acc;
// },{})

// console.log(unique)

// let nonRepeated = array.reduce((acc, cur) => {
//     if (unique[cur] === 1) {
//         acc.push(cur);
//     }
//     return acc;
// },[]);

// console.log(nonRepeated)

////////////////////////////////////////////////////////////////////

// how to check object empty or not

// let obj = {}

// let objis = Object.keys(obj) == 0;

// console.log(objis)

///////////////////////////PROMISE/////////////////////////////

// const promise1 = new Promise((resolve,reject) => {
//     let condition = false;
//     setTimeout(() => {
//         if(condition){
//             resolve("Promise1 Resolved")
//         }else{
//             reject("Promise1 Rejected")
//         }
//     },2000)
// })

// async function x(){
//     try{
//         let data = await promise1
//         console.log(data)
//     }
//     catch(err){
//         console.error(err)
//     }
// }
// x()

////////////////////////////CALL,APPLY,BIND//////////////////////////////

// let car = {
//     company: 'mahinthra',
//     modal: 'thar',
//     fual: 'desal'
// }

// function name(color,weel){
//     console.log(`${this.company} ${this.modal} ${color} ${weel}`)
// }

// // name.call(car,'black',5)
// // name.apply(car, ['black',4])

// let a = name.bind(car, 'black',5)

// a()

//////////////////////////////////////////////////////////////////////////
// find duplicate from dtring

// let str = 'MALLKRISHNA'

// let array = str.split("")

// let obj = array.reduce((acc,cur) => {
//     if(acc[cur]){
//         acc[cur]++;
//     }else{
//         acc[cur] = 1
//     }
//     return acc
// },{})

// let duplicate = array.reduce((acc,val) => {
//     if(obj[val] > 1){
//         acc.push(val)
//     }
//      return acc;
// },[])

// console.log(new Set(duplicate))

/////////////////////////////////////////////////////////////////////

// let str = 'aeioudfr'

// let result = str.split("").reduce((acc,cur) => {
//     if(cur != 'a' && cur != 'e' && cur != 'i' && cur != 'o' && cur != 'u'){
//         acc.push(cur);
//     }
//      return acc;
// },[])

// let neww = result.join("")
// console.log(result)
// console.log(neww)

/////////////////////////////////////////////////////////////////////////

// white space remove

// let str = '           onio        '

// let newStr = str.trim()

// console.log(str)
// console.log(newStr)

/////////////////////////////////////////////////////////////////////////

// let array = [1,2,3,4,5,6,7,8,9]

// let sum = array.reduce((acc,cur) => acc += cur, 0)

// console.log(sum)

// let avarge = sum / array.length

// console.log(avarge)

/////////////////////////////////////////////////////////////////////////

// let str = 'amalkrishna'

// let frequency = str.split("").reduce((acc,cur) => {
//     if(acc[cur]){
//         acc[cur]++;
//     }else{
//         acc[cur] = 1;
//     }
//     return acc;
// },{})

// console.log(frequency)

// /////////////////////////////////////////////////////////////////////////////

// let array = [1,2,3,4,5,6,7,8,9]

// let result = array.map((value) => {
//     if(value % 2 === 0){
//         return value*value
//     }else{
//         return value*value*value
//     }
// })

// console.log(result)

/////////////////////////////////////////////////////////////////////////////

// let array = [1,3,3,4,56,6]

// let result = array.reduce((acc,cur) => acc+=cur, 0)

// console.log(result)

//////////////////////////////////////////////////////////////////////////////

// let array = [1,6,8,4,9,6,7]

// array.splice(2,1,0)

// console.log(array)

//////////////////////////////////////////////////////////////////////////////

// let array = [1,2,3,4,5,6,7,8,9]

// let oddNumber = array.filter((value) => value % 2 !==0)

// console.log(oddNumber)

///////////////////////////////////////////////////////////////////////////////

// let array = [11,2,3,4,5,7,8,9]

// let largeOdd = array.reduce((acc,cur) => {
//     if(cur % 2 !== 0 && cur > acc){
//         acc = cur;
//     }
//     return acc;
// },0)

// console.log(largeOdd)

/////////////////////////////////////////////////////////////////////////////

// let obj = {
//     name: 'amal'
// }

// obj.name = 'krishna'
// obj.age = 12;

// let obj1 = Object.assign(obj)

// console.log(obj1)
// obj1.name = 'Amal'

// // console.log(obj1)
// console.log(obj)

//////////////////////////////////////////////////////////////////////////////

// let str = 'hello world';

// let array = str.split("")

// let count = array.reduce((acc,cur) => {
//     if(acc[cur]){
//         acc[cur]++;
//     }else{
//         acc[cur] = 1;
//     }
//     return acc;
// },{})

// console.log(count)

// let highestCount = Object.values(count).reduce((acc,val) => {
//     if(val > acc){
//         acc = val
//     }
//     return acc;
// },0)

// console.log(highestCount)

// let highestFreEle = array.reduce((acc,cur) => {
//     if(count[cur] === highestCount){
//         acc= cur;
//     }
//     return acc;
// })

// console.log(highestFreEle)

//////////////////////////////////////////////////////////////////////////////

// let array = [{a:3},{b:5},{c:6}]

// array.splice(1,1)

// console.log(array)

/////////////////////////////////////////////////////////////////////////////

// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 30 },
//     { name: 'David', age: 40 }
// ];

// let result = people.filter((obj) => obj.age <= 30);

// console.log(result)

//////////////////////////////////////////////////////////////////////////////

// let array = [12,2,3,4,5,6,7,8,9];

// let smallOdd = array.reduce((acc,cur) => {
//     if(cur % 2 !== 0 && cur < acc){
//         acc = cur;
//     }
//     return acc;
// },Infinity)

// console.log(smallOdd)

///////////////////////////////////////////////////////////////////////////

// function sum(x){
//     return function(y){
//         return x+y
//     }
// }

// let addFive = sum(5)
// let addTwo = sum(2)
// console.log(sum(5)(5))

// console.log(addFive(4))
// console.log(addTwo(8))

/////////////////////////////////////////////////////////////////////////////

// let array = [12,[2,4,[45,2],[34,5]],23,[233]]

// let flatArray = array.flat(5)

// console.log(flatArray)

/////////////////////////////////////////////////////////////////////////////

// let ab = [{a:3,b:4},{a:3,b:4},{a:3,b:4},{a:3,b:4},{a:3,b:4}]

// let array = []

// ab.map((cur) => array.push(cur.a,cur.b))

// console.log(array)

// let sumOfOdd = array.reduce((acc,cur) => {
//     if(cur % 2 !==0){
//         acc += cur;
//     }
//     return acc;
// },0)

// // console.log(sumOfOdd)

// let a = "owhefoiefppiwjp"

// let array = a.split("")
// console.log(array);

// let array = [2,1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 9];

// let dupli = new Set();

// let check = new Set();

// array.forEach((curr) => {
//   if (check.has(curr)) {
//     dupli.add(curr);
//   } else {
//     check.add(curr);
//   }
// });
// console.log([...dupli]);
// console.log([...check]);

// let x = 10

// setTimeout(() => {

//   console.log(x)
// },3000)

// x = 200
// console.log(x)

// setTimeout(() => {

//   x = 50
//   console.log(x)

// },1000)

// x = 20

// console.log(x)

// let array = [12,33,56,{ac:34,ab:45},[12,34]]

// let obj = [{ac:34,af:4},{ac:3,af:6},{ac:34,af:6},{ac:6,af:6},{ac:3,af:6}]

// let array = []
//  obj.map((x) => array.push(x.ac,x.af))

//  console.log(array)

// let obj = { ab: { ef: [12, 34, 5, 6] } };

// let obj1 = [
//   { ac: 3, af: 6 },
//   { ac: 3, af: 6 },
//   { ac: 3, af: 6 },
// ];

// let total = obj1.reduce((acc, value) => acc + (value.ac + value.af), 0);
