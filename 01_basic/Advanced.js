// scope:- In JavaScript, scope determines where variables can be accessed in your code.

/* 🔑 Types of Scope in JavaScript
1. Global Scope

Variables declared outside any function or block are in the global scope. */

let name = "John";

function greet() {
  console.log(name); // accessible
}
greet();

//✔ Accessible everywhere in your code.

/* 2. Function Scope

Variables declared inside a function are only accessible within that function. */

function test() {
  let x = 10;
  console.log(x); // works
}

console.log(x); // ❌ Error (x is not defined)

// ✔ Only visible inside the function

/* 3. Block Scope (let and const)

Variables declared with let or const inside {} are only accessible within that block.*/ 

if (true) {
  let y = 20;
  const z = 30;
}

console.log(y); // ❌ Error
console.log(z); // ❌ Error

// ✔ Only visible inside the block

/* ⚠️ Special Case: var

var does NOT follow block scope — it is function-scoped.*/ 
if (true) {
  var a = 50;
}

console.log(a); // ✅ works (not block scoped) 

/* 🔑 Lexical Scoping vs Dynamic Scoping

📌 1. Lexical Scoping (Static Scoping)

👉 Scope is decided by where the function is written in the code

“Lexical” = related to structure (code layout)
At compile time, scope is fixed
✅ Example (JavaScript uses this) */ 

var x = 10;

function outer() {
  var x = 20;

  function inner() {
    console.log(x);
  }

  return inner;
}

const fnc = outer();
fnc(); // 👉 20

// ✔ inner() uses x = 20
// ✔ Because it looks at where it was defined, not called

/* 📌 2. Dynamic Scoping

👉 Scope is decided by how/where the function is called

Variables are resolved using the call stack at runtime
Not based on code structure
⚠️ Example (hypothetical, NOT JavaScript) */

let x = 10;

function outer() {
  let x = 20;
  inner();
}

function inner() {
  console.log(x);
}

outer(); 

/*👉 Output:
Lexical scope (JS) → 10
Dynamic scope (if JS had it) → 20

✔ Dynamic scoping checks who called the function 

🧾 Final Summary
Lexical scope → where function is written
Dynamic scope → where function is called
JavaScript uses lexical scoping only         */ 

/* 🔑 What is a Closure in JavaScript?

A closure is when a function remembers variables from its outer scope, even after that outer function has finished executing.

👉 In short:
Function + its lexical environment = Closure */

function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const fn = outer();

fn(); // 1
fn(); // 2
fn(); // 3
/* 💡 What’s happening?

outer() runs and returns inner
Normally, outer() should be gone ❌
But inner() still remembers count ✅

👉 That memory is called a closure

🔥 Real-Life Use Case
1. Data Privacy (Encapsulation) */

function createBankAccount(balance) {
  return {
    deposit(amount) {
      balance += amount;
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500

//✔ balance is private
//✔ Can’t access directly from outside


