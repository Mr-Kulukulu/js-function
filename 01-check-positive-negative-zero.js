function checkNumber(number) {
    let result = ""
    if (number>0){
       return "Positive";
    }
    else if(number<0){
      return 'Negative'
    }
    else{
      return 'Zero'
    }
}
console.log(checkNumber(10));   // "Positive"
console.log(checkNumber(-8));   // "Negative"
console.log(checkNumber(0));    // "Zero"