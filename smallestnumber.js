function smallest(arr) {
    var smallestNumber = arr[0];
        for(var arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
        if(arr[arrayIndex] < smallestNumber) {
            smallestNumber = arr[arrayIndex];
        }
    }
    return smallestNumber;
}

let arr = [5, 10, 15, 4, 20, 2]
console.log(smallest(arr))

