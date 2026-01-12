let a=[1,1,2,3]
let n=[]
let count=0
for(let i=0;i<a.length;i++){
if(!n.includes(a[i])){
    n.push(a[i])
}
}
console.log(n)