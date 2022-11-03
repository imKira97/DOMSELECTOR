var form=document.getElementById('addForm');//this is for form
var itemList=document.getElementById('items');//for listitem

//when we click submit it should add in listItem

form.addEventListener('submit',addItem);

//when we click X it should delete item
itemList.addEventListener('click',removeItem);



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