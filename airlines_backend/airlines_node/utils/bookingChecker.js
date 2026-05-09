module.exports = function bookingChecker(code) {
    const bookings = {
        "PK2024": "Confirmed",
        "YT1101": "Pending",
        "AB7890": "Cancelled"
    };

    console.log(bookings[code] || "No record found");
};
