let arr = [
    [1,2],
    [3,4],
    [5,6,[7,8],9],
    [10,11,12]
]

let flattened = [].concat(...arr);
console.log(flattened);

//JS built-in method
flattened = arr.flat(2);//upto depth of 2
console.log(flattened);

//Question - How to make a custom flat function
function customFlat(arr, depth=1){
    let result = [];
    arr.forEach(ar => {
        if(Array.isArray(ar) && depth>0){
            result.push(...customFlat(ar, depth-1))
        }else result.push(ar);
    });
    return result
}
console.log(customFlat(arr, 2));

//Question - var let and const

// {
//     var a = "hello";
// }

// console.log(a);//hello

// {
//     let a = "hello"
// }

// console.log(a);//a is not defined

// {
//     const a = "hello"
// }

// console.log(a);//a is not defined

// var a = 5;
// var a = 10;

// //the following code will give the error: b has already been declared
// // let b = 5;
// // let b = 10;

// const c = 100;
// c = 200;// TypeError: Assignment to constant variable.

// const d;//cannot declare only we have to initialed also

// function a(){
//     for(var i=0;i<3;i++){
//         setTimeout(function log(){
//             console.log(i);// what is logged
//         }, i*1000);
//     }
// }
// a();//print 3 three times


// function a(){
//     for(let i=0;i<3;i++){
//         setTimeout(function log(){
//             console.log(i);// what is logged
//         }, i*1000);
//     }
// }
// a();// 0 1 2

//tricky use var and it should output 0 1 2
// function a(){
//     for(var i=0;i<3;i++){
//         function close(x){
//             setTimeout(function log(){
//                 console.log(x);// what is logged
//             }, i*1000);
//         }
//         close(i);
//     }
// }
// a();// 0 1 2

//Call, apply and bind
const employee = {
    name: "Abhishek",
    printName: function(age){
        console.log(this.name + " " + age);
    }
}
employee.printName(29);

const employee1 = {
    name: 'Rahul'
}
employee.printName.call(employee1, 28);
//apply method will take the array of arguments
employee.printName.apply(employee1, [28])

const object = employee.printName.bind(employee1);
object(30)

//Composition polyfill
function addFive(a){
    return a+5;
}

function subtractTwo(a){
    return a-2;
}

function multiplyFour(a){
    return a*4
}

const compose = (...functions) => {
    return (args)=>{
        return functions.reduceRight((arg, fn)=> fn(arg), args);
    }
}

const evaluate = compose(addFive, subtractTwo, multiplyFour);
console.log(evaluate(5));

//Promise.all

function showText(text, time){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(text);
        }, time)
    })
}
Promise.all([showText("Hello", 1000), Promise.resolve("hi")]).then(value=>console.log(value));
function myPromiseAll(promises){
   let result = [];
   return new Promise((resolve , reject)=>{
    promises.forEach((p, index)=>{
        p.then((res)=>{
            result.push(res);
            if(index === promises.length - 1){
                resolve(result);
            }
        }).catch(err=>reject(err))
    })
   })
}

myPromiseAll([showText("Hello", 1000), Promise.resolve("hi"), Promise.reject("bye")]).then(value=>console.log(value));
myPromiseAll([showText("Hello", 1000), Promise.resolve("hi")]).then(value=>console.log(value));









