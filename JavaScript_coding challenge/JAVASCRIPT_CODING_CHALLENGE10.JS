// CREATE A FUNCTION THAT FILTERS OUT NEGATIVE numbers
function filterNegativeNumbers(numbers) {
    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 0) {
            result.push(numbers[i]);
        }
    }

    return result;
}

// Example
console.log(filterNegativeNumbers([5, -2, 10, -8, 0, 7, -1]));