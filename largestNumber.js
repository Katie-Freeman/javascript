function largestNumber(arr) {
    var largest = 0;
    for(var arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
        if(arr[arrayIndex] > largest) {
            largest = arr[arrayIndex];
        }
    }
    return largest;
}

let arr = [5, 10, 15, 4, 20, 2]
console.log(largestNumber(arr))