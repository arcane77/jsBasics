function performArithmetic(a, b) {
    console.log("addition: " + (a + b));
    console.log("subtraction: " + (a - b));
    console.log("multiplication: " + (a * b));
    if (b !== 0) {
        console.log("division: " + (a / b));
    } else {
        console.log("cannot divide by zero");
    }
}

function performLogical(a, b) {
    console.log("AND: " + (a && b));
    console.log("OR: " + (a || b));
  
}

function performComparison(a, b) {
    console.log("strictEqual: " + (a === b));
    console.log("strictNotEqual: " + (a !== b));
    console.log("strictNotEqual: " + (a !== b));
    console.log("strictNotEqual: " + (a > b));
    console.log("strictNotEqual: " + (a >= b));
}

function performBitwise(a, b) {
    console.log("bitwise AND: " + (a & b));
  
}

performArithmetic(2, 1);
console.log("-----------");
performLogical(2, 1);
console.log("-----------");
performComparison(2, 1);
console.log("-----------");
performBitwise(2, 1);
