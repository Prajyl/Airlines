const bookingChecker = require('./utils/bookingChecker');
const flightPattern = require('./utils/flightPattern');
const seatVisualizer = require('./utils/seatVisualizer');

console.log("Booking Status:");
bookingChecker("PK2024");

console.log("\nFlight Pattern:");
flightPattern(5);

console.log("\nSeat Visualization:");
seatVisualizer(10);
