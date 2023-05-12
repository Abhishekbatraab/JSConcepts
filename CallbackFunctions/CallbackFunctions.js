//>>>>>>>>>Callback Functions<<<<<<<<<<<<<<
//in javascript setTimeout function can take as an example 
// setTimeout(function x(){
//     console.log("Timer");
// }, 5000); // JavaScript doesn't wait here for 5000 milliseconds

// function x(y){
//     console.log("x");
//     y();
// }

// x(function y(){
//     console.log("y");
// });

/*Javascript has only one call stack also known as main thread so we should not block this main thread 
we should try to always use async operations for things which take times,with using these web APIs
like setTimeout and these callback functions we achive the asynchronous functions */

//Event Listener

// document.getElementById('clickMe').addEventListener('click', function xyz(){
//     console.log("Button Clicked");
// });

//closures with click event
function attachEventListener(){
    let count = 0;
    document.getElementById('clickMe').addEventListener('click', function xyz(){
        console.log("Button Clicked");
        ++count
    });
}
attachEventListener();
//the callback function makes a closure with this attacheventlistener function and has its
//lexical scope


