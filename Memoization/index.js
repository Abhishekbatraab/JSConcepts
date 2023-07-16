let sum=0;

//Normal way
const calc = (n) => {
    for(let i=0;i<=n;i++){
        sum+=i
    }
    return sum
}
// console.time("timelog");
// console.log(`Sum is ${calc(5)}`);;
// console.timeEnd("timelog");

//memoization way
const memoize = (func) => {
    let cache = {};
    return function(...args){
        let n = args[0];
        if(n in cache){
            console.log('Cache', cache);
            return cache[n];
        }else{
            console.log('Calculating first time');
            let result = func(n);
            cache[n]=result;
            return result
        }
    }
}

const output = memoize(calc);

console.time('firstTime');
console.log(output(5));
console.timeEnd('firstTime');

console.time('secondTime');
console.log(output(5));
console.timeEnd('secondTime');
