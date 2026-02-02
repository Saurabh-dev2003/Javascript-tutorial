/*🧠 What is an Array?

An array is like a row of boxes, where each box holds a value and has an index (0, 1, 2...).
Arrays help you store multiple values in a single variable — numbers, strings, or even
objects/functions. */

let fruits = ["apple", "banana", "mango"];  // array name is fruits

// ⚙️ Creating & Accessing Arrays

let marks = [90, 85, 78];
console.log(marks[1]); // access the array
marks[2] = 80; // Update the array

// -> Indexing starts from 0
// -> You can access, update, or overwrite values by index

// ⚙️ Common Array Methods

// 🧱 Modifiers (Change original array)

/*example:

let arr = [1, 2, 3, 4];
arr.push(5);  // this method used to add any element in array and it's Add to end of array            
console.log(arr); //ouput: [ 1, 2, 3, 4, 5 ]
 
arr.pop(); // Remove last element of the array 
console.log(arr); //ouput: [ 1, 2, 3, 4 ]

arr.shift(); // Remove first elemnt of the array
console.log(arr); //output: [ 2, 3, 4 ]

arr.unshift(0); // Add to start
console.log(arr); //output: [ 0, 2, 3, 4 ]

arr.splice(1,2); // Remove 2 items starting at index 1
console.log(arr); //output: [ 0, 4 ]

let array = [1,2,3,4,5];
array.slice(0,4); // it is a copy of original arrya but it's copy o to 4th index value of the array
let newarr = array.slice(0,4); 
console.log(newarr); // output: [ 1, 2, 3, 4 ]

array.reverse(); // Reverse order
console.log(array); // output: [ 5, 4, 3, 2, 1 ] 

let src = [21,10,23,7]
let A = src.sort(function (a,b) {
    return a-b;  // ascending order
});
console.log(A); // output: [ 7, 10, 21, 23 ] 

let src = [21,10,23,7]
let A = src.sort(function (a,b) {
    return b-a;  // descending order
});
console.log(A); // output: [ 23, 21, 10, 7 ] */

// ⚙️ forEach -> The forEach() method calls a function for each element in an array.

// The forEach() method is not executed for empty elements.

let arr = [11,63,4,3,5];
arr.forEach((val) => {   // ye bas arrya par hi kam karata hai aur function bhi rahata hai
    console.log(val*2);
} );

/* ⚙️ map() -> map() creates a new array from calling a function for every array element.

const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)
let newarr = numbers.map(fnc)

function myFunction(num) {
  return num * 10;
}
console.log(newArr); // output: [ 650, 440, 120, 40 ]

//map() does not change the original array

console.log(numbers);  // output: [ 65, 44, 12, 4 ]

// agar hum function me kucch bhi na de toh undefinrd value by default aayega

function fnc(ans) {
    if(ans>10) return ans;
}
console.log(newarr);  //output: [ 65, 44, 12, undefined ]  */

/* ⚙️ filter() -> The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not change the original array
//Filters out elements based on a condition.

const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(result); //output: [ 32, 33, 40 ]

// hum true ya false se bhi naye array me value daal sakte hai

let Arr = [1,2,3,4,5,6,7];
let newArr = Arr.filter(function (val){
    if ( val>4 ) return true; // agar yahi false hota toh newArr blank hota
});
console.log(newArr); // output: [ 5, 6, 7 ]  */

/*⚙️ Reduce() -> Reduces the array to a single value.

let Arr = [1,2,3,4,5,6];
let newArr = Arr.reduce(function (accumulator, val) {
    return accumulator + val;
})
console.log(newArr); //output:21 */

/* ⚙️ find() -> The find() method returns the value of the first element that passes a test.

let ages = [3, 10, 18, 20, 10, 20];

let newage = ages.find(checkAge);
function checkAge(age) {
  return age > 18;
}
console.log(newage);  //output: 20  yaha par do bar 20 hai lekin jo first position par hoga vahi select hoga  */

/* ⚙️ some() -> The some() method checks if any array elements pass a test .

The some() method returns true (and stops) if the function returns true for one of the array elements.

The some() method returns false if the function returns false for all of the array elements. 

let Arr = [10, 30, 32, 90];

let any = Arr.some(function (val){
    return val > 85;
})
console.log(any); // output: true */

/* ⚙️ every() -> The every() method executes a function for each array element.

The every() method returns true if the function returns true for all elements.

The every() method returns false if the function returns false for one element. 

let Arr = [10, 30, 32, 90];

let any = Arr.every(function (val){
    return val > 85;
})
console.log(any); // output: false */

// ✂️ Destructuring & Spread

let Arr = [12,24,34,21];
let [first,second] = Arr; // yahi hai destructuring 
console.log(first,second); //output: 12 24

// spread operator in array
let age = [14, 15, 24, 32];
let newage = [...age];  // yaha par ek naya array ban gaya hai jo ki newage hai aur ye copy hai age ka

// if we make any changes in newage then they can not effect the age.














