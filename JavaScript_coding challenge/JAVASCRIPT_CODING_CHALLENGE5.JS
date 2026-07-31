// CREATE A FUNCTION THAT REVERSES AN ARRAY
function reverseArray(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}
//EXAMPLE
console.log(reverseArray([1,2,3,4,5]));