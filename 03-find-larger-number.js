function findLarger(num1, num2) {
    if (num1 > num2) {
        return num1;

    }
    else if (num1<num2) {
        return num2;
    }   
    else{
        return "Equal"
    }
}
console.log(findLarger(10, 25)); // 25
console.log(findLarger(90, 40)); // 90
console.log(findLarger(7, 7));   // "Equal"