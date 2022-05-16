var form =  document.getElementById('addForm');

var itemList  =  document.getElementById('items');

// form submit event

form.addEventListener('submit', addItem);

// delete event

itemList.addEventListener('click', removeItem);

// add item

function addItem(e){

    e.preventDefault();

   // get input value

   var newItem =  document.getElementById('item').value;

   // creating new  element

   var li =  document.createElement('li')

   // add class
   li.className =  'list-group-item';

   // add text node with input
   
   li.appendChild(document.createTextNode(newItem));

   // create delete button

   var deletebtn =   document.createElement('button');

   // add classes to  delete  button 
     
   deletebtn.className =  'btn btn-danger btn-sm float-right delete';

   //append text node

   deletebtn.appendChild(document.createTextNode('x'));


   // append button to li

   li.appendChild(deletebtn);

   // append li to list

   itemList.appendChild(li)
    

}

// remove item
function removeItem(e){

    if(e.target.classList.contains('delete')){
        if(confirm('are you sure?')){
            var li =  e.target.parentElement;

            itemList.removeChild(li);
        }
    }
}
