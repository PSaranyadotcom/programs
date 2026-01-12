function digit(name1){
    if(name1.length===0){
       return "emprty string"
    }
for(let i=0;i<name1.length;i++){
    
    if(name1[i]>=0&&name1[i]<=9){
       return true
    }
    else{
       return false
    }
}
}
console.log("result is",digit("cv"))