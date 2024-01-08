// you can write js here
console.log('hello from file');

/* Previous exercice
let kelvins = 294;  // Declaring the Kelvin variable as 294
*/

let kelvins = prompt("Quelle est la température en kelvins aujourd'hui ?"); // Declaring new variable kelvin with prompt instance method 

const celsius = kelvins - 273;  // Declaring celsius variable that wont change, used the value of variable kelvin - 273

const fahrenheits = celsius * (9/5) + 32; // Declaring fahrenheit variable that wont change, used the value of the variable celsius * (9/5) + 32

/* From google: 
Because the difference between the freezing point of water and the 
boiling point of water is 100° on both the Celsius and Kelvin scales, 
the size of a degree Celsius (°C) and a kelvin (K) are precisely the same. 
In contrast, both a degree Celsius and a kelvin are 9/5 the size of a 
degree Fahrenheit (°F). */

// Used a Math built-in Object called .floor() rounds the variable to a whole number
console.log(kelvins + "K is equal to " + Math.floor(fahrenheits) + "°F");