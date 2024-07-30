export function transportFee(shift) {
    switch (shift) {
        case 'morning':
            return 'R20';
        case 'afternoon':
            return 'R10';
        case 'nightshift':
            return 'free';
        default:
            return 'Invalid shift'; // Handle invalid input
    }
}

// Example usage:
console.log(transportFee('morning')); // Output: R20
console.log(transportFee('afternoon')); // Output: R10
console.log(transportFee('nightshift')); // Output: free
console.log(transportFee('evening')); // Output: Invalid shift
