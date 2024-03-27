// Helper function to calculate the area of a rectangle
function calculateRectangleArea(width, height) {
    return width * height;
}

// Helper function to calculate the area of a circle
function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}

// Helper function to check if a number is even
function isEven(number) {
    return number % 2 === 0;
}

// Example usage of helper functions
const rectangleArea = calculateRectangleArea(5, 8);
console.log('Area of rectangle:', rectangleArea);

const circleArea = calculateCircleArea(3);
console.log('Area of circle:', circleArea);

const number = 7;
if (isEven(number)) {
    console.log(number, 'is even');
} else {
    console.log(number, 'is odd');
}
