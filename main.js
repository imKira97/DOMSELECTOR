var form=document.getElementById('addForm');//this is for form
var itemList=document.getElementById('items');//for list item

var filter=document.getElementById('filter');//for filter

//when we click submit it should add in listItem

form.addEventListener('submit',addItem);

//when we click X it should delete item
itemList.addEventListener('click',removeItem);

filter.addEventListener('keyup',filterItems);




//creating addItem function
function addItem(e){
    e.preventDefault();
 //   console.log('1');

 /*
 Steps 
 1) take value from input
 2) create new li element with same class of existing li
 3)add textNode in li of value

 4)add delete button 
 */

//get input value
 var newLiText=document.getElementById('item').value;
//create li element
var li=document.createElement('li');
//add class to li
li.className='list-group-item';
//addtext into li
li.appendChild(document.createTextNode(newLiText));

//creating delete button
var deleteBtn=document.createElement('button');
//remeber class name should be same as already existing deletebtn

deleteBtn.className='btn btn-danger btn-sm float-right delete';

//append txtNode in btn
deleteBtn.appendChild(document.createTextNode('X'));
//append this btn TO li
li.appendChild(deleteBtn);

itemList.appendChild(li);


}


//function to delete item
function removeItem(e){
    
    //console.log(1);
    /*
    here if we click on delete or item the whole is getting deleted  but we only want to delete when btn is click
    */

    if(e.target.classList.contains('delete')){
        //now confirm alert  to make sure to delete it or not

        if(confirm('Are you sure want to delete ?')){

            //li is parent of button
            var li=e.target.parentElement;
            //itemlist is UL and its child is li
            itemList.removeChild(li);
        }
    }

}

function filterItems(e){

    //we will convert every input to lowerCase for type safety

    /*
    
The target event property returns the element that triggered the event.

The target property gets the element on which the event originally occurred, 
opposed to the currentTarget property, which always refers to the element whose event listener triggered the event.
    */
    var text=e.target.value.toLowerCase();
    
    //now get all Li from itemList(ul)
    var items=itemList.getElementsByTagName('li');
    //this items will be in form of html collection which we have to convet in array
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) !=-1){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    });


}