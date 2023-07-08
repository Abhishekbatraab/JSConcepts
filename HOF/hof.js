
function x(){
    console.log("hello");
}

//x is callback function
//Here y is Higher order function 
function y(x){
    x();
}

//example
//Suppose we want to calculate the area of each element of an array
const radius = [3,1,2,4];

const calculateArea = function(radius){
    let output=[];
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI() * radius * radius);
    }
    return output;
}

calculateArea(radius);

const calculateCircumferrence = function(radius){
    let output=[];
    for(let i=0;i<radius.length;i++){
        output.push(2 * Math.PI() * radius[i]);
    }
    return output;
}

calculateCircumferrence(radius);

const calculateDiameter = function(radius){
    let output=[];
    for(let i=0;i<radius.length;i++){
        output.push(2 * radius[i]);
    }
    return output;
}

calculateDiameter(radius);

//the problem here is we are repeating the code
//so to overcome this
 const calculate = function(radius, logic){
    let output=[];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
 }

 const area = function(radius){
    return Math.PI * radius;
 }

 const circumference = function(radius){
    return 2 * Math.PI * radius;
 }

 const diameter = function(radius){
    return 2 * radius;
 }

 console.log(calculate(radius, area));
 console.log(calculate(radius, circumference));

 Array.prototype.calculate = function(logic){
    let output=[];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
 }
 radius.map(area);
 radius.calculate(area);
 
