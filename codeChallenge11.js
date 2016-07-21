// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contains any char.

function XO(str){
  var string = str.toLowerCase();
  var xCount = 0;
  var oCount = 0;
  for (var i = 0; i < string.length; i++){
    if(string[i] === "x"){
      xCount++;
    } else if (string[i] === "o") {
      oCount++;
    }
  }
  return xCount === oCount ? true : false;
}

console.log("Are there the same amount of x\'s and o\'s?", XO("ooxx"));
console.log("Are there the same amount of x\'s and o\'s?", XO("xooxx"));
console.log("Are there the same amount of x\'s and o\'s?", XO("ooxXm"));
console.log("Are there the same amount of x\'s and o\'s?", XO("zpzpzpp"));
console.log("Are there the same amount of x\'s and o\'s?", XO("zzoo"));


// Write a function called checkUnique that takes in a string as an argument and checks if the string has all unique characters. In other words, the function should check to make sure there are no duplicate characters in the string. If the string's characters are all unique, the function should return true. Otherwise it should return false.

function checkUnique(string){
  for(var i = 0; i < string.length; i++){
    for(var j = i+1; j < string.length; j++){
      if(string[i] === string[j]){
        console.log(string[i], string[j])
        return false;
      }
    }
  }
  return true;
}

console.log("Are all character in the string unique?",  checkUnique("fireman"));
console.log("Are all character in the string unique?", checkUnique("hello"));
console.log("Are all character in the string unique?", checkUnique("abcdefgh"));
console.log("Are all character in the string unique?", checkUnique("aabbccdd"));




//Assume you have a function called isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write a function called isRotated to check if s2 is a rotation of s1 using only one call to isSubstring

function isRotated(string1,string2){
  string1= string1.split("");
  for(var i=0 ; i< string1.length;i++){
    var s= string1.shift();
    string1.push(s);
    if(string1.join("") === string2){
      return true;
    }
  }
  return false;
}
console.log("isRotated?",isRotated("waterbottle","erbottlewat" ));
console.log("isRotated?",isRotated("waterbottle","bottlerewat" ));
console.log("isRotated?",isRotated("dragon","agondr" ));
console.log("isRotated?", isRotated("dragon","dog" ));
