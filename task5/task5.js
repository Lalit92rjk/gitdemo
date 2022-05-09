// editing and calling elemnts by classname
var items  =  document.getElementsByClassName('list-group-item');

console.log(items);

console.log(items[1]);

items[1].textContent = 'Hello';

items[1].style.fontWeight  =  'bold';

items[1].style.backgroundColor  =  'green'

// editing and calling elemnts by tagname

var li  =  document.getElementsByTagName('li');

console.log(li);

console.log(items[1]);

li[1].textContent = 'Hello';

li[1].style.fontWeight  =  'bold';

li[1].style.backgroundColor  =  'green'
