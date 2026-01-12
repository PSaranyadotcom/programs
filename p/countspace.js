let name1=" sar anya prak ash "
let name2=name1.toLocaleLowerCase().trim()
let count=0
for(let i=0;i<name2.length;i++){
    if(name2[i]===" "){
    count++
    }
}
console.log(count)