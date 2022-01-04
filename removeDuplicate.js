var names = ["John","Mary", "Alex", "Steve", "Mary", "John"]

function removeDuplicates(data) {
    return data.filter((value, index) => data.indexOf(value) === index);
}
console.log(removeDuplicates(names));