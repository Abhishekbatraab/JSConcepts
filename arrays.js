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
  if(max>curr){
    acc=curr;
  }
  return max
},0)
