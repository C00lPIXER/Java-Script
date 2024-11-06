const array = [55, 89, 120, 234, 3];

// let re = array.reduce(([max,sc_max], cur) => {
// if(max < cur){
//     sc_max = max
//     max = cur;
//     return [max,sc_max]
// }else if(sc_max < cur && cur != max){

//     sc_max = cur
//     return [max,sc_max]
// }
// return [max,sc_max]
// },[-Infinity, -Infinity]);

// console.log(`Second largest ${re[1]}`)

// let arr = array.reduce(
//   ([s1, s2], curr) => {
//     if (s1 < curr) {
//       s2 = s1;
//       s1 = curr;
//       return [s1, s2];
//     } else if (s2 < curr && cur != s1) {
//       s2 = cur;
//       return [s1, s2];
//     }
//     return [s1, s2];

//   },[-Infinity, -Infinity]);

// console.log(arr);

// let arr1 = [1,2,3,4,5]
// let isPrime = false;
// let output = arr1.filter(function(x){
//     if(x < 2){
//         isPrime = false;
//     }else{
//         isPrime = true;
//         for(let i = 2;i<=x/2;i++){
//             if(x%i==0){
//                 isPrime = false;
//                 break
//             }
//         }
//     }
//     if(isPrime){
//         return x;
//     }
// })
// console.log(output)

// let array1 = [null, undefined, 12, "Amal","234",true,"true"]

// let output = array1.filter((num) => {
//     if(typeof num === 'string' || typeof num === 'number'){
//         return num
//     }
// });
// output.splice(3,2)
// console.log(output)

// let arr = [1,2,3,4,5]
// let arrr =[]
// let arr2 = arr.map((x) => {
//     if(x%2===0){
//         arrr.push(x)
//     }
// })
// console.log(arrr)

let largarray = array.reduce((l1, curr) => {
  if (l1 > curr) {
    l1 = curr;
    return l1;
  }
  return l1
});
console.log(largarray)