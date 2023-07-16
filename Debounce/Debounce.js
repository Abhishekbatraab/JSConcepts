let input = document.querySelector('input');
// let defaultText = document.getElementById("default");
let debounceText = document.getElementById("debounce");
// // input.addEventListener("input", (event)=>{
// //     defaultText.textContent = event.target.value;
// // })

function myDebounce(cb,delay=1000){
    let timeout;
    return (...args)=>{    
        if(timeout)
        clearTimeout(timeout);
        timeout = setTimeout(()=>{
            cb(...args)
        }, delay)
    }
}

function getData(){
    console.log('i m in getData');
    let inputValue = input.value;
    debounceText.textContent = inputValue;
}

const handleChange = myDebounce(getData, 250);




