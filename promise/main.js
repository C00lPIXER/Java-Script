// // const cart = ["canon", "nikon", "sony"];

// // createOrder(cart, function (orderId){
// //     proeedToPayment(orderId, function(paymentInfo){
// //         showOdersummery(paymentInfo, function (){
// //             updateWalletBalance();
// //         });
// //     });
// // });

// // //useing promise

// // createOrder(cart)
// //     .then((orderId) => proeedToPayment(orderId))
// //     .then((paymentInfo) => showOdersummery(paymentInfo))
// //     .then((paymentInfo) => updateWalletBalance(paymentInfo));

// //.....................promise.race()............

// // const fetchData = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         const success = true;
// //         if(success){
// //             const data = {name: "amal", age: 20};
// //             resolve(data);  // Resolve the promise with data
// //         } else {
// //             reject("failed to fetch data");  // Correct the spelling of "failed"
// //         }
// //     }, 3000);
// // });

// // fetchData
// // .then((result) => {
// //     console.log(`Name: ${result.name}, Age: ${result.age}`);  // Correct the spelling of "Name"
// //     return result.age;
// // })
// // .then((age) => {
// //     console.log(`Your age after 5 years: ${age + 5}`);  // Added a space and fixed plural "years"
// // })
// // .catch((error) => {
// //     console.error(`Error: ${error}`);
// // });

// let noRain = false;

// const rain = (work, time) => {
//   return new Promise((resolve, reject) => {
//     if (noRain) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log("Raining"));
//     }
//   });
// };

// rain(() => {
//   console.log("Go Outside");
// }, 3000)
//   .then(() => {
//     return rain(() => {
//       console.log("Get market");
//     }, 2000);
//   })
//   .catch((err) => {
//     console.log("Dont Go ");
//   })
//   .finally(() => {
//     console.log("complite");
//   });
