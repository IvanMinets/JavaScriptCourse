//функции 
function summ(a,b) {
    return a + b;
}
function diff(a,b) {
    return a - b;
}
function doSomething (func) {
    let x = 7000;
    let y = 10; 
    let result = func(x,y); 
    console.log(result);
}
doSomething (diff);