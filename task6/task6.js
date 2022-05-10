// making item 2 using queryselector

var secondItem =document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color  =  'green';

// making odd item using queryselectorAll

var   odd  =  document.querySelectorAll('li:nth-child(odd)');

for(var i =0; i<odd.length;i++){
    odd[i].style.backgroundColor  =  'green';
}

// difference between queryselector and queryselectorall is : 
//querySelector() methodcan only be used to access a single element while querySelectorAll() method can be used to access all elements which match with a specified CSS selector. 