//1.let and const

//bonus var
// var greeter = "hey hi";

// function  sayHello(){
//     var hello = "hello";
// }
// // console.log(hello);//error: hello is not defined //we cannot access the hello variable outside the function because it is function scoped
// var greeter = "say hello instead";
// greeter = "greeter updated";
// console.log(greeter);

//case 2 -> Hoisting with var
// console.log(greeter);
// var greeter = "hey hi";

//it is interpreted as:-
/* 
    var greeter;
    console.log(greeter);
    greeter = "say hello";
*/

//So var variables are hoisted to the top of their scope and initialized with a value of undefined.

//use of let
// let greeting = "say hi";
// let times = 4;

// if(times>3){
//     let hello = "say hello instead";
//     console.log(hello);//"say hello instead"
// }
// greeter();
// console.log(hello);//Referrence error hello is not defined

//just like var, let can be updated
// let greeting = "say Hi";
// // greeting = "say Hello instead";

// //unlike var, variable with let cannot be redeclared (*within same scope)
// let greeting = "say Hello instead";//SyntaxError: Identifier 'greeting' has already been declared
// console.log(greeting);

//However, if the same variable is defined in different scopes, there will be no error:because 
//both are treated as different variables as there are in the different scope.
// let greeting = "say Hi";
// if (true) {
//     let greeting = "say Hello instead";
//     console.log(greeting); // "say Hello instead"
// }
// console.log(greeting); // "say Hi"

//hoisting of let
// console.log(greeting);
// let greeting = "say hi";

//Const=> cannot be updated or redeclared
// const greeting = "say hi";
// greeting = "say hello";//TypeError: Assingment to const variable

// const greeting = "say Hi";
// const greeting = "say Hello instead";//Identifier 'greeting' has already been declared

//hoisting of const 
// console.log(greeting);
// const greeting = "say hi";

// 2.) Arrow Functions
const sum = (a,b) => a + b;
console.log(sum(1,2));

let user = {
    userName: 'Abhishek',
    printUserName: () => {
        console.log("Hello ", this.userName);
    },
    printUserName2(){
        console.log("Hello ", this.userName);
    }
}

user.printUserName();
user.printUserName2();

//3.) Multi line string
let greeting = `Hello world,
 greeting to all of you
`
// 4.) Default Parameters
let calculateArea = function(height = 100, weight = 50){
    return height * weight;
}
console.log(calculateArea());

//5. Template Literals
// let firstName = 'Abhishek';
// let lastName = 'Batra';
// let name = `My name is ${firstName} ${lastName}`;
// console.log(name);

//6.) Destructuring
//Array Destructuring
let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
console.log(a,b);
//Object destructuring
let person = { name: 'Abhishek', age: 30 };
let { name, age } = person;
console.log(name, ' is ', age);

//7.)  Enhanced Object Literals
function getMobile(manufacturer, model, year){
    return {
        manufacturer, 
        model, 
        year
    }
}
console.log(getMobile("Samsung", "galaxy", "2020"));

//8.) Promises

// in ES6, Promises are used for asynchronous execution.

// 9. Classes

// 10. Modules

// Previously, there was no native support for modules in JavaScript. ES6 introduced a new feature called modules, in which each module is represented by a separate ".js" file. We can use the "import" or "export" statement in a module to import or export variables, functions, classes or any other component from/to different files and modules.

export var num = 50; 
export function getName(fullName) {   
   //data
};

import {num, getName} from 'module';
console.log(num); // 50











