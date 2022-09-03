// What is DOM?
// When a web page is loaded, the browser creates a Document Object Model(DOM) of the page.

// The HTML DOM model is constructed as a tree of Objects:
// With the object model, JavaScript gets all the power it needs to create dynamic HTML:

// JavaScript can change all the HTML elements in the page
// JavaScript can change all the HTML attributes in the page
// JavaScript can change all the CSS styles in the page
// JavaScript can remove existing HTML elements and attributes
// JavaScript can add new HTML elements and attributes
// JavaScript can react to all existing HTML events in the page
// JavaScript can create new HTML events in the page

let list=document.getElementById('list');
console.log(list);

let cl=document.getElementsByClassName('container');
console.log(cl);

//For CSS
let sel=document.querySelector('.container');
console.log(sel);
let aq=document.querySelector('#list');
console.log(aq);

let s=document.querySelectorAll('#list>li');
console.log(s);