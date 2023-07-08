//Parent class
// class Person{
//     constructor(name){
//         this.name = name
//     }

//     greet() {
//         console.log(`Hello ${this.name}`);
//     }   
// }

// class Student extends Person {
//     constructor(name){
//         console.log("Creating super class");
//         //call the super class constructor and pass in the name parameter
//         super(name);
//     }

// }   

// const student1 = new Student('Jack');
// student1.greet();
// Here, super inside Student class refers to the Person class. Hence, when the constructor of Student class is called, it also calls the constructor of the Person class which assigns a name property to it.

// Overriding method or property
// parent class
class Person { 
    constructor(name) {
        this.name = name;
        this.occupation = "unemployed";
    }
    
    greet() {
        console.log(`Hello ${this.name}.`);
    }
 
}

// inheriting parent class
class Student extends Person {

    constructor(name) {
        
        // call the super class constructor and pass in the name parameter
        super(name);
        
        // Overriding an occupation property
        this.occupation = 'Student';
    }
    
    // overriding Person's method
    greet() {
        console.log(`Hello student ${this.name}.`);
        console.log('occupation: ' + this.occupation);
    }
}

let p = new Student('Jack');
p.greet();