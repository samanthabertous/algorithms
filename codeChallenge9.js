// Write a function called concatStrings that takes in two strings as arguments and returns the two strings joined together with a space between.

function concatStrings (string1, string2){
  //return string1.concat(" ").concat(string2)
  var twoStrings = string1 +" "+ string2;
  return twoStrings;
}

console.log("Concatenate two strings", concatStrings("hello", "goodbye")); 
console.log("Concatenate two strings",concatStrings("this is the beginning", "of a sentence"));


// Write a function called firstLetter that takes in a string as an argument and returns the first letter of the string.

function firstLetter(string){
  return string.charAt(0);
}

console.log("What is the first letter of Samantha",firstLetter("Samantha"));


//  Write a function called lastLetter that takes in a string as an argument and returns the last letter of the string.

function lastLetter(string){
  return string.charAt(string.length-1);
}

console.log("What is the last letter of Samantha",lastLetter("Samantha"));


// Write a function called wordToArray that takes in a string as an argument and returns an array that contains all of the letters of that word.

function wordToArray(string){
  return string.split("");
}

console.log("Make each letter an element of an array", wordToArray("Samantha"));


// Write a function called sentenceToArray that takes in a string as an argument and returns an array that contains all of the words in that string.

function sentenceToArray(string){
  return string.split(" "); 
}

console.log("Make each word an element of an array", sentenceToArray("Samantha is the awesomest person ever!"));


// Write a function called typeChecker that logs out different things based on the type of the argument. If the input is a string, the function should log "I'm a string!" If the input is a number, the function should log "I'm a number!" If the input is a boolean, the function should log "I'm a bool!" If the input is empty, the function should log "Nothing to see here." 


function typeChecker(input){
  if(typeof input === "string"){
    return "I'm a string!";
  } else if ( typeof input === "number"){
    return "I'm a number!";
  } else if (typeof input === "boolean"){
    return "I'm a bool!";
  } else if (input === undefined){
    return "Nothing to see here.";
  }
}

console.log(typeChecker(9));
console.log(typeChecker("string"));
console.log(typeChecker(true));
console.log(typeChecker());


// Write a function to check if an input is an empty string. If the input is an empty string it should return true, otherwise it should return false. However if the input is NOT a string (in other words, if the input is a number, or an array, etc.), the function should also return false.

function isEmptyString(input){
  return input === "" ? true : false;
}

console.log("Is the string empty?", isEmptyString(9));
console.log("Is the string empty?", isEmptyString("string"));


// Write a function that accepts a string as a parameter and counts the number of vowels within the string (vowels include a, e, i, o , u - don't count 'y'). The function should return the number of vowels in the string.

function vowelCount(string){
  var sum = 0;
  for (var i = 0; i < string.length; i ++){
    if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' ||  string[i] === 'u'){
      sum++;
    }
  }
  return sum; 
}

console.log("What is the vowel count of a given string:", vowelCount('test string')); 
console.log("What is the vowel count of a given string:", vowelCount('longer string with more vowels')); 


// Write a function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

function capitalizeEachWord(string){
  var array = string.split(" ");
  var words = [];
  for ( var i = 0; i < array.length; i++){
    var firstLetter = array[i][0].toUpperCase();
    var remainingLetters = array[i].substring(1, array[i].length);  
    var joinedWords = firstLetter+remainingLetters;
    words.push(joinedWords);
  } 
  return words.join(" ");
}

console.log("Capitalize each word:",capitalizeEachWord('the quick brown fox'));


// Write a function to return a part of string after a specified character. The function should take two arguments, the first being the string, and the second being the character. The function should return only the part of the string that comes AFTER the specified character. In other words, the function should chop the string into two parts and return only the part that comes after the specified character.

function  subStrAfterChars(string, char){
  var newString = "";
  for (var i = 0; i < string.length; i++){
    if(string[i] === char){
      newString += string.substring(i + 1, string.length);
    }
  }
  
  return newString;
}

console.log("Return the remain letters after you reach a target letter", subStrAfterChars('this is a test string', 'a'));
console.log("Return the remain letters after you reach a target letter", subStrAfterChars('this is another test', 'o'));



// Write a function that takes a string and capitalizes every even indexed letter. Similarly, every off indexed letter should be lower case.


function upperLower(string){
  var newString = "";
  for(var i = 0; i <string.length; i++){
    if( i % 2 === 0 ){
      newString = newString + string[i].toUpperCase();
    } else {
      newString = newString + string[i].toLowerCase();
    }
  }
  return newString;
}

console.log("Uppercase and Lowercase alternation", upperLower('elephant'));  
console.log("Uppercase and Lowercase alternation", upperLower('BANANA')); 


// Write a function to truncate a string if it is longer than the specified number of characters. The function should take two arguments, the first argument being the string and the second argument being the number of characters to truncate the string by. Truncated strings should end with an ellipsis sequence ("…"). If the specified number is large than the length of the string, the entire string should be returned.

function text_truncate(string, length){
  if(string.length < length){
    return string;
  } else if (string.length > length){
    return string.substring(0, length) + "...";
  }
}

console.log("Truncate a string at a given length", text_truncate('We are doing JS string exercises', 19)); 
console.log("Truncate a string at a given length", text_truncate('This is a short sentence', 100)); 