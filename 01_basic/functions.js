🧮 Chapter 6: Functions

/*🧠 What are Functions?

Functions are blocks of reusable logic.
Instead of repeating the same task again and again, wrap it in a function and reuse it with
different inputs.

Think of a function like a vending machine:

-> Input: you give money + item code
-> Output: it gives you the item
-> Logic: hidden inside */

// basically ek code hai jise hume turant nahi chalana hai toh hum  us case mein function banayenge

// Ab dekhate hai ki function kaise dikhata hai

function greet() {    // fnc ka naam "greet" hai
console.log("Welcome to Sheryians!");  // ye function expression hai
}
greet(); // yaha par hamane function ko call kiya hai

// You define it once, then call it whenever needed.

// there are diffrent way to declare any function let's see that 

// first one is that #####
 
let fnc = function(){    // ek ye tarika hai fnc ko declare karne ka variable bana kar
    //function expression
}
fnc (); 

// second one is that ->  fat arrow function #####

let fun = () => {
    console.log("hello!");
}
fun();

// 🧾 Parameters vs Arguments ####

function greet(name) {
console.log("Hello " + name);
}
greet("Harsh");

/* name is a parameter
"Harsh" is the argument you pass */

// default parameter -> iska matlab hai ki jab hum argument na de tab fnc default parameter leta hai

function multiply(a = 1, b = 1) { // ye hai default parameter
     console.log(a * b);
}
multiply();

// Rest -> jab argument kai saare ho to humein utne hi parameter banaane padege, issey bachne ke liye, hum rest ka use karate hai (...parametername)

function abcd(...val) {
    console.log(val);
}
abcd(1,2,3,4,5,6); // output; [ 1, 2, 3, 4, 5, 6 ] ye aayega 

// 🌀 Return Values ####

function sum(a, b) {
return a + b;
}
let total = sum(5, 10);  // total is 15
console.log(total);  

// return sends back a result to wherever the function was called

// After return , function exits.


// 🎯 First-Class Functions -> JavaScript treats functions as values:

  /* ->  Assign to variables

   ->  Pass as arguments

   -> Return from other functions  */

// EXAMPLE

function shout(msg) {
    return msg.toUpperCase();
}
function processMessage(fn){
    console.log(fn("hello"));
}

processMessage(shout); /// ouput: HELLO

// EXAMPLE :

function abcd (Val){
    return Val;
}
abcd (function(){
    console.log("Good Morning");
})();


// 🧠 Higher-Order Functions (HOF) -> Functions that accept other functions or return functions.

/* ek aisa function jo return kare function ya fir accept kare ek function  apme parameter mein */

//example:

function acbd(val){

}
acbd(function(){  // yaha par acbd functon ke parameter me ek aur function hai

}); 


// OR

function abcd(){
    return function(){  // yaha par abcd function ek aur function return kar rah hai

    }
}
abcd();

// example:

function createMultiplier(x) {
return function (y) {
return x * y;
};
}
let double = createMultiplier(2);
console.log(double(5)); // 10


// 🔐 Closures -> when a function remembers its parent scope, even after the parent has finished.

// example:

function outer() {
let count = 0;
return function () {
count++;
console.log(count);
};
}
let counter = outer();
counter(); // 1
counter(); // 2
counter();

//Even after outer is done, counter still remembers count .

// ⚡ IIFE – Immediately Invoked Function Expression

// a function in which function will be created and called simultaneously.

/* example:

(function () {
console.log("Runs immediately");
})(); */

/* 🚀 Hoisting: Declarations vs Expressions

hello(); // works
function hello() {
console.log("Hi");
}

greet(); // error
const greet = function () {
console.log("Hi");
};

-> Declarations are hoisted

-> Expressions are not */

// questions practies

/*function getScore(...scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    console.log(sum);
}

getScore(10,12,13,14); // output: 49 */

// yahi question ko ek aur tarike se kar sakte hai

/*function getScore(...scores)  {
    let total = 0;
    scores.forEach(function(val){
            total = total + val;
    });
    return total;
}
console.log(getScore(10,12,13,14));  // output: 49 */

// write a BMI calculator

function bmi(weight, height) {
    return weight/(height*height);
}
console.log(bmi(70, 1.7).toFixed(2));  //output: 24.22

// write a dicount calculator

function discountcalculator(discount) {
    return function(price){
        return price-price*(discount/100);
    }
}
let ten = discountcalculator(10);  // yaha par discount = 10 hai
let twenty = discountcalculator(20); // yaha par discount = 20 hai

console.log(ten(1200));  //output: 1080
console.log(twenty(1200)); // output: 960



