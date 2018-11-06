//step 1
function sum() {
    
    let a = 0;
    for (let b=0; b < arguments.length; b++) {
        a += arguments[b];
        
    }
    return a;
    
}
let c = 5;//5
let d = (c*2);//10
let e = (d + 7);//17
console.log('The value of c is :'+ c);
console.log('The value of d is :' + d);
console.log('The value of e is :' + e);
console.log('sum of c and d and e is :'+ sum (c,d,e)); //example