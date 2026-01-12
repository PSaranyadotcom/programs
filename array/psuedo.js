arr=["a","b","@","#",2,6]
let sum=0
for(let i=0;i<arr.length;i++){
    if(arr[i]>=0&&arr[i]<=9){
sum=sum+arr[i]
    }
}
console.log(sum)
//or
arr1=["a","b","@","#",2,6,2]
let sum1=0
for(let i=0;i<arr1.length;i++){
    if(typeof arr1[i]==="number"){
sum1=sum1+arr1[i]
    }
}
console.log(sum1)