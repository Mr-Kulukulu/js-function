function findLargest(num1, num2, num3) {
    if (num1 === num2 && num2 === num3) {
        return "All Equal";
    }
    else if (num1 >= num2 && num1 >= num3) {
        return num1;
    }
    else if (num2 >= num1 && num2 >= num3) {
        return num2;
    }
    else {
        return num3;
    }
}



console.log(findLargest(10, 25, 15)); // 25
console.log(findLargest(90, 40, 60)); // 90
console.log(findLargest(5, 12, 30));  // 30
console.log(findLargest(7, 7, 7));    // "All Equal"