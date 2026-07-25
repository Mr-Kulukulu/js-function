function findSmallest(arr) {
    let smallest = arr[0];

    for(const number of arr){
        if(number<smallest){
            smallest = number
        }
    }
    return smallest;
}

const numbers = [15, 8, 42, 3, 27, 19];
console.log(findSmallest(numbers))