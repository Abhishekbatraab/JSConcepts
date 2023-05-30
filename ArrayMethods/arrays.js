//Map 

const users = [
  {firstName:"Terry",lastName:"Medhurst", age: 26},
  {firstName:"Shubham",lastName:"Tiwari", age: 75},
  {firstName:"Akshay",lastName:"Sharma", age: 50},
  {firstName:"Nishant",lastName:"Gupta", age: 26}
]

//mapping list of users
//["akshay saini", "donald trump"...] 

const usersList = users.map(user=> user.firstName + " " + user.lastName);
console.log("Users list is ", usersList);

// Normal Reduce
let arr = [5,1,3,2,6]

function findMax(){
  let max=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
      max=arr[i];
    }
  }
  return max
}

const output = arr.reduce(function(max, curr){
  if(curr>max){
    max=curr;
  }
  return max
},0)

console.log('Reduce output is, ', output);

//Tricky reduce suppose we want to get the no of users to who has same age 
//Count

//{26: 2, 75: 1, 50: 1}

const usersCount = users.reduce(function(acc, curr){
  console.log("acc is ", acc);
  if(acc[curr.age]){
    acc[curr.age] = ++acc[curr.age];
  }else{
    acc[curr.age] = 1;
  }
  return acc;
},{})

console.log("Users count ", usersCount);

//Use case -> we need to find out the users (first name) whose age is less than 30

const usersWithLessAge = users.filter(user=>user.age<30).map(x=>x.firstName);
console.log("Users with under 30 age", usersWithLessAge);

const usersUnderThirty = users.reduce((acc,curr)=>{
  if(curr.age<30){
    acc.push(curr.firstName);
  }
  return acc
},[]);
console.log('Users with less than thirty ', usersUnderThirty);

