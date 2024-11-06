

//Length

let text = "AMALKRISHNA"
let re = text.length
console.log(re)

//toUppercase

let text1 = "amalkriShna"
let re1 = text1.toUpperCase();
console.log(re1)

//toLowerCase

let text2 = "AMALKRISHNA"
let re2 = text2.toLowerCase();
console.log(re2)

//Trim

let text3 = "     Amal    krishna      "
let re3 = text3.trim();
console.log(re3, "(with trim)")
console.log(text3, "(without trim)")

//pad

let text4 = "5"
let paddeds = text4.padStart(14,"_")
console.log(paddeds)

let text5 = "5"
let paddede = text4.padEnd(14,"_")
console.log(paddede)

//charAt

let text6 = "AMAL"
let re6 = text6.charAt(3);
console.log(re6);

//Split

let text7 = "1,2,3,4"
let re7 = text7.split(",",3);
console.log(re7);

let text8 = "Hello1World2How3Are4You"
let re8 = text8.split("")
console.log(re8)

//concat 

let text9 = "Amal"
let text10 = "Keishna"
let re10 = text9.concat(" ",text10)
console.log(re10);

//slice

let text11 = "www,eeee,rrrr,tttt,yyyy";
let re11 = text11.slice(0, 4);
console.log(re11)

//substring

let text12 = "www,eeee,rrrr,tttt,yyyy";
let re12 = text12.substring(-7, 13);
console.log(re12)

