//examining the document object
//console.dir(document);

//will give us collection of all the tag use in DOM
//console.log(document.all);

//will show all the forms
//console.log(document.forms);

//document.title='hellowwwwwww'
//console.log(document.links);

//Selector 
//1st  getElementById

let headerTitle=document.getElementById('header-title');


//headerTitle.textContent='Hello World';
console.log(headerTitle.textContent);
//headerTitle.innerText='Good BYE'
console.log(headerTitle.innerText);

/*
textContent VS innerText
*/


let header=document.getElementById('main-header');
header.style.borderBottom='solid 10px black'
