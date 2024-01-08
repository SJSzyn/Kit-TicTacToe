// you can write js here

console.log('exo-5');

let input = "Turpentine and turtles";  // My variable phrase that will be translated
let vowels = ['a','e', 'i',' o', 'u']; // Array of vowels
let resultArray = ['']; // Empty array that will store our future modified array

for (let i = 0; i < input.length; i++){ // 1st loop goes through each character in the input
    for (let j = 0; j < vowels.length; j++){ // loops through each vowels from array to check if it's a vowel
      if (input[i] === vowels[j]){ // goes into condition if a character is a vowel
            resultArray.push(input[i]); // if it does, it gets pushed twice
          } else{
            resultArray.push(input[i]);
          }
      }
    } 
  
  console.log(resultArray.join('').toUpperCase()); // output will be in uppercase