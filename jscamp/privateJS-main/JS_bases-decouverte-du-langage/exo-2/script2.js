// Get the current date and time
var now = new Date();

// Get the current day of the week (0 for Sunday, 1 for Monday, etc.)
var dayOfWeek = now.getDay();

// Get the current hour
var hour = now.getHours();

// Function to determine the message based on the day and time
function getWeekendMessage(day, hour) {
    if (day === 5) { // Friday
        if (hour >= 18) {
            return "It's almost the weekend!";
        } else {
            return "Soon, but not yet.";
        }
    } else if (day === 6) { // Saturday
        return "It's the weekend!";
    } else if (day === 0) { // Sunday
        return "Enjoy the rest of the weekend!";
    } else {
        return "Not yet the weekend.";
    }
}

// Display the message in the console
console.log(getWeekendMessage(dayOfWeek, hour));