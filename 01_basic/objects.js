/*🧠 What is an Object?

Objects in JavaScript are like real-world records – a collection of key-value pairs.

They help us store structured data (like a student, a product, or a user profile).*/

let student = {
name: "Ravi",
age: 21,
isEnrolled: true
};

// here student is called object

// let see how to access the data from the object 

console.log(student["name"]); // Ravi

console.log(student.age); // 21

let{name} = student;  // it's called object destructuring
console.log(name);  // Ravi


/*📍 Dot vs Bracket Notation ####

-> Use dot notation for fixed key names
-> Use bracket notation for dynamic or multi-word keys

student["full name"] = "Ravi Kumar"; // ✅
student.course = "JavaScript"; // ✅  */

/*📦️ Nesting and Deep Access ####

Objects can have nested objects (objects inside objects)*/

let user = {   
name: "Amit",
address: {            // yaha par object ke under ek aur object hai it;s called nesting
city: "Delhi",
pincode: 110001
}
};
console.log(user.address.city); // Delhi  --->  ye hai deep access

// ✂️ Object Destructuring  #####

// -> Taking values from an object and storing them into variables in a short and clean way
let {pincode} = user.address;  //
console.log(pincode);  // 110001
let {
address: { city }
} = user;
console.log(city); // output: Delhi

// 🔁 Looping Through Objects ####

// ->  for-in loop   

let obj = {
name: "Ravi",
age: 21,
isEnrolled: true
};

for(let key in obj){
    console.log(key, obj[key]); // name Ravi  age 21  isEnrolled true
}    

// 🔁 Object.keys() ####

// -> It gives an array of all keys of an object.

const users = {
  name: "Saurabh",
  age: 22,
  role: "Frontend Developer"
};

const keys = Object.keys(users);
console.log(keys);  // ["name", "age", "role"]

Object.keys(users).forEach(key => {
  console.log(key, users[key]);  // name Saurabh  age 22  role Frontend Developer
});

// 🔁 Object.entries() ####

// -> It gives an array of key–value pairs.

const entries = Object.entries(users);
console.log(entries);
/* [
  [ 'name', 'Saurabh' ],
  [ 'age', 22 ],
  [ 'role', 'Frontend Developer' ]
]*/

// 🔹 Object.values()

// -> It returns an array of all values of an object.

const values = Object.values(users);
console.log(values);  // ["Saurabh", 22, "Frontend Developer"]

// 📦 Copying Objects

let obj1 = {
    name: "Harsh",
    age:23,
    email:"test@gmail.com"
}

let obj2 = {...obj1};
console.log(obj2); // { name: 'Harsh', age: 23, email: 'test@gmail.com' }

// there are unother way to copy any object

let obj3 = Object.assign({} , obj1);
console.log(obj3);   // { name: 'Harsh', age: 23, email: 'test@gmail.com' }

// 🔹 Deep Clone (nested levels) ###

/* Making a completely new copy of an object including all nested objects and arrays.

Changes in the copy do NOT affect the original. */

const object = {
  name: "Saurabh",
  address: {
    city: "Delhi"
  }
};

const copy = { ...object };

copy.address.city = "Mumbai";

console.log(object.address.city); // ❌ Mumbai (changed!)  
 
// Because address was still referencing the same object.

const copy1 = JSON.parse(JSON.stringify(object)); 
copy1.address.city = "Mumbai";
console.log(copy1); // { name: 'Saurabh', address: { city: 'Mumbai' } }

console.log(object); // { name: 'Saurabh', address: { city: 'Delhi' } }

// 🧠 Computed Properties ####

// You can use variables as keys:

let key = "marks";

let report = {
    name: "saurabh",
    age:22,
    email: "test@gmail.com",
    [key]: 89,  // yaha par variable object ke key insert kiya hai
};
console.log(report); // { name: 'saurabh', age: 22, email: 'test@gmail.com', marks: 89 }



                                 





