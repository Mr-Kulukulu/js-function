
function doMath(a,b,c,d) {
    const num1 = a+b;
    const num2 = c+d;
    const multiply = num1*num2;
    const divided = multiply / 2;
    return divided;
};
const result = doMath(10,20,30,40);
console.log(result)

function onlyLog(num1,num2) {
    console.log(num1+num2)

}
 onlyLog(result,50)