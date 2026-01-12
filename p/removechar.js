let h=""
function name1(a,n){
    for(let i=0;i<a.length;i++){
        if(a.charAt(i)!==n){
h=h+a[i]
        }
    }
    return h;
}
let v=name1("ammu","a")
console.log(v)