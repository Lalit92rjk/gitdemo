class student{

    static count =0;

    constructor(name,age,ph_no,marks){

        this.name =  name;

        this.age =  age;

        this.ph_no = ph_no;

        this.marks =  marks;

        student.countStudent();
    }

    static countStudent(){
        return(student.count++)
    }

    eligible(){

        if(this.marks>=40){

            console.log(`${this.name} age${this.age} is eligible`);
        }
        else if(this.marks<40){
            console.log(`${this.name} age${this.age} is not eligible`);
        }
    }
}

const Riya = new student('Riya',18,1234,34);

const Piaa = new student('Pia',15,1234,35);
const Sia = new student('Sia',21,1234,44);
const Rooh = new student('Rooh',19,1234,41);
const Siya = new student('Siya',20,1234,54);

Riya.eligible();
Piaa.eligible();
Sia.eligible();
Rooh.eligible();
Siya.eligible();
