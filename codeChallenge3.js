//Celebrity Baby Names
// Check a list of baby names that follow the "the last letter trend." The rules of the trend are as follows: the first letter of a child'sname should be the same as the last letter of their older sibling
function validName(array){
  if (array.length === 1){
    return "Congratulations, you can choose any name you like!"
  } else if (array.length === 0){
    return "You must test at least one name."
  } 

  var valid = true
  for (var i = 0; i < array.length-1; i++){
    var lastLetter = array[i][array[i].length-1].toLowerCase()
    var firstLetter = array[i+1][0].toLowerCase()

    if(valid){
      if (lastLetter === firstLetter){
        valid = true
      } else {
        valid = false
      }
    }

  }

  if (valid){
  return "Congratulations, your baby names are compatible!"
  } else if (!valid) {
    return "Back to the drawing board, your baby names are not compatible."
  }
} 
console.log("Celebrity Baby Name: ", validName(["Suri", "Ireland", "Diva", "Aleph"]))

//----------------------------
//----------------------------

//Vowel Count
//Given a string, count the total number of vowels with in the string
function getCount(str) {
  var vowelsCount = 0;
  
  var vowels = ["a", "e", "i", "o", "u"]

  for (var i = 0; i < str.length; i++){
    for (var j = 0; j < vowels.length; j++){
      if( vowels[j] === str[i]){
        //console.log("j: ", j, " i: " , i)
        vowelsCount++
      }
    }
  }
  
  return vowelsCount;
}
var vowelString = "Enter your magic here"
console.log("The total number of vowels in '" + vowelString + "' is: ", getCount(vowelString))

//----------------------------
//----------------------------

//Credit Card Mask
//Mask a credit card number to only show the last 4 digits of the number

function maskify(cc) {

  if(cc.length < 4){
    return cc
  }
  
  
  newCC = ""
  for(var i = 0;  i < cc.length - 4 ; i++){
    newCC += "#"
  }
  for (var i = cc.length -4; i < cc.length; i++){
    newCC += cc[i]
  }  
  return newCC
}

var creditCard = 9854209485234899345 

console.log("The credit card number: " + creditCard + " will turn into", maskify(creditCard))



//----------------------------
//----------------------------

//Welcome to the City
//Print out a welcome message with a list of names
function sayHello( name, city, state ) {
  var totalName = ""
  for (var i = 0; i < name.length; i++){
    totalName += " " + name[i]
  }

  return "Hello," + totalName + "! Welcome to " + city + ", "+ state +"!"

}

console.log("Welcome to the City Greeting: ", sayHello(["John", "Adam", "Smith"], "Dallas", "Texas"))

//----------------------------
//----------------------------

//How good are you really?
//Given an array of student grades, check to see if your grade is better then the class average

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  var totalPoints = 0
  for (var i = 0; i < classPoints.length; i++){
    totalPoints += classPoints[i]
  }
  
  var avg = totalPoints / classPoints.length
  
  return (avg < yourPoints) ? true : false
}
console.log("Is your score better then the class average?", betterThanAverage([96, 88, 76, 84, 73, 65, 92], 83))

