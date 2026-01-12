let name1="amu"
let s="mua"
let str1=name1.toLocaleLowerCase()
let str2=s.toLocaleLowerCase()
let a=str1.split('').sort().join('')
let b=str2.split('').sort().join('')
if(a===b){
    console.log("anagrma")
}