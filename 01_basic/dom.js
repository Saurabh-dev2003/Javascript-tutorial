/* Document Object Model (DOM):-

 ---> DOM is a programming interface that allow javascript to access & manipulte HTML & CSS.

Basically javascript DOM ke through website ko control karti hai. so, for doing dom manipulation we can know about the different- different thing like
-> how to select html element
-> text changes
-> how to change css property
-> event listeners 

** Selecting Element **

In dom manipulation, we can select the html element by the different-different way.*/

/* # [getElementById] -> select the element by there id name

let abcd = document.getElementById("abcd");
console.dir(abcd);
console.log(abcd); 

# [getElementsByClassName] -> select the element by there class name 

let abcd = document.getElementsByClassName("abcd");
console.log(abcd); // console par ye hume array ki tarah dikhega kyuki har element ke same class ho sakate hai

# [querySelector] -> by using this we can select only one element which we want to change. 

let abcd = document.querySelector("h1");
console.log(abcd); // yaha par ye body ke sabase pahele vale "h1" element ko hi select karega

# [querySelectorAll] -> by using this we can select all element of the html 

let abcd = document.querySelectorAll("h1");
console.log(abcd);  // yaha par sare element select hoge

## Now let's see hoe change the selected element ->

# [innerText] and [textContent] -> by using this we can change the content of the element

let h1 = document.querySelector("h1");
h1.textContent = "hello saurabh";
console.log(h1);

# [innerHTML] -> when you want to render HTML tag in side the element 

let h1 = document.querySelector("h1");
h1.innerHTML = "<i>hello saurabh</>";
console.log(h1); 

# Attribute manipulation -> 

# [setAttribute] -> we change or set the value of any attributes 

let a = document.querySelector("a");
a.setAttribute("href", "https://www.google.com" );
console.log(a);

# [getAttribute] -> we get the value of any attributes 

let a = document.querySelector("a");
console.log(a.getAttribute("href"));

# [removeAttribute] -> we remove the  attributes 

let a = document.querySelector("a");
a.removeAttribute("href");

# Dynamic DOM manipulation ->  createElement/ append()/ prepend() 

let h2 = document.createElement("h2");  // yaha par ek blank h2 element create hoga
h2.textContent = "hey hello";
document.querySelector("body").append(h2); // yaha par h2 me content ko add kiya hai jo ki body ke last me add hota hai

// agar body ke start me add karana hai toh "prepend" ka use karte hai
//agar body se remove karana hai toh "remove" ka use karte hai

# Style Update -> .style or classlist [add, remove,toggle] 

let h1 = document.querySelector("h1");
h1.style.color = "red"; // h1 element ke content ka color red ho jayega
console.dir(h1);

// Now using some standard methods for the styling  

let h1 = document.querySelector("h1");
h1.classList.add("abcd");

// isi trah se hum remove ka use karke style ko hata sakte hai 
// toggle ka use tab hota hai agar class hai toh hata do sur agar nahi hai toh laga do
















