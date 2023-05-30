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

const API = "https://jsonplaceholder.typicode.com/users/1";

const user = fetch(API);//this is the promise object 
//with this promise object we have promiseState and promiseResult  
//so there are 2 things 1-> State of a promise and 2-> Result.
console.log(user);
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
//Limitation of this code is: It is hard to maintain
Also Called pyramid of doom 
So promise will help to overcome or handle this problem using promise chaining
*/
//With Promises
createOrder(cart)
.then(function(orderId){
    return proceedToPayment(orderId)
})
.then(function(paymentInfo){
    return showOrderSummary(paymentInfo);
})
.then(function(paymentInfo){
    return updateWalletBalance(paymentInfo)
})
//Here the code doesn't go horizontally but It is going in a meaningful channel and vertically.

//More readable code is to convert these callback functions in arrow functions
createOrder(cart)
.then((orderId) => proceedToPayment(orderId))
.then((paymentInfo) => showOrderSummary(paymentInfo))
.then((paymentInfo) => updateWalletBalance(paymentInfo));




