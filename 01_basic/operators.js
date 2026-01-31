🔄 Chapter 3: Operators

/*🔧 What are Operators?

Operators are special symbols or keywords in JavaScript used to perform operations on values
(operands).
You’ll use them in calculations, comparisons, logic, assignments, and even type checks.
Think of them as the verbs of your code — they act on data.

➕ Arithmetic Operators

Used for basic math.
js
+ // addition
- // subtraction
* // multiplication
/ // division
% // modulus (remainder)
** // exponentiation (power)

Example:

let a = 10, b = 3;
console.log(a + b); // 13
console.log(a % b); // 1
console.log(2 ** 3); // 8

🧮 Assignment Operators

Assign values to variables.

= // assigns value
+= // a += b => a = a + b
-= // a -= b
*=, /=, %=

Example:

let score = 5;
score += 2; // score = 7

🧾 Comparison Operators

Used in condition checks.
== // equal (loose)
=== // equal (strict – value + type)
!= // not equal (loose)
!== // not equal (strict)
> < >= <=

Example:
console.log(5 == "5"); // true
console.log(5 === "5"); // false

✅ Logical Operators

Used to combine multiple conditions.

&& // AND – both must be true
|| // OR – either one true
! // NOT – negates truthiness 

// Example:
let age = 20, hasID = true;
if (age >= 18 && hasID) {
console.log("Allowed");  // kyuki if condition is ture = Allowed
}

🌀 Unary Operators

Used on a single operand.

+ // tries to convert to number
- // negates
++ // increment
-- // decrement
typeof // returns data type

Example:
let x = "5";
console.log(+x); // 5 (converted to number)

❓ Ternary Operator (Conditional)

Shorthand for if...else

    condition ? valueIfTrue : valueIfFalse

Example:

let score = 80;
let grade = score > 50 ? "Pass" : "Fail"; // kyuki 80>50 ture hai toh pass execute hoga
console.log(grade); // output: Pass */

// some practies question

let points = 120;
let status = points > 100 ? "Gold" : points > 50 ? "Silver" : "Bronze"
console.log(status);  // Gold

let loggedIn = true;
let hasToken = false;

let access = loggedIn && hasToken ? "Allow" : "Deny";

console.log(access);  // Deny

let temp = 35;

if (!(temp<30)) {
    console.log("Hot"); // hot kyuki "(35<30) = false aur  !false = true" toh if condition chalega
} else{
    console.log("Pleasant");
}

// some question on increment and decrement

let p = 4;
let q = ++p; // yaha par 1 increase ho kar show karta hai

console.log(p,q); // output: 5 5

let m = 10; // post decrement me pahele 10 show karega phir 1 minus ho ke bad me show karega
console.log(m--); //10 
console.log(m); //9

let n = 5;
let result = n++ + ++n; // 5 + 7(n=6 phir ++n=7)
console.log(result); // 12

let count = 5;

if (count-- == 5) { // ye conditon ture hoga
    console.log("Matched"); // matched ye chalega
} else {
    console.log("Not matched");
}









