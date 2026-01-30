🧠 Chapter 2: Data Types + Type System

/*📦 What Are Data Types?

In JavaScript, every value has a type.
These types define what kind of data is being stored — a number, text, boolean, object, etc.

**There are two categories:

-> Primitive types –>  aisi saari value jinko copy karne par tumhe ek real copy mil  jaye
                     jaise ki ye sab ## string, number, boolean, null, undefined, symbol, bigInt

-> Reference types –> inko copy karne par  real copy nahi milegi but aaapko reference milega
                     parent ka
                     jiase ki ye sab ## arrays, object, function 

🔹 Primitive Data Types

. String → Text
"hello" , 'Sheryians'

. Number → Any numeric value
3 , -99 , 3.14

. Boolean → True or false
true , false

. Undefined → Variable declared but not assigned
let x; → x is undefined

. Null → Intentional empty value
let x = null;

. Symbol → Unique identifier (rarely used)

let obj = {
 uid :1,
 name :"saurabh",
 age : 12,
};

let u1 = Symbol("uid");
obj[u1] = "001";
console.log(obj); // { uid: 1, name: 'saurabh', age: 12, [Symbol(uid)]: '001' }


. BigInt → Very large integers                // let a = 23492284687546n;
123456789012345678901234567890n       

let a =23;
let b = a;
console.log(a); // ouptut:23 
console.log(b); // output:23 but it's copy of a */

/*🔹 Reference Data Types

-> Object → { name: "Harsh", age: 26 }

-> Array → [10, 20, 30]

-> Function → function greet() {}

These are not copied directly, but by reference. let see what that line mean's 

let x = [1,2,3];
let y = x;

// console.log(x); output: [ 1, 2, 3 ]
// console.log(y); output: [ 1, 2, 3 ]
 
//but if we change y than x is also change 

y.pop();
// console.log(y); output: [ 1, 2 ]
// console.log(x); output: [ 1, 2 ]  */

/* Dynamic typing -> js mein static typing nahi hai and yaha par hai dynamic typing jiska matlab hai aap data ko change kr skte ho kyuki yaha par dynamic data types hai

var a = 12; // integer
a = true;  //boolean
a = "saurabh";  // string
a = [23,45,65]; // array */

/* 🔍 typeof Data
Used to check the data type of a value:

typeof "Sheryians" // "string"
typeof 99 // "number"
typeof true // "boolean"
typeof undefined // "undefined"
typeof null // "object" ← known bug
typeof [] // "object"
typeof {} // "object"
typeof function(){} // "function"

console.log(typeof 55); */

/* 🔁 Type Coercion (Auto-Conversion)

JavaScript auto-converts types in some operations:

"5" + 1 // "51" → number converted to string
"5" - 1 // 4 → string converted to number

🚨 Loose vs Strict Equality

-> == compares value with type conversion
-> === compares value + type (no conversion)

5 == "5" // true
5 === "5" // false

🔦 Truthy and Falsy Values

Falsy values:
false , 0 , "" , null , undefined , NaN

Everything else is truthy, including:
"0" , "false" , [] , {} , function(){} 

if ("0") {
console.log("Runs"); // "0" is a non-empty string = truthy
}
*/




