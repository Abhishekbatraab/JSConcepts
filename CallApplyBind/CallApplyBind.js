//Call
var obj = { name: "Abhishek" };

// function sayHello(age){
//     return "Hello " + this.name + " is " + age;
// }

// console.log(sayHello());
// console.log(sayHello.call(obj, 29));
//Apply => It is same as call but the only difference is it takes the second argument as an array
function sayHello(age, profression){
    return "Hello " + this.name + " is " + age + " and " + profression;
}
// console.log(sayHello.apply(obj, [24, "Software Engineer"]));
//Bind => the bind function gives the copy of a function which we can call later
const bindFunc = sayHello.bind(obj);// it provides the resusable function
console.log(bindFunc(24, "Software Engineer"));
console.log(bindFunc(36, "Youtuber"));