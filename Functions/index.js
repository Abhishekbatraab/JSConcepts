//function definition
var number = 4;
function square(number){
    number = 2
    return number * number
}
console.log("Square of a number is ", square(number));
console.log("number is ",number);

//Pass parameter a reference
//if you pass an object to a function

const myCar = {
    make: "Honda",
    model: "Accord",
    year: "1998"
}
console.log(changeMake);
function changeMake(object) {
    object.make = "Toyota"
}

changeMake(myCar);
console.log(myCar);

//function expression
//-> anonymous function
//square function can defined as:-
const calcSquare = function(number){
    return number * number;
}
number = 4;
console.log("Square of a number is ", calcSquare(number));

//function expression as function with name
const factorial = function fact(n){
    return n<2?1:n * fact(n-1);
}
console.log("Factorial is ", factorial(3));

//Function expressions are convenient when passing a function as an argument to another function.
//usage of function expression
function map(f, a) {
    const result = new Array(a.length);
    console.log(result);
    for (let i = 0; i < a.length; i++) {
      result[i] = f(a[i]);
    }
    return result;
  }
  
  const cube = function (x) {
    return x * x * x;
  };
  
  const numbers = [0, 1, 2, 5, 10];
  console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]
//Functions must be in scope when they are called, but the function declaration can be hoisted (appear below the call in the code)
//   printName();
//   function printName(){
//     console.log("Abhishek");
//   }
// The above code runs without any error, despite the square() function being called before it's declared. This is because the JavaScript interpreter hoists the entire function declaration to the top of the current scope, so the code above is equivalent to:
// printName();
//   function printName(){
//     console.log("Abhishek");
//   }
//In case of function expression the it is not hoisted
// printName()// this will give an error
const printName = function(){
    console.log("Abhishek");
}

//Function Scope
const num1 = 20;
const num2 = 3;
const name = "Abhishek";

//this function is defined in the global scope
function multiply(){
    return num1 * num2
}
console.log(multiply());//60

function getScore(){
    const num1 = 2;
    const num2 = 3;

    function add(){
        return `${name} scored ${num1 + num2}`;
    }
    return add();
}
console.log(getScore());

function myConcat(separator){
    let result = "";
    for(let i=1;i<arguments.length;i++){
        result+= arguments[i] + separator 
    }
    return result;
}
console.log(myConcat(',', 'Red', 'Orange', "blue"));

//Default Parameters
function multiply(a, b) {
    b = typeof b !== "undefined" ? b : 1;
    return a * b;
  }
  
console.log(multiply(5)); // 5

//Rest parameters
function multiply(multiplier, ...theArgs){
    return theArgs.map(x=>multiplier*x);
}
console.log(multiply(2,1,2,3));//[2,4,6]

//Arrow functions 
//Arrow function expression does not have its own this.

// function Person(){
//     this.age = 0;

//     setInterval(function growUp(){
//         this.age++// here this will refer to the global object
//         if(this.age<10)
//         console.log(this.age);
//     }, 1000);
// }
// const p = new Person();
// console.log(p);

// In ECMAScript 3/5, this issue was fixed by assigning the value in this to a variable that could be closed over.

// function Person(){
//     const self = this;
//     self.age = 0;
//     setInterval(function growUp(){
//         self.age++;
//         if(self.age<10)
//         console.log(self.age);
//     }, 1000);
// }

// An arrow function does not have its own this; the this value of the enclosing execution context is used. Thus, in the following code, the this within the function that is passed to setInterval has the same value as this in the enclosing function

// function Person(){
//     this.age = 0;
//     setInterval(()=>{
//         this.age++;//this 'this' will refer to the same value as this in the enclosing function 
//         if(this.age<10)
//         console.log(this.age);
//     },1000)
// }
// const p = new Person();
console.log(numberValue);
var numberValue = 10;
// var numberValue = 10;

//Predefined functions
console.log(eval("2+2"));



