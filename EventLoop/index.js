//Blocking function
// function task(message){
//     let n =  10000000000;
//     while(n>0){
//         n--;
//     }
//     console.log(message);
// }
// console.log("Start script");
// task('Call an API');
// console.log('Done!');

//To prevent the blocking function blocks the other activities we should put it in a callback function
// console.log('Start script...');

// setTimeout(() => {
//     task('Download a file.');
// }, 1000);

// console.log('Done!');

// In this example, you’ll see the message 'Start script...' and 'Done!' immediately. And after that, you’ll see the message 'Download a file'.

//Another example
console.log('Hi!');

setTimeout(() => {
    console.log('Execute immediately.');
}, 0);

console.log('Bye!');

// In this example, the timeout is 0 second, so the message 'Execute immediately.' should appear before the message 'Bye!'. However, it doesn’t work like that.

// The JavaScript engine places the following function call on the callback queue and executes it when the call stack is empty. In other words, the JavaScript engine executes it after the console.log('Bye!').

