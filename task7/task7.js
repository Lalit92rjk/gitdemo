 parentelement

var itemList = document.querySelector('#items');

console.log(itemList.parentElement);

itemList.parentElement.style.backgroundColor = '#f4f4f4';

console.log(itemList.parentElement.parentElement.parentElement);

// childnode

console.log(itemList.childNodes);

// children 

console.log(itemList.children);

console.log(itemList.children[1]);

itemList.children[1].style.backgroundColor = 'red';


// firstelementchild

console.log(itemList.firstElementChild);

// next sibling

console.log(itemList.nextSibling);

//nextElementsSibling;

console.log(itemList.nextElementSibling);

//  previous sibling

console.log(itemList.previousSibling);

//  previous Element sibling
console.log(itemList.previousSibling);



var newDiv  =  document.createElement('div');

newDiv.className = 'hello';

newDiv.id  =  'hello1';

newDiv.setAttribute('title','Hello Div');

var newDivText  =  document.createTextNode(' Hello World');

newDiv.appendChild(newDivText);

var container  =  document.querySelector('header .container');

var h1 =  document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv,h1);



parentnode = doc.getelementbyId('items');
  
var newDivText1  =  document.createTextNode(' Hello World');

    parentNode.appendFirstChild(newDivText1 );

    parentNode.innerhtml = '<li>item1</li><li>item2</li><li>item3</li><li>item4</li>';

    parentNode.innerhtml= '<li> Hello World </li>' + parentNode.innerhtml;
    
container.insertBefore(newDivText1,h2);