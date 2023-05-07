// >>>>>>>>>Call Method<<<<<<<<<<<<
//1.) First Level

// let name = {
//     firstName: 'Abhishek',
//     lastName: 'Batra',
//     printFullName: function(){
//         console.log(this.firstName + " " + this.lastName);
//     }
// }

// name.printFullName();

let name2 = {
    firstName: 'Rahul',
    lastName: 'Sharma'
}
//instead of doing the method above, we will use the JavaScripts Call method here 

//function borrowing 
// name.printFullName.call(name2);

//2.) Second Level
//if we want to reuse the method, we should define the printName function outside the object
let name = {
    firstName: 'Abhishek',
    lastName: 'Batra'
}
//and in this method we can pass a few other arguments also
let printFullName = function(hometown, state){ 
    console.log(this.firstName + " " + this.lastName + " from " + hometown + " , " + state);
}

printFullName.call(name, "Sonipat", "Haryana");
printFullName.call(name2, "Jhajjhar", "Haryana");

// >>>>>>>>>>>>>>>>Apply Method<<<<<<<<<<<<<<
//when we want to pass the list of arguments then we use 'Apply' method

printFullName.apply(name, ['Sonipat', 'Haryana']); 
//Call vs Apply
// ->In call method we have to pass the arguments individually
// ->in apply method we can pass the arguments as an array list

/* >>>>>>>>>>>Bind Method<<<<<<<<< 
The bind method exactly looks like the Call method instead of calling this method directly 'bind'
method binds the printFullName method with the object and returns the copy of that method 
*/
let printMyName = printFullName.bind(name2, "Jhajjhar", "Haryana");
console.log(printMyName);//it will return a copy of this method which can be invoke later
printMyName();
