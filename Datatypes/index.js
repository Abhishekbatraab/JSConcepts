const person = {
    name: 'Abhishek'
}
person.name = "Rahul";
console.log("Person's name is ", person.name);
const value = Number("3.14").toExponential();
console.log("Value is ", value);
const a = null;
// a.toExponential();
console.log(Number.MAX_VALUE);
//There are two types of Object properties: 
//1.) Data property 2.) Accessor Property
//Data properties associate a key with a value. It can be described by the following attributes:
//value,writable, enumerable, configurable
//An accessor property has the following attributes: get, set, enumerable and configurable
//1.) Data Property
//one way
// const employee = {
//     name: 'Abhishek',
//     age: 29
// };
// employee.age = 28;
//second way
const employee = {
    _id: 1,
    name: 'Abhishek'
}
// Object.defineProperty(employee, 'age', { value: 29 });
// employee.age = 30;//Can't set the value directly
// console.log("Employee object is ", employee);//it will print the previous value i.e. 29
//if you want to set the property directly you have to define a another key like below:-
Object.defineProperty(employee, 'age', {
    value: 29,
    writable: true
});
employee.age = 30//It will change since we have the writable is true
console.log("Employee object is ", employee)
const descriptor = Object.getOwnPropertyDescriptor(employee, 'age');
console.log('Age property descriptor ', descriptor);
// Object.defineProperty(employee, 'age', {
//     get: function(){
//         return "Age is "+this.age;
//     },


//     set: function(age){
//         this.age = age
//     }
// })
// console.log(employee.age);

//2.) Accessor Property
//Associates a key with one of two accessor functions (get and set) to retrieve or store a value.
//Set Data Structure
Object.defineProperty(employee, 'id', {
    get: function(){
        return this._id;
    },

    set: function(id){
        this._id = id
    }
})
console.log(employee.id);
employee.id = 2;
console.log(employee.id);
let set3 = new Set([10, 20, 30, 30, 40, 40]);
console.log(set3);
function func() {
	const set1 = new Set();
	set1.add(7);
	set1.add("mansi");
	set1.add(8);
	console.log(set1.constructor);
}
func();
let myset = new Set();

// Adding new element to the set
myset.add("California");
myset.add("Seattle");
myset.add("Chicago");

// Creating a iterator object
// const setIterator = myset.values();

// // Getting values with iterator
// console.log(setIterator.next().value);
// console.log(setIterator.next().value);
// console.log(setIterator.next().value);
const setIterator = myset.keys();
console.log(setIterator);
//WeakMap
const m = new WeakMap();
// Adding elements in it
  
// Remember, only object can
// be a key in WeakMap
obj1 = {} 
m.set(obj1, "Object 1");
obj2 = {}
m.set(obj2, "Object 2");
console.log(m);

//JSON
let json = {
    "employees":[
        {"firstName":"John", "lastName":"Doe"},
        {"firstName":"Anna", "lastName":"Smith"},
        {"firstName":"Peter", "lastName":"Jones"}
    ]
}
//Stringify method is used to convert the JSON object to a string
let jsonString = JSON.stringify(json);
console.log(jsonString);
//Parse method is used to convert the JSON string to JSON object
console.log("JS Object from JSON is ", JSON.parse(jsonString));
let date = new Date('02/07/2023');
console.log(date);
let num = 1 + "23";
console.log(num);
let object = {};
let primitive = 10;
console.log(object.valueOf(), object.toString());
console.log(object == primitive);
console.log({} + []);
//Equality Comparisons
let num1 = 10;
let num2 = "10";
console.log(num1==num2);
console.log(num1===num2);
console.log(Object.is(num1, num2));

