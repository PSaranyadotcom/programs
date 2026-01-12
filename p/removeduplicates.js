let name1="saranya"
let rev=""
for(let i=0;i<name1.length;i++){
    let ch=name1.charAt(i)
    if(rev.includes(ch)==-1){
        rev=rev+name1[i]
    }
}
console.log(rev[i])