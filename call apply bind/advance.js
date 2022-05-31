var obj = {num:2};

var functionName =  function(a,b,c){

    return this.num +  a+b+c;
};

//calling the call function

console.log(functionName.call(obj, 1,2,3));

// calling the apply function

var arr =[1,2,3];

console.log(functionName.apply(obj, arr))

// callin the bind fucntion

var bound =  functionName.bind(obj);

console.log(bound(1,2,3));

// creating student obj with age 

var Student =  {age:20};

var studentAge = function(a){

    return this.age;
}

var bound = studentAge.bind(Student);

console.log(bound(100));
