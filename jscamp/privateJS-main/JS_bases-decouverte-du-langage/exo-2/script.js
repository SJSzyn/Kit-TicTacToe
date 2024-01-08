// you can write js here
console.log('exo-2');



// 1 

const myDate = new Date(); // Variable that is assigned the object Date to find the local time

let weekdayMsg = `It's the weekday! Go work!`;  // variable for the Weekdays
let weekendMsg = `It's the weekend! Don't think of work!`; // Variable for the weekends

console.log(myDate); // Console will show the local time

// 2 

let dayOfWeek = myDate.getDay(); // declaring a variable with is used to get the day of the week as an integer value ranging from 0 to 6, where 0 represents Sunday
console.log(dayOfWeek); // If it's Monday it'll show 1, if Tuesday 2...

if (dayOfWeek >= 1 && dayOfWeek <= 5) { 
    console.log(weekdayMsg);
} else {
    console.log(weekendMsg);
}

/* Conditions of when the messages will show, dayOfWeek >= 1 & <= 5, 
this means it goes from 1 to 5 for the first condition. 
If it is not achieved the other statement will be shown
*/

// 3

let endOfWeekdayHour = myDate.getHours(); // declaring a variable to find the hours in the variable myDate
console.log(endOfWeekdayHour); // Will show me the local hour

if ((dayOfWeek >= 1 && dayOfWeek <= 5) || (dayOfWeek === 5 && endOfWeekdayHour < 17)) {  
    console.log(weekdayMsg);
} else {
    console.log(weekendMsg);
}

/* Same as the previous one except We have added an extra conidition in the first part.
We used || 'or' to make it so both conditions must be met.
*/

// 4

if ((dayOfWeek >= 1 && dayOfWeek <= 5) || (dayOfWeek === 5 && endOfWeekdayHour < 17) || (dayOfWeek === 1 && endOfWeekdayHour > 8)) { // Added a 3rd condition
    console.log(weekdayMsg);
} else {
    console.log(weekendMsg);
}

// testing

// Declare the _isTesting_ variable
let _isTesting_ = true; // Change to false for normal operation

if (_isTesting_) {
    // Get fictitious day and hour from the user
    let userDay = prompt("Enter the day of the week (0 for Sunday, 6 for Saturday):");
    let userHour = prompt("Enter the hour (0-23):");

} else {
    // Use current date and time
    return myDate;
}
