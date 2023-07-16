//Case 1 - Small example of closure
// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x()
//here function y is closure which has access to its parent's lexical scope environment.

//Case 2 
// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }

// var z = x();
// console.log(z);
//Now there are 1000 lines of code and we want to call this function z and want to log the value of 'a' 
// z();
//after the 1000 lines of code the function y still hold the reference of 'a';
//the thing is wherever you execute this function z it remembers the value of a

//Case 3
/*now suppose I am changing the value of a inside the method a it will log the 100 bcz it remembers
the reference not only the value*/;

// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     a=100;
//     return y;
// }

// var z = x();
// console.log(z);

/*
    Case 4
    Now in this case the function will make the closure with its parent's function (i.e. x) and
    its grand parent function (i.e. z) means it will retains values of both 
*/
// function z(){
//     var b = 900;
//     function x(){
//         var a = 7;
//         function y(){
//             console.log(a,b);
//         }
//         y();
//     }
//     x()
// }
// z();

//>>>>>>>>>>Closures with setTimeout<<<<<<<<<<<
//Case 1
// function x(){
//     var i=1;
//     setTimeout(function(){
//         console.log(i);
//     },3000)//this setTimeout takes this function and store into a place and attaches a timer to it
//     console.log('Hello');
// }
// x();
//now when this timeout expires, it brings that again into call stack and runs it again and javascript does
//not wait for anything

//Case 2 
// function x(){
//     for(var i=0;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000)
//     }
//     console.log('Hello');
// }
// x();
/*Output will be:-
Hello
6
6
6
6
6
*/
//To fix this issue we need to run the code below (we have to use the 'let' keyword with variable)
//Now here it will make the new copy of 'i'
// function x(){
//     for(let i=0;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000)
//     }
//     console.log('Hello');
// }
// x();
//and if the developer wants to use still var then we have to define this setTimeout in closure 
// function x(){
//     for(let i=0;i<=5;i++){
//         function close(x){
//             setTimeout(function(){
//                 console.log(x);
//             },x*1000)
//         }
//         close(i);
//     }
//     console.log('Hello');
// }
// x();

//Output based questions for closure
var addSix = createBase(6);
addSix(10);//return 16
addSix(21);//return 27

function createBase(a){
    return function(b){
        console.log(a+b);
    }
}

//how to use closure to create a private counter
function counter(){
    var _counter = 0;

    function add(increment){
        _counter+=increment
    } 

    function retrieve(){
        return "Counter = " + _counter;
    }

    return {
        add,
        retrieve
    }
}

const c = counter();
c.add(5);
c.add(10);
console.log(c.retrieve());


//Module Pattern


const createSupplier = (function () {
    // Private
    const name = "General Motors";
    const field = "automobile";
    const getSupplierName = () => name;
    const getSupplierField = () => field;
  
  
    // Public
    return {
      name,
      field,
      getName: () => getSupplierName(),
      getField: () => getSupplierField(),
    };
  })();

//once polyfill
//if you're calling a function multiple time it should call only once

function once(func, context){
    let ran;

    return function(){
        if(func){
            ran = func.apply(context || this, arguments);
            func = null
        }
        return ran
    }
}
 const hello = once((a,b)=>console.log('Hello', a,b));
 hello(1,2);
 hello(1,2);
 hello(1,2);
 hello(1,2);
 hello(1,2);

 //Memoized function
function  myMemoized(fn, context){
    const res = {};
    return function(...args){
        let argsCache = JSON.stringify(...args);
        if(!res[argsCache]){
            res[argsCache] = fn.call(context || this, ...args)
        }
        return res[argsCache]
    }
}

function clumsyProduct(num1, num2){
    for(let i=0;i<1000000;i++){}
    return num1* num2;
}
const memoizedClumsyProduct = myMemoized(clumsyProduct)
console.time("First Call");
console.log(memoizedClumsyProduct(9467, 7649));;
console.timeEnd("First Call")

console.time("Second Call");
console.log(memoizedClumsyProduct(9467, 7649));;
console.timeEnd("Second Call")







