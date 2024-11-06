setTimeout(function (){
    console.log("timer")
},3000);

function x(hello) {
    hello();
    console.log("x")
    
}

x(function y() {
    console.log("y")
});



