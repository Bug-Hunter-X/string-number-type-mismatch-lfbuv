function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function isNumber(value: any): value is number {
    return typeof value === 'number';
}

function safeAdd(a: any, b: any): number {
    if(isNumber(a) && isNumber(b)) {
        return a + b;
    } else {
        console.error("Invalid input: Both values must be numbers.");
        return 0; // Or handle the error appropriately
    }
}

const result1 = safeAdd(5, 3); // Returns 8
const result2 = safeAdd(10, "4"); // Returns error message and 0
const result3 = safeAdd(5, 3);
const result4 = subtract(10, 4); // Returns 6

console.log(result1); // Output: 8
console.log(result2); // Output: Error message and 0
console.log(result3); // Output: 8
console.log(result4); // Output: 6