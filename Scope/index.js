//function scope
// A function creates a scope, so that (for example) a variable defined exclusively within the function cannot be accessed from outside the function or within other functions. For instance, the following is invalid:
// function exampleFunction(){
//     const x = "declared inside function";
//     console.log("Inside Function");
//     console.log(x);
// }
// console.log(x);//Reference error: x is not defined
// to make the valid we have to declare this variable outside the function and 
//making it global.
// const x = "declared inside function";
// exampleFunction();
// function exampleFunction(){
//     console.log("Inside Function");
//     console.log(x);
// }
// console.log("Outside Function");
// console.log(x);
// {
//     let a = 1;
// }
// console.log(a);
// {
//     const a = 1;
// }
// console.log(a);
// {
//     var a = 1;
// }
// console.log(a);
// function greet() {
//     let a = "hello"
// }
// greet();
// console.log(a); 

//let is blocked scope

// program showing block-scoped concept
// global variable
// let a = 'Hello';

// function greet() {

//     // local variable
//     let b = 'World';

//     console.log(a + ' ' + b);

//     if (b == 'World') {

//         // block-scoped variable
//         let c = 'hello';

//         console.log(a + ' ' + b + ' ' + c);
//     }

//     // variable c cannot be accessed here
//     console.log(a + ' ' + b + ' ' + c);
// }

// greet();


