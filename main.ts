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
 let john = new Person("John",34,"Dentist");
 john.register();