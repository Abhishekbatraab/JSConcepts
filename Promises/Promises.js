
//How to consume a promise

// const cart = ["Shoes", "pants", "Kurta"];

//both of the APIs are asynchronous
// createOrder(cart); //it will create an order and return some orderId 

// proceedToPayment(orderId);//this function is depend the 'createOrder' function 

//before promise we wrap the proceedToPayment function and pass to createOrder function as a callback
// createOrder(cart, function(orderId){
//     proceedToPayment(orderId);
// })
//Note: problem of inversion of control

//after the promise come into the picture
// const promise = createOrder(cart);

//{ data: 'undefined'}

//After a few seconds when this createOrder API get executed we will have the data with orderDetails like this

//{ data: orderDetails }

//we will attach a callback function with this promise object
// promise.then(function(orderId){
//     proceedToPayment(orderId);
// });

//Difference b/w Earlier vs After promise
/*
We are passing the callback function in the first case and we are attaching the callback function 
in case of promises.

In first case we don't know how many times the 'createOrder' function will call the callback function
but In the case of promise we ll have the control of program with us. This promise will give the 
gurantee that it will call this callback function after the promise object will get fulfilled with
the data.
Note: It will call only once 
*/

// const API = "https://jsonplaceholder.typicode.com/users/1";

// const user = fetch(API);//this is the promise object //at this time the promise state is in pending state,
//it get the data and fill it back.


//with this promise object we have promiseState and promiseResult  
//so there are 2 things 1-> State of a promise and 2-> Result.
// console.log(user);
//* now the javascript does not wait for the fetch function to execute, it goes down and logs the user object 
//and get the state pending.
//After the asynchronous operation is done it get fulfilled.


//to get the data we have to attach a callback with this data
// user.then(function(data){
//     console.log(data);
// })

//Three states are there i.) Pending ii) Rejected iii.) Fulfilled
//Note: the data we are getting in the response is immutable

//Problem of earlier code 
//Suppose we have some other APIs also 
/* showOrderSummary(paymentInfo) and updateWalletBalance ()
so in earlier we have to write code like this:-
createOrder(cart, function(orderId){
    proceedToPayment(orderId, function(){
        showOrderSummary(paymentInfo, function(){
            updateWalletBalance()
        })
    });
})
//It is called 'Callback hell'
//Limitation of this code is: It is hard to maintain
Also Called pyramid of doom 
So promise will help to overcome or handle this problem using promise chaining
*/

//With Promises
// createOrder(cart)
// .then(function(orderId){
//     return proceedToPayment(orderId)
// })
// .then(function(paymentInfo){
//     return showOrderSummary(paymentInfo);
// })
// .then(function(paymentInfo){
//     return updateWalletBalance(paymentInfo)
// })
//Here the code doesn't go horizontally but It is going in a meaningful channel and vertically.

// //More readable code is to convert these callback functions in arrow functions
// createOrder(cart)
// .then((orderId) => proceedToPayment(orderId))
// .then((paymentInfo) => showOrderSummary(paymentInfo))
// .then((paymentInfo) => updateWalletBalance(paymentInfo));

//How to create a promise
//consuming part
const cart = ["shoes", "Tshirts", "pants"];

// const promise = createOrder(cart);
// // console.log(promise);
// promise.then(function(orderId){
//     console.log(orderId);
//     // proceedToPayment(orderId);
// }).catch(function(err){
//     console.log(err.message);
// })

createOrder(cart)
.then(function(orderId){
    console.log(orderId);
    return orderId;
}).
then(function(){
    proceedToPayment(orderId)
}).catch(function(err){
    console.log(err.message);
})

function proceedToPayment(orderId){
    new Promise(function(resolve, reject){
        resolve("Payment Successful with ", orderId)
    });
}


//producing part
function createOrder(cart){
    const pr = new Promise(function(resolve, reject){
        //create order
        //validate cart
        //orderid
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid");
            reject(err);
        }
        //logic for create an order
        const orderId = "12345";
        if(orderId){
            // resolve(orderId);
            //we're defining the delay here to resolve the result
            setTimeout(function(){
                resolve(orderId);
            }, 5000)
        }
    }) 
    return pr;
}

function validateCart(){
    return true;
}

//Async/Await

// async function fetchData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(function(){
//             resolve("Data fetched");
//         }, 2000)
//     })
// }

// async function processData(){
//     const data = await fetchData();
//     console.log("Data is ", data);
    
// }
// processData();

//handling the error with async await
async function fetchData(){
    return new Promise((resolve, reject)=>{
        reject("Error: can't fetched the data");
    })
}

async function processData(){
    try{
        const data = await fetchData();
        console.log("Data is ", data);
    }catch(error){
        console.log(error);
    }
    
}
processData();



