function isEven(number) {
    if(number % 2 === 0){
        return 'Even'
    }
    else{
        return 'Odd'
    }
}
console.log(isEven(8));   // "Even"
console.log(isEven(13));  // "Odd"
console.log(isEven(0));   // "Even"