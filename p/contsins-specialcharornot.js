function digit(name1){
    if(name1.length===0){
       return "emprty string"
    }
for(let i=0;i<name1.length;i++){
    
    if(!(name1[i]>=0&&name1[i]<=9 || name1[i]>='a'&&name1[i]<='z' || name1[i]>='A'&&name1[i]<='Z')){
       return true
    }
    else{
       return false
    }
}
}
console.log("result is",digit("%"))