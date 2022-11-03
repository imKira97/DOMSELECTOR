//traversing the DOM

/*
Parent 
child 
Sibling

*/

//UL id name
let itemList=document.querySelector('#items');


// //Parent Node
// console.log(itemList.parentNode);//it will give us parent tag of this 

// //change parent color background
// itemList.parentNode.style.backgroundColor='lightgrey';

// console.log(itemList.parentNode.parentNode.parentNode);//parent of parent node of this div tag

// //Parent Element same as parentNode 
// console.log(itemList.parentElement);

// //change parent color background
// itemList.parentElement.style.backgroundColor='lightgrey';

// console.log(itemList.parentElement.parentElement.parentElement);


//childNodes
//console.log(itemList.childNodes);//will give all the child of this
/*
output of above code-
text-> represent a whitespace or line break 
so if we write all <li> in 1 line it will get deleted
NodeList(9) [text, li.list-group-item, text, li.list-group-item, text, li.list-group-item, text, li.list-group-item, text]
0
: 
text
1
: 
li.list-group-item
2
: 
text
3
: 
li.list-group-item
4
: 
text
5
: 
li.list-group-item
6
: 
text
7
: 
li.list-group-item
8
: 
text
length
: 
9
[[Prototype]]
: 
NodeList


*/

// /*
// Children- use this property here we dont get extra text of whitespace and new line
// we only get child tag of parents

// */
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='green';

// //firstChild- this also includes any whitespace and new line similar to childNode
// console.log(itemList.firstChild);//output text

//so use firstElementChild
//console.log(itemList.firstElementChild);//putput will be li

/*
we have lastChild and lastElementChild
*/

/*
now look at sibling
*/

//1st nextSibling 
//console.log(itemList.nextSibling);//output text 

// console.log(itemList.nextElementSibling);//output will be null since there is nothing after that
// let titleHeader2=document.querySelector('#tittle-2');
// console.log(titleHeader2.nextElementSibling);//h2  sibling is form

// //previousSibling
// console.log(itemList.previousSibling);
// //previousSiblingElement

// console.log(itemList.previousElementSibling);//h2 tag

//create Element

//create div
let newDiv=document.createElement('div');


//add class and id to it
newDiv.id='newDiv';
newDiv.className='hello';   

//set attribute 
newDiv.setAttribute('title','hello-world');

//create textnode
let newDivText=document.createTextNode('Hello World');
//add text to div
newDiv.appendChild(newDivText);

//till now we just create but not added it in DOM (to our page so lets add it)
//inside header tag class container
var container =document.querySelector('header .container'); 
var h1=document.querySelector('header h1')//h1 tag of header

//insertBefore(what we want to insert ,where to insert)
console.log(newDiv)
newDiv.style.fontSize='30px';
container.insertBefore(newDiv,h1);


let newDiv1=document.createElement('div');
let newDivText1=document.createTextNode('Hello World');
newDiv1.appendChild(newDivText1);

var container2 =document.querySelector('.list-group'); 
var h2=document.querySelector('.list-group-item');
container2.insertBefore(newDiv1,h2);



