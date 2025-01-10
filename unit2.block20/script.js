/*

Observe the index.html page.

It has:

A heading <h1> with the id "mainHeading"
A paragraph <p> element with the id "description"
A <div> element with the id "colorBox" that will act as a "box."

Without making any changes to the html, write JavaScript that:

1) Changes the text content of the <h1> element from "Welcome to Color Changer!" to "DOM Manipulation is Fun!"
2) Changes the text content of the <p> element from "This is a simple DOM manipulation exercise." to "Look at how we changed the elements!"
3) Changes the background color of the <div> element to light blue and doubles its current size
4) Adds a new <p> element inside the <div> with the text: "This is a new paragraph inside the box!". */

//Your Code below
const colorDiv = document.querySelector("#colorBox");
const newParagraph = document.createElement("p") 
//1)
document.getElementById("mainHeading").innerText = "DOM Manupilation is Fun!";

//2)
document.getElementById("description").innerHTML = "<h1>changes</h1>";

colorDiv.style.backgroundColor = "#ADD8E6";
colorDiv.style.width *= 2;
colorDiv.style.height = "200px";


newParagraph.textContent = "This is a new paragraph inside the box!"
colorDiv.append(newParagraph)


// start with my root container OS
//create all the elements I need
// then I make my changes
// then I append them

// start with root container 
// create element
// make changes to element
// append element
// create next element

// no root 
// root  = document.body