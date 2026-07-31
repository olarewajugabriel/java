// SORT AN ARRAY OF NUMBERS IN DESCENDING ORDER
function sortNumbersDescending(arr) {
    return arr.sort((a, b) => b - a);
}
console.log(sortNumbersDescending(([5,2,9,1,5,6])));