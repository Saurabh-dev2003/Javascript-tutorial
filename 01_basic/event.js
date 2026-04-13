// Events and Event handling //

/*🔥 What is Event in JavaScript?

👉 Event ka matlab hota hai:
“Browser me hone wali koi bhi activity”

Examples:

Button click karna

Mouse move karna

Keyboard se type karna

Page load hona

👉 Ye sab events hote hain

💡 Example
<button>Click Me</button>

👉 Jab user button click karega → ye ek event hai

⚡ What is Event Handling?

👉 Event Handling ka matlab hai:
“Jab event ho, tab kya action perform karna hai” 

let p = document.querySelector("p");

p.addEventListener("click", () => {
  p.style.color = "red"
}); 

/*👉 Yaha:

Click = Event

arrow function = Event Handling 

// 👉 removeEventListner //
// it's mean that "jo eventlistner hai use kaise remove karte hai"

let p = document.querySelector("p");

p.removeEventListener("click", () => {
  p.style.color = "red"
}); 

 event ko add karate time jo function hai vahi event remove karte time bhi rahega . */

//👉 'Input' eventlistener

/*let inp = document.querySelector("input");

inp.addEventListener("input", function(dets){  // yaha par dets ye hame input ke details deta hai
    if(dets.data !== null){   // ye condition isliye hai kyuki null data nahi chahiye 
        console.log(dets.data);
    }
});*/

//yaha par jo dets hai hame ouput me ek object dega jisame details hoge input ke jo hum dege

//👉 'Change' eventlistener --> change event tab chalta hai jab aapka koi input select ya textarea mein koi change hojaaye

/*let sel = document.querySelector("select");
let device = document.querySelector("#device");

sel.addEventListener("change", function(dets){
    device.textContent = `${dets.target.value} Device Selected`;
});
*/

/*let h1 = document.querySelector("h1");
window.addEventListener("keydown",function(dets){
    // h1.textContent = dets.key;
    // yaha par keyboard ke sabhi key window par show ho rahi hai bas space key ko chhod kar
    if(dets.key === " "){
        h1.textContent = "SPC"
    }
    else{
        h1.textContent = dets.key;
    }
}) 

let btn = document.querySelector("#btn");
let fileinp = document.querySelector("#fileinp");

btn.addEventListener("click", function (){
    fileinp.click();   // yaha par ye karane se hum click toh btn par hoga but open fileinp hoga
});

// click hone ke bad jo file open hua hai vahi show kare
// isaliye yaha par event me "change" ka use kiya gaya hai

fileinp.addEventListener("change", function(dets){  
    const file = dets.target.files[0];
    if(file){
        btn.textContent = file.name;
    }
})

*/

//👉 "mouseover and mouseout" events

/*let abcd = document.querySelector("#main");

abcd.addEventListener("mouseover", function(){
    abcd.style.backgroundColor = "yellow";
})

abcd.addEventListener("mouseout", function(){
    abcd.style.backgroundColor = "red";
})  */

/* 👉 "mousemove" event --> ye mouse ke movement ko batata hai in a x and y coordinate

let abcd = document.querySelector("#main");
window.addEventListener("mousemove", function(dets){
    abcd.style.top = dets.clientY + "px";
    abcd.style.left = dets.clientX + "px";
})
*/

/* 👉 Event Object ek special object hota hai jo automatically create hota hai jab koi event trigger hota hai (jaise click, keypress, etc.)

👉 Is object me event ki sari details hoti hain

EXMAPLE:-
<button id="btn">Click Me</button>

<script>
document.getElementById("btn").addEventListener("click", function(e) {
  console.log(e);
});
</script>

👉 Yaha e = event object

🎯 Event Object me kya hota hai?

Kuch important properties:

Property	        Meaning
e.target  ------->	kis element pe event hua
e.type	------->  event ka type (click, keydown)
e.clientX / e.clientY ------->	mouse position
e.key ------->	kaunsi key press hui

*/

/* Event Bubbling --> if the child element has no event handler, the event bubbles up and is handled by the parent element.”

<div id="parent">
  <button id="child">Click Me</button>
</div>

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

👉 Ab agar tum button (child) par click karte ho:

🎯 Output:
Parent clicked

👉 Kyun?

Child par koi event handler nahi hai

Event bubble hoke parent tak gaya

Parent ne usse handle kar liya */

/* jab bhi clikc ya phir event raise karte hai toh jo event flow hota hai vo two phase me chalta hai

phase-1: event top level element se down ki terf aayega
phase-2: event riased element se parent ki taraf jayega 

note: aur pahle phase-1 hota hai 

🌳 How Event Flow Works

When you click on an element, the event happens in 3 phases:

Capturing Phase (Event Capturing) ⬇️
Event starts from the root (document) and travels downwards to the target element.
Target Phase 🎯
Event reaches the actual clicked element.
Bubbling Phase ⬆️
Event bubbles back up from the target to the root.*/
