// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// person.getNameAndAge = function() {
//     return `${this.firstName} and age ${this.age}`
// }

// console.log(person);
// console.log(person.fullName()); 
// console.log(person.getNameAndAge()); 

// let keys = Object.keys(person)
// console.log(keys)

// let values = Object.values(person)
// console.log(values);

// let entries = Object.entries(person)
// console.log(entries);

// let source = { car: "BMW" };
// Object.assign(person, source);
// console.log(person); 

// Object.seal(person)

// person.firstName = 'Amal'
// let home = {plane : 'MKBA'}
// Object.assign(person,home)
// console.log(person)

// Object.freeze(person);
 
// person.firstName = 'Amal'
// person.age = 40

// console.log(person)

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// let book = {
//   title : "Rich Dad Poor Dad",
//   author : "Robert Kiyosaki",
//   yearPublishes: 1997,
// }

// console.log('author' in book)

// let title = book.title
// console.log(title);

// let genre = {genre : "Money"}

// Object.assign(book, genre)

// console.log(book)

// book.yearPublishes = 2022
// console.log(book)

// delete book.author 
// console.log(book)

// boo = {sAuthor : "Amal"}

// let ogd = Object.assign(book)

// console.log(ogd)
// console.log(book)



// book.getSummary = function () {
//   return console.log(`Title ${this.title} and author ${this.author}`)
// }

// console.log(book)
// book.getSummary()


// function listBookProperties() {
//   for (let key in book) {
//       if (book.hasOwnProperty(key)) {
//           console.log(`${key}: ${book[key]}`);
//       }
//   }
// }
// listBookProperties();


// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


// let a ={
//   a:1000,
//   b:3,
//   c:5,
//   r:6
// }

// for (let n in a) {
//   console.log(a[n]*a[n]*a[n]);
// }


array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]


let [a,b,c,...rest] = array

console.log(...rest)

console.log(5 ** 3)