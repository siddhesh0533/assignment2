const Array1 = [23, 9, 5, 12, 90];
const Array2 = [45, 19, 85];
const Array3 = [2, 61, 5, 30, 88, 11];

// Merge the arrays
const mergedArray = Array1.concat(Array2, Array3);

// Find the largest element
const largestElement = Math.max(...mergedArray);

console.log("Merged Array:", mergedArray);
console.log("Largest Element:", largestElement);
