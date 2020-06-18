class Person {
     firstName: string; 
     age: number; 
     jobTitle: string; 
    constructor(firstName: string , age: number , jobTitle: string) {
        this.firstName = firstName;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    register(){
        console.log("Hello there,my name is " + this.firstName + " and I am " + this.age + " years old,and i am a " + this.jobTitle + "." );
    }
 }

class Member extends Person
{
    salary: number;
    jobLocation: string;

    constructor(salary: number, jobLocation: string, firstName: string , age: number , jobTitle: string)
    {
        super(firstName, age, jobTitle);
        this.salary = salary;
        this.jobLocation = jobLocation;
    }

    register()
    {
        super.register();
    }

    extend()
    {
        console.log("And I get " + this.salary + " every month, and I work in " + this.jobLocation + ".")
    }
}

 let john = new Person("John",34,"Dentist");
 let additional = new Member(1300, "Vienna", "John",34,"Dentist");

 john.register();
 additional.extend();