let name1="arrayyyyyyya"
let max=0
result=""

for(let i=0;i<name1.length;i++){
    let count=0
    for(let j=0;j<name1.length;j++){
        if(name1[i]==name1[j]){
            count++
        }
    }

if(count>max){
    max=count
    result=name1[i]
}
}
console.log("highest occured char:",result) 