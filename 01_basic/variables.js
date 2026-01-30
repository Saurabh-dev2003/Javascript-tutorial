📦 Chapter 1: Variables & Declarations

// Variables are containers that hold data.

/* Think of a variable as a box with a name on it. You can put something inside it (a value), and later
check or change what's inside.

In JavaScript, you create these boxes using keywords: var , let , or const . 

🧓 var – Old and risky

-> Scoped to functions, not blocks

-> Can be redeclared and reassigned

-> Hoisted to the top with undefined value .*/

var a = 10;  // here we use a var keyword where we declare and initialized a data.
var a = 34;  // Can be redeclared and reassigned 
var name = "saurabh";

/*🧓 let – Modern and safe

-> Scoped to blocks ( {} )
-> Can be reassigned but not redeclared*/

let age = 25;
age = 30; // ✅
//let age = 40;  ❌ Error (same block)

/*🔐 const – Constant values

-> Scoped to blocks
-> Cannot be reassigned or redeclared
-> Value must be assigned at declaration
-> TDZ applies here too*/

const PI = 3.14;
//PI = 3.14159;  ❌ Error-> Assignment to constant variable.

//But: If const holds an object/array, you can still change its contents:

const student = { name: "Riya" };
student.name = "Priya"; // ✅ OK

/*🔥 Scope in Real Life

Block Scope → Code inside {} like in loops, if , etc.

Function Scope → Code inside a function

let and const follow block scope.

var ignores block scope — which leads to bugs.*/

{
var x = 5;
let y = 10;
const z = 15;
}
//console.log(x); ✅ 5
//console.log(y);  ❌ ReferenceError -> y is not defined
//console.log(z);  ❌ ReferenceError -> Z is not defined

/*🧨 Temporal Dead Zone (TDZ)####

it's mean that 'utna area jitne mein js ko pata toh hai ki variable exist karta hai par wo aapko value nahi de sakta 

console.log(d);

let d = 20; // ReferenceError: Cannot access 'd' before initialization */

// but ye var ke sath nahi hota hai.

/* console.log(d);

var d = 34; // undefined */


/*🧨 Hoisting

JavaScript prepares memory before running code.
It moves all declarations to the top — this is called hoisting.

But:
var is hoisted and set to undefined

let and const are hoisted but not initialized — so accessing them early gives
ReferenceError


js                                           var a = undefined;
console.log(a); // undefined   ----->        console.log(a);      ------>  yahi hai Hoisting
var a = 10;                                  a = 20;

js
console.log(b); // ❌ ReferenceError
let b = 20; */


// some practies Question❓ for the understanding 

let A = 10;
{
    let A = 20;
    console.log(A);// output:20 just because of block scope
}

console.log(A); // output:10 because of outside the block scope




 