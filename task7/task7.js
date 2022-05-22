

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


// create a div

var newDiv  =  document.createElement('div');

// add class

newDiv.className = 'hello';

// add id

newDiv.id  =  'hello1';

/// add attribute

newDiv.setAttribute('title','Hello Div');

/// create text node

var newDivText  =  document.createTextNode(' Hello World');

/// add text to div

newDiv.appendChild(newDivText);

var container  =  document.querySelector('header .container');

var h1 =  document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv,h1);



parentNode = document.getElementById('itemsList');

console.log("parentNode",parentNode);
  
hellowworldlielement =  <li>Hello World</li>

    parentNode.appendFirstChild(hellowworldlielement);

    parentNode.innerhtml = '<li>item1</li><li>item2</li><li>item3</li><li>item4</li>';

    parentNode.innerhtml= '<li> Hello World </li>' + parentNode.innerhtml;
    
container.insertBefore(newDivText1,h2);