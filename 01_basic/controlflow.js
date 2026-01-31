🧭 Chapter 4: Control Flow

/*🚦 What is Control Flow?

Control flow decides which code runs, when it runs, and how many times it runs.
It's like decision-making + direction in your JavaScript program.
If operators are the verbs, control flow is the traffic signal.

🧱 if, else if, else

if (condition) {
// runs if condition is true
} else if (anotherCondition) {
// runs if first was false, second is true
} else {
// runs if none are true
}

✅ Example: */

let marks = 78;
if (marks >= 90) {
console.log("A");
} else if (marks >= 75) {
console.log("B");  // output : B aayega
} else {
console.log("C");
}

/* 🌀 switch-case

Great for checking one variable against many values.

switch (value) {
case value1:
// code
break;
case value2:
// code
break;
default:
// fallback
}

✅ Example: */

let fruit = "apple";
switch (fruit) {
case "banana":
console.log("Yellow");
break;
case "apple":
console.log("Red"); // value jis case se match karega vahi output ayega
break;
default:
console.log("Unknown");
}

// 🔁 Early Return Pattern

// Used in functions to exit early if some condition fails.

function checkAge(age) {
if (age < 18) return "Denied";
return "Allowed";
}
console.log(checkAge(19)); // output: Allowed 


//This avoids deep nesting and makes logic cleaner.


/* Write a function getGrade(score) that:
    . Takes a student's marks (0 to 100)
    . Returna the grade based on this logic :
// 90-100 A
// 80-89 B
// 70=79 C
// 60-69 D 
// 33-59 E
// 0-32 FAIL 
// Invalid marks */

function getGrade(score) {
    if (score >= 90 && score <= 100) return "A";
    if (score >= 80 && score <= 89) return "B";
    if (score >= 70 && score <= 70) return "C";
    if (score >= 60 && score <= 69) return "D";
    if (score >= 33 && score <= 59) return "E";
    if (score >= 0 && score <= 32) return "FAIL";
    return "Invalid marks";
}

console.log(getGrade(54)); // output: E
console.log(getGrade(31)); // output: FAIL

// Rock-Paper-Scissors logic

function rps(user,computer) {
    if (user === computer) return "draw";
    if (user === "rock" && computer === "scissor") return "user";
    if (user === "scissor" && computer === "paper") return "user";
    if (user === "paper" && computer === "rock") return "user";

    return "computer";
}

console.log(rps("rock" , "rock"));  // output: draw
console.log(rps("rock" , "paper"));  // output: computer



