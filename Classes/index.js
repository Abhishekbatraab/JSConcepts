//creating a class
// class Person{
//     constructor(name){
//         this.name = name
//     }

// }

//creating an object
// const person1 = new Person('John');
// const person2 = new Person('Jack');
// console.log(person1.name);//John
// console.log(person2.name);//Jack

//Methods in JS Classes
// While using constructor function, you define methods as:

// constructor function
// function Person (name) {

//    // assigning  parameter values to the calling object
//     this.name = name;

//     // defining method
//     this.greet = function () {
//         return ('Hello' + ' ' + this.name);
//     }
// }

// class Person{
//     constructor(name){
//         this.name = name;
//     }

//     greet(){
//         console.log(`Hello ${this.name}`);
//     }
// }
// const person = new Person('Jack');
// //accessing the property
// console.log(person.name);
// //accessing method
// person.greet();

//Getter and setters
class Person{
    constructor(name){
        this.name = name
    }

    getPersonName(){
        return this.name
    }

    setPersonName(x){
        this.name = x
    }
}

const person1 = new Person('Jack');
console.log(person1.name);//Jack
person1.name = 'Sarah';
console.log(person1.name)//Sarah
console.log(typeof Person);
person1.setPersonName('Abhishek');
console.log(person1.getPersonName());
