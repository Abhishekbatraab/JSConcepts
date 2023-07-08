const paragraph1 = document.getElementById("para1");
console.log(paragraph1);
const contentParagraph1 = paragraph1.textContent;
console.log("Content of paragraph is ", contentParagraph1);
const h1Element = document.querySelector("h1");
console.log(h1Element);
const list = document.querySelector(".list");
console.log(list);
const listItems = document.querySelectorAll("ul > li");
console.log(listItems); 
listItems.forEach(item=>console.log(item));

//Required structure:-
/* 
    <ul>
        <li>It's free</li>
        <li>It's awesome</li>
    </ul>
*/
//Add a new element to the document tree
let unorderedList = document.createElement("ul");
document.body.appendChild(unorderedList);

let listItem1 = document.createElement("li");
let listItem2 = document.createElement("li");
listItem1.textContent = "It's free";
listItem2.textContent = "It's awesome";

unorderedList.appendChild(listItem1);
unorderedList.appendChild(listItem2);
const h1 = document.querySelector("h1");
h1.style.color = "blue";
const button = document.getElementById("btn");
button.addEventListener('click', function(){
    alert("Button clicked");
});
