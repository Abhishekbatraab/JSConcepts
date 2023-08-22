//Map, Filter and Reduce

//1.)Map => it is used to create a new array from exisiting one by applying a function on the each element of the array.

const nums = [1,2,3,4];

const multiplyThree = nums.map((num,i,arr)=>{
    return num * 3;
})
console.log(multiplyThree);

//2.) Filter => This method takes each element in an array and applies a conditional statement against it, if the conditional statement get true it pushed the value in the output array,otherwise it will not push into it 

const moreThanTwo = nums.filter((num)=>{
    return num>2
})
console.log(moreThanTwo);

//3.) Reduce => The reduce method reduces an array of values down to just one value

const sum = nums.reduce((acc, curr, i , arr)=>{
    return acc + curr;
}, 0)

//polyfill for map

Array.prototype.myMap = function (cb){
    let temp = [];
    for(let i=0;i<this.length;i++){
        temp.push(cb(this[i],i,this))
    }
    return temp;
} 

const multiplyThreePolyfill = nums.myMap((num,i,arr)=>{
    return num * 3;
});

console.log(multiplyThreePolyfill);

Array.prototype.myFilter = function(cb){
    let temp=[];
    for(let i=0;i<this.length;i++){
        if(cb(this[i], i, this)){
            temp.push(this[i])
        }
    }
    return temp;
}

const moreThanTwoPolyfill = nums.myFilter((num)=>num>2);
console.log(moreThanTwoPolyfill);
//arr.reduce((acc,curr,i,arr)=>{},initialValue);

Array.prototype.myReduce = function(cb, initialValue){
    var accumulator = initialValue;
    for(let i=0;i<this.length;i++){
        accumulator = accumulator?cb(accumulator, this[i], i, this):this[i]
    }
    return accumulator
}
const sumPolyfill = nums.myReduce((acc, curr,i,arr)=> acc+curr);
console.log(`Sum using polyfill ${sumPolyfill}`);

//Map vs forEach

const arr = [2,5,3,4,7]; //output should be [4,7,5,6,9]

const mapResult = arr.map((ar)=>{
    return ar + 2;
})
console.log("Map result is ", mapResult);//[4,7,5,6,9]
const forEachResult = arr.forEach((ar,i)=> arr[i]=ar + 3);
console.log("Foreach Result is ", forEachResult);//undefine
console.log("original array is ", arr);
//First difference is foreach returns nothing means undefined
//Second difference is you cannot chain after forEach because it return undefined but map can do the chaining e.g. map().filter()

//Output based questions
let students = [
    {name: 'Piyush', rollNumber: 31, marks: 80},
    {name: 'Jenny', rollNumber: 15, marks: 69},
    {name: 'kaushal', rollNumber: 16, marks: 35},
    {name: 'Dilpreet', rollNumber: 7, marks: 55},
]
//Question 1 -> Return only name of students in Capital letters

let names = [];
//for loop way
for(let i=0;i<students.length;i++){
    names.push(students[i].name.toUpperCase());

}
console.log(names);
//using map
names = students.map(student=>student.name.toUpperCase())
console.log(names);

//Question 2 => Return only details of those who scored more than 60 marks

let moreThanSixty = students.filter(student=>student.marks>60);
console.log("Students with more than 60 marks ", moreThanSixty);
let studentNameMoreThanSixty = students.filter(student=>student.marks>60).map(student=>student.name);
console.log("Students Name with more than 60 marks ", studentNameMoreThanSixty);

//Question 3 - More than 60 marks and rollNumber greater than 15;

let output = students.filter((stu)=>stu.marks>60 && stu.rollNumber>15);
console.log(output);

//Question 4 - Sum of marks of all students
const sumOfMarks = students.reduce((sum,student)=>sum+student.marks,0);
console.log(sumOfMarks);




