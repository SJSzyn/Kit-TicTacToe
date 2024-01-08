// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

// 1 .pop() gets rid of last value of array

secretMessage.pop();
console.log(secretMessage);

// 2 .push() adds new values to the array at the end

secretMessage.push("to", "program");
console.log(secretMessage);

// 3 .splice() we put the index of which value we want gone, how many indexs it'll be, and the new value replacing it

secretMessage.splice(6, 1, "right");
console.log(secretMessage);

// 4 shift() gets rid of the first element of the array

secretMessage.shift(0);
console.log(secretMessage);

// 5  unshift() takes a vlue and puts it at the head of the index

secretMessage.unshift("programming");
console.log(secretMessage);

// 6 splace() We find the index in which we'll slice, how long it'll be, and the new value added

secretMessage.splice(4, 6, 'know');
console.log(secretMessage);

// 7 join() adds all the values together in a string
console.log(secretMessage.join(" "));