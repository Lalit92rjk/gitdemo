let multiply =  function(x,y){
    console.log(x*y);
}

let multiplyByTwo = multiply.bind(this,2);

multiplyByTwo(3);

let multiplyByThree =  multiply.bind(this,3);

multiplyByThree(5);

let multiple =  function(x){
     return function(y){

        console.log(x * y);
    }
}

let multipleByTwo   =  multiple(2);

multiplyByTwo(3);

let multipleByThree = multiple(3);

multiplyByThree(4);