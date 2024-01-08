console.log('exo-2');

// Variable for testing mode
const isTesting = true; // Set to true for testing, false for normal operation

let dayOfWeek;
let endOfWeekdayHour;

if (isTesting) {
    // In testing mode - prompt user to enter a fictitious day and time
    const inputDay = prompt('Enter the day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday):');
    const inputHour = prompt('Enter the hour of the day (0-23):');

    // Convert input to numbers and assign to variables
    dayOfWeek = parseInt(inputDay, 10);
    endOfWeekdayHour = parseInt(inputHour, 10);
} else {
    // In normal mode - use current day and time
    const myDate = new Date();
    console.log(myDate); // Console will show the local time
    dayOfWeek = myDate.getDay();
    endOfWeekdayHour = myDate.getHours();
}

// Messages for weekdays and weekends
let weekdayMsg = `It's the weekday! Go work!`;  
let weekendMsg = `It's the weekend! Don't think of work!`; 

console.log(`Day of Week: ${dayOfWeek}, Hour: ${endOfWeekdayHour}`);

// Determine and display the appropriate message
if ((dayOfWeek > 1 && dayOfWeek < 5) || // From Tuesday (2) to Thursday (4)
    (dayOfWeek === 1 && endOfWeekdayHour >= 9) || // Monday from 9 AM
    (dayOfWeek === 5 && endOfWeekdayHour < 17)) { // Friday until 5 PM (17:00 hours)
    console.log(weekdayMsg);
} else {
    console.log(weekendMsg);
}