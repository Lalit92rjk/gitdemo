console.dir(document);

console.log(document.links);

console.log(document.getElementById("header-title"));

var headertitle =  document.getElementById("header-title");

console.log(headertitle)

var header  =  document.getElementById("main header");

console.log(header);

headertitle.textContent =  hello;

headertitle.innerText =  "goodbye";

console.log(headertitle.innerText);

console.log(headertitle.textContent);

headertitle.innerHTML  =  '<h3> hello</h3>'
'<h3> hello</h3>'

headertitle.style.borderBottom =  "solid 3px #000";

var items  =  document.getElementsByClassName('list-group-item');

console.log(items);

console.log(items[1]);

items[1].textContent = 'Hello';

items[1].style.fontWeight  =  'bold';

items[1].style.backgroundColor  =  'green'

