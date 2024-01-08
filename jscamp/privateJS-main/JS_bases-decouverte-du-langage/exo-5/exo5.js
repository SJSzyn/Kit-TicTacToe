// Part 1: Define the input string
var input = "Turpentine and turtles"; // Example phrase to be translated

// Part 2: Define the vowels array
var vowels = ['a', 'e', 'i', 'o', 'u']; // Array containing all the vowels

// Part 3: Define the result array
var resultArray = []; // Array to store the translated string

// Part 4: Find all vowels in the input string and translate
for (var i = 0; i < input.length; i++) { // Loop through each character in the input string
    var currentChar = input[i].toLowerCase(); // Convert current character to lowercase

    if (vowels.includes(currentChar)) { // Check if the current character is a vowel
        resultArray.push(currentChar.toUpperCase()); // Convert vowels to uppercase and add to result array
    }
}

// Join the elements of the result array to form the final translated string
var whaleLanguage = resultArray.join("");

// Output the translated string
console.log(whaleLanguage);