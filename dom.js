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
/*
let headerTitle=document.getElementById('header-title');


//headerTitle.textContent='Hello World';
console.log(headerTitle.textContent);
headerTitle.innerText='Good BYE'
console.log(headerTitle.innerText);


textContent VS innerText



let header=document.getElementById('main-header');
header.style.borderBottom='solid 10px black'
*/


//getElementByClassName
//selecting all the items list from 1to 4
let items=document.getElementsByClassName('list-group-item');
//it will give html collections
console.log(items);
console.log(items[1]);


/*
Here we cant change background for all the items directly 
for e.g 
items.style.backgroundColor='red'; //this will not work since it is an html collection
so for that we will have to iterate through it using for loop
*/

for(let i=0;i<items.length;i++){
  if(i%2!=0){
    items[i].style.backgroundColor='green';
    items[i].textContent='Odd List';
    items[i].style.color='orange';
    items[i].style.fontWeight='bold';   
  }else{
    items[i].style.backgroundColor='red';
    items[i].style.color='White';
    items[i].style.fontWeight='bold';
  }
}
    
