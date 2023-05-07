//The code below will print the name and then print the value of x. 
//Case 1 
// var x = 7;

// function getName(){
//     console.log("Abhishek Batra");
// }

// getName();
// console.log(x);

//what if try to invoke the method getName() without initialized it what will happen
//Case 2
// getName();
// console.log(x);
// var x = 7;

// function getName(){
//     console.log("Abhishek Batra");
// }
/*
 in this case the getName method(line no 14) invokes the method directly 
 for x it will contain 'undefined'
 */

 //Case 3
//  var x = 7;

//  function getName(){
//      console.log("Abhishek Batra");
//  }
// console.log(getName);//this line will print the function 
//but if print the function before defining it.
// console.log(getName);//it will print the function itself
// var x = 7;

// function getName(){
//      console.log("Abhishek Batra");
// }
// var x = 7;

// function getName(){
//      console.log("Abhishek Batra");
// }
// getName();
// console.log(x);
// console.log(getName);
//in the phase1 of a program JS will allocate memory to each and every variable and function.it stores 
//the special keyword for these variables and place the variable in a placeholder i.e. undefined
/*
In case of function it will store the whole code or you can say copy of the function even before
we are trying to run this code. 
*/
//lets take these three line above the initization, put the debugger and try to run it
// getName();//it will print the name
// console.log(x);// it will print the undefined
// console.log(getName);//it will print the whole function 

// var x = 7;

// function getName(){
//      console.log("Abhishek Batra");
// }

//Case 4
// getName();
// console.log(x);
// console.log(getName);

// // var x = 7;//we will remove or comment this line

// function getName(){
//      console.log("Abhishek Batra");
// }

/* Now if we print the variable x then it will give an error 'Reference error: x is not defined'
 bcz x is not present */

 //Case 5
 getName();
 console.log(x);
 console.log(getName);

 var x = 7;

 var getName = () => {
    console.log("Abhishek Batra");
 }

 var getName2 = function(){
    console.log("Abhishek Batra");
 }
 /*
 Now in this case getName is treat like as x as a variable in the global execution so while at 
 the time of calling getName(placeholder as undefined) it will throw the error getName is not a function bcz we
 are invoking as a function
 here getName2 will treat like same
 */
 
 /*Whenever we call the getName function in Case1 a execution context is created  and it is pushed 
 into call stack and when we successfully call that function then the execution context will be deleted
 or removed from the callstack */