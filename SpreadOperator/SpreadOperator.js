//1.)Copying an array
let array1 = ['h', 'e', 'y'];
let array2 = [...array1];
console.log(array1);

// The array2 has the elements of array1 copied into it. Any changes made to array1 will not be reflected in array2 and vice versa.
// If the simple assignment operator had been used then array2 would have been assigned a reference to array1 and the changes made in one array would reflect in the other array which in most cases is undesirable.

//2. Inserting the elements of one array into another
let baked_desserts = ['cake', 'cookie', 'donut'];
let desserts = ['icecream', 'flan','frozen yogurt', ...baked_desserts];
//printing desserts array
console.log(desserts);
let desserts2 = ['icecream', 'flan', ...baked_desserts, 'frozen yogurt'];
console.log(desserts2);

//3. Array to arguments
// instead of having to pass each element like numbers[0], numbers[1], and so on, the spread operator allows
// every elements to be passed in as individual elements

function multiply(number1, number2, number3){
    console.log(number1 * number2 * number3);
}

let numbers=[1,2,3];
multiply(...numbers);

// The Math object of Javascript does not take in a single array as an argument but with the spread operator, the array is expanded into a number or arguments with just one line of code.
let numbersArray = [1,2,300,-1,0,-100];
console.log('Minimum num ',Math.min(...numbersArray));