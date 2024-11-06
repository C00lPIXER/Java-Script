// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// const array2 = ["A", "B", "C", "D", "E", "F"];
// console.log(array);
// console.log("\n");

// //.........................Map.....................................

// function double(x) {
//   return x * 2;
// }
// function mod(x) {
//   return x % 2;
// }
// function add(x) {
//   return x + 1;
// }
// function binary(x) {
//   return x.toString(2);
// }

// const map1 = array.map(double);
// console.log(map1);
// const map2 = array.map(mod);
// console.log(map2);
// const map3 = array.map(add);
// console.log(map3);
// const map4 = array.map(add);
// console.log(map4);
// const map5 = array.map(binary);
// console.log(map5);

// const map6 = array.map((x) => x.toString(2));
// console.log(map6);

// console.log("\n");

// //........................filter....................................

// function isOdd(x) {
//   //finding odd number
//   return x % 2;
// }
// const filter = array.filter(isOdd);
// console.log(filter);

// function isEven(x) {
//   //finding even number
//   return x % 2 == 0;
// }
// const filter1 = array.filter(isEven);
// console.log(filter1);

// function grater4(x) {
//   //finding grater than 4 numbers
//   return x > 4;
// }
// const filter2 = array.filter(grater4);
// console.log(filter2);

// const filter3 = array.filter((x) => x > 5); //finding grater than 5 numbers with arrow function
// console.log(filter3);

// //..........................Reduse...............................

// //without reduce calculate sum

// function findsum(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum = sum + array[i];
//   }
//   return sum;
// }
// console.log(findsum(array));

// //with reduse calculate sum

// const reduce = array.reduce(function (accumilator, current) {
//   accumilator = accumilator + current;
//   return accumilator;
// }, 0);
// console.log(reduce);

// //without reduce find maximum value

// function findmax(array) {
//   let max = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }
//   return max;
// }
// console.log(findmax(array));

// //with reduse

// const reduce1 = array.reduce(function (acc, curr) {
//   if (curr > acc) {
//     acc = curr;
//   }
//   return acc;
// }, 0);
// console.log(reduce1);

// // undarstanding

// const user = [
//   { firstNmae: "Amal", lastName: "Krishna", age: 19 },
//   { firstNmae: "Vmal", lastNmae: "Kumar", age: 24 },
//   { firstNmae: "Anas", lastNmae: "Muhammed", age: 31 },
// ];

// //print all users under age 30 and first name

// let acc = user.filter((x) => x.age < 25).map((x) => x.firstNmae);
// console.log(acc);

// //...........................forEach..........................

// const numbers = [65, 44, 12, 4];
// let sum = 0;

// numbers.forEach(function (item) {
//   sum += item;
// });

// console.log("Sum:", sum); // Output: Sum: 125

// let f = array.map(function (element, ind) {
//   console.log(`Element at index ${ind} is ${element}`);
// });

// console.log(f);

// //..................concat..........................

// const concatarray = array.concat(array2);
// console.log(concatarray);

// //..................find..........................

// const find = array.find((element) => element == 4);
// console.log(find);

// const inventory = [
//   { name: "apples", quantity: 2 },
//   { name: "bananas", quantity: 0 },
//   { name: "cherries", quantity: 5 },
// ];

// const result = inventory.find((item) => item.name === "apples");

// console.log(result); // { name: "cherries", quantity: 5 }

// //.......................Sort................................

// let sort = array.sort();
// //  let sortr =array.sort(( b, a) => {return a -b });

// console.log(sort);
// //  console.log(sortr);

// //............................Push.............................

// console.log(array);
// array.push(10);
// console.log(array);

// //....................Unshift..............................

// console.log(array);
// array.unshift(0);
// console.log(array);

// //..........................pop.......................

// const removeitem = array.pop();

// console.log(array);
// console.log(removeitem);

// //......................shift.........................

// console.log(array);
// array.shift();
// console.log(array);

// //............................toString...................
// console.log("\ntoString");
// const arrayString = array.toString();
// console.log(arrayString);

// //..................join......................

// console.log("\njoin()");
// const arrayJoin = array.join();
// console.log(arrayJoin);
// const arrayj = array.join(". ");
// console.log(arrayj);

// //...............fill..........................

// console.log("\nfill");
// console.log(array2);
// array2.fill(1);
// console.log(array2);
// array2.fill("a", 2);
// console.log(array2);
// array2.fill("a", 1, 3);
// console.log(array2);

// //...................copywithin...........................

// console.log("\ncopyWithIn");
// array.copyWithin(2);
// console.log(array);
// array.copyWithin(2, 4);
// console.log(array);
// array.copyWithin(2, 4, 6);
// console.log(array);

// //......................slice...........................

// console.log("\nSlice");
// console.log(array);
// const arrayslice = array.slice(2, 4);
// console.log(arrayslice);

// //.................splice................

// console.log("\nSplice");
// console.log(array);
// array.splice(0, 0, 12);
// console.log(array);

// ///...................falt................
// console.log("\nflat");
// const Array3 = [0, [1, 3, [23, 6], 5], 56, 6];

// let ar = Array3.flat(5);
// console.log(ar);

// //-----------------------fill-----------------------------

// console.log("/nFill");

// const array4 = [10,9,8,7,6,5,4,3,2,1];

// array4.fill(`!`,9)

// console.log(array4)

