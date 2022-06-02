class Student{

    constructor(name,age,marks){
        this.name = name;

        this.age =  age;

        this.marks = marks;
    }

    setPlacementAge(minPlacementAge){

        console.log(this);

        return (minmarks) =>{

            console.log('inside eligibleforCurrentCompany',this)

            if(this.marks>minmarks&& this.age>minPlacementAge){

                console.log(this.name   +   "is ready for placement");
            }
            else{

                console.log(this.name   +   "  is not ready for placement");
             
            }
            
        }


    }
}

const Lalit = new Student('lalit',25,75);

const Dilip =  new Student('dilip',13,35);

Lalit.setPlacementAge(18)(40);