arr=[0,1,2,3,4,5,6,7,7,8,9,10,...]
let found=0;
for(let i=0;i<arr.length;i++){
  if (arr[i]==arr[i+1])
  {
    found=arr[i];
  }
}
console.log("the repeated number is",found);
