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
//let items=document.getElementsByClassName('list-group-item');
//it will give html collections
//console.log(items);
//console.log(items[1]);


/*
Here we cant change background for all the items directly 
for e.g 
items.style.backgroundColor='red'; //this will not work since it is an html collection
so for that we will have to iterate through it using for loop


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
*/

// //get Elemnts By Tag selector
// let li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[2]);
// for(let i=0;i<li.length;i++){
//     if(i%2!=0){
//       li[i].style.backgroundColor='green';
//       li[i].textContent='Odd List';
//       li[i].style.color='orange';
//       li[i].style.fontWeight='bold';   
//     }else{
//       li[i].style.backgroundColor='red';
//       li[i].style.color='White';
//       li[i].style.fontWeight='bold';
//     }
//   }

// //Query Selector- for 1 item
// // If there are multiply option with same it will select the 1st one

// let header=document.querySelector('#main-header');
// header.style.border='solid 4px black';

// //for input 
// let input=document.querySelector('input');
// input.value='Hello World';

// let submit=document.querySelector('input[type="submit"]');
// submit.value='Send';

// //for list item

// let listItem=document.querySelector('.list-group-item');
// listItem.style.color='red';
// //this will only do for 1st child

// //for last child we can use css property
// let lastListItem=document.querySelector('.list-group-item:last-child');
// lastListItem.style.color='grey';
// lastListItem.style.fontWeight='bold';

// //for between list item we can use property nth-child(n);
// let secondChild=document.querySelector('.list-group-item:nth-child(2)');
// secondChild.style.color='coral';

//query Selecot all

//it will return nodelist collection
let titles=document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent='Hello World';

//odd,even in argument are css property
var oddList=document.querySelectorAll('li:nth-child(odd)');
var evenList=document.querySelectorAll('li:nth-child(even)');
for(let i=0;i<oddList.length;i++){
    oddList[i].style.backgroundColor='green';
    evenList[i].style.backgroundColor='orange';
}
