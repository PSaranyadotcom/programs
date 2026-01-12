function n(name1){
    let charcount=0
    let digitcount=0
    let specialcount=0
    if(name1.length===0){
       console.log("emprty string")
    }
for(let i=0;i<name1.length;i++){
    
    if(name1[i]>=0&&name1[i]<=9){
       digitcount++
    }
    if(name1[i]>'a'&&name1[i]<'z'|| name1>='A'&&name1<='Z'){
      charcount++
    }
     if(!(name1[i]>0&&name1[i]<9 || name1[i]>='a'&&name1[i]<='z' || name1[i]>='A'&&name1[i]<='Z')){
         specialcount++
}

}
console.log(digitcount)
console.log(charcount)
console.log(specialcount)
}
n("12h&")