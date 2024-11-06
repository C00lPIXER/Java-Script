// Spread oprators

const globalPlayer = {
    id: 0,
    name: "Bot",
    powerLevel: 100
};

const player1 = {...globalPlayer};
player1.powerLevel = 50;
// console.log(player1);

// console.log(globalPlayer);

//without Spread oprator

// const player1 = globalPlayer
// player1.powerLevel = 50;
// console.log(player1);

// console.log(globalPlayer);

// Expanding an array: push

const array1 = ["amal", "joy", "Vimal"]
let arry2 = [...array1, "dos", "kevin"]

console.log(arry2);

// Combining an array

let ar1 = [1, 2, 3, 4];
let ar2 = [0, 9, 8, 7];
let array3 = [...ar1, ...ar2];

console.log(array3);

//Spreading into function arguments:

function sum(x, y, z) {
    return x + y + z;
}

let numb = [1, 2, 3];
console.log(sum(...numb))

//.................Rest oprater......................

