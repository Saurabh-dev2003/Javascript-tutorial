🔁 Chapter 5: Loops

/*🔄 Why Loops?

Loops help us repeat code without rewriting it.
If a task needs to be done multiple times (e.g., printing 1–10, going through an array, or
checking each character in a string), loops are the backbone. */

// 🔁 for Loop

for (let i = 0; i < 5; i++) {
console.log(i);
}

/* Start from i = 0
Run till i < 5
Increase i each time  */

// 🔁 while Loop

//Condition is checked before running

let i = 0;  // yaha se start hota hai
while (i < 5) {   // here condition will be checked
console.log(i);   // what you want to print until condition doesn't matched
i++;               // changes
}

// 🔁 do-while Loop

//Runs at least once, even if condition is false

let j = 0;
do {
console.log(j); // yaha par at lest ek bar toh code jarur chalega usake baad condition check hoga
j++;
} while (j < 5);

//⛔ break and continue

// break : Exit loop completely

for (let a = 1; a<201 ; a++) {
     console.log(a);  // yaha par 32 tak print hoga usake baad condition break ho jayega.
     if (a === 32) {
        break;
     }
}

// continue : Skip current iteration and move to next

for (let a = 1; a<201 ; a++) {  
     if (a === 32) {  // yaha par 32 ko chhod kar baki sab print hoga
        continue;
     }
     console.log(a);
}

// here some question for loops

/*for(let b=1; b<=20; b++){
    if (b%2 == 0) {
        console.log(b);
    }
} */


/*for(let k=1; k<=10; k++){
   console.log(5*k)
} */

/*let sum = 0;
for (let y= 1; y< 101; y++) {
    sum = sum + y;
}   
console.log(sum); // output:5050 */

//Q1: Stop at  first multiple of 7

// write a loop from 1 to 100 that:
// . print each number
// . stops completely when it finds the first number divisible by 7

for(let k = 1; k<101; k++){
    console.log(k);
    if(k%7 === 0){
        break;
    }
}

// Q2: skip mutiples of 3

// write a loop from 1 to 20 that:
// . skips numbers divisible by 3
// . prints all others

for (let i = 1; i < 21; i++) {
   if (i % 3 === 0) {
      continue;
   }
    console.log(i);
}
 
// Q3: Print first 5 odd  numbers only 

// write a loop from 1 to 100 that:
//. print only 5 odd numbers 
// . then stops the loop 

// yaha par use both if ,continue, and a counter + break

let count = 0;
for(let l =1; l<101; l++){
    if(l % 2 === 1){
        count++;
        console.log(l);  // output: 1 3 5 7 9
    }
    if(count === 5) break;
}

// trevres the string

let name = "saurabh";
for(let m = 0; m < name.length; m++){
    console.log(name[m]); // output: s a u r a b h
}

// let check how many digits are there in any number

let num = 12345;
let counter = 0;

while (num > 0) {
    counter++;
    num = Math.floor(num/10); // yaha par js ka inbuilt method use kiys gaya hai
}

console.log("total no of digits are:", counter);
