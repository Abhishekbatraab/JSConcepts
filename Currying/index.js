//Example 1
function f(a){
    return function(b){
        return `${a} ${b}`
    }
}

console.log(f(5)(6));

//Example 2
//Calculate the sum(2)(6)(1)
//Calculate the sum by using currying function
function sum(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log(sum(2)(6)(1));

//example 3
//evaluate("sum")(4)(2)//it should output 6
//evaluate("multiply")(4)(2)//it should output 8
//evaluate("divide")(4)(2)//it should output 2
//evaluate("subtract")(4)(2)//it should output 2

function evaluate(type){
    return function(a){
        return function(b){
            if(type=='sum'){
                return a+b;
            }else if(type=='multiply'){
                return a*b;
            }else if(type=='divide'){
                return a/b;
            }else if(type=='subtract'){
                return a-b;
            }
        }
    }
}
console.log(evaluate("sum")(4)(2));
console.log(evaluate("multiply")(4)(2));
console.log(evaluate("divide")(4)(2));
console.log(evaluate("subtract")(4)(2));

//infinite currying
sum(5)(2)(4)(8)();

function sum(a){
    return function(b){
        if(b) return sum(a+b);
        else return a
    }
}
console.log(sum(5)(2)(4)(8)(11)());

//Application of currying in web dev
//we can use that in manipulating DOM
function updateElementText(id){
    return function(content){
        document.querySelector("#"+id).textContent = content;
    }
}
const updateHeader = updateElementText("heading");
updateHeader("ReactJS Developer");

//Curry implementation - curry();
//f(a,b,c) converts normal function to  f(a)(b)(c) curried function
function curry(func){
    return function curriedFunc(...args){
        if(args.length>=func.length){
            return func(...args);
        }else{
            return function(...next){
                return curriedFunc(...args, ...next)
            };
        }
    }
}

const sum = (a,b,c,d) => a+b+c+d;
const totalSum = curry(sum);
console.log(totalSum(1)(6)(5)(6));

