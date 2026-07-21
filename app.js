let number = 7;
if (number % 2 === 0) {
    console.log("number is even");
} else {
    console.log("number is odd");
}



//ASSIGNMENT 2. TYPES OF TRIANGLE

let side1 = 5;
let side2 = 5;
let side3 = 8;

if (side1 === side2 && side2 === side3) {
    console.log("Equilateral triangle");
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
    console.log("Isosceles triangle");
} else {
    console.log("Scalene triangle");
}
