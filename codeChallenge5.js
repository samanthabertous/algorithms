//Write a function called secondToLast that takes in an array as an argument and returns the second to last value of that array.
function secondToLast(arr){
  return arr[arr.length-2]
}
var firstArr = [1, 2, 3, 4, 5]
var secondArr = [10, 13, 3, 44, 5, 20, 27]

console.log("Second to last number in " + firstArr  + " is:" , secondToLast(firstArr)); //returns 4
console.log("Second to last number in " + firstArr  + " is:", secondToLast(secondArr)); //returns 20

//----------------------
//----------------------


//Write a function called doubleString that takes in a string as an argument, doubles the string, and returns it.
function doubleString(str){
  var newstring = str + str
  return newstring  
}

console.log("Double the word: ", doubleString("hello")); //returns "hellohello"
console.log("Double the word: ", doubleString("double me")); //returns "double medouble me"

//----------------------
//----------------------

//Write a function called evens that takes in an array as an argument and returns a new array with only the even numbers from the original array.

function evens(arr){
  var newArray = []
  for(var i = 0; i < arr.length; i++){
    if(arr[i]%2 === 0){
      newArray.push(arr[i])
    }
  }
  
  return newArray;
}

console.log("Print out all evens with in the array: ", evens([1,2,3,4,5,6])); //returns [2,4,6]
console.log("Print out all evens with in the array: ", evens([10,13,3,44,5])); //returns [10,44]

//----------------------
//----------------------

//Write a function called tipCalculator that takes in three arguments: total bill amount, tip percentage, and number of people. The function should return how much each person owes in tip.

function tipCalculator(bill, percentage, people){
  var newPercentage = percentage * .01 
  return bill * newPercentage / people
}

console.log("Amount of tip each person has to pay is $", tipCalculator(500, 15, 10)); //returns 7.5
console.log("Amount of tip each person has to pay is $", tipCalculator(80, 20, 2)); //returns 8

//----------------------
//----------------------

//Write a function maxAbsOfArrSigned(arr) that takes as input an array of numbers. Make this function check which number in the array has the largest absolute value, and return the original value of that number (i.e. if that number is negative, return it as such).

function maxAbsOfArrSigned(arr){
  var largestNum = Math.abs(arr[0])
  var realLargest
  for(var i =0; i<arr.length; i++){
    if(largestNum < Math.abs(arr[i])){
      largestNum = Math.abs(arr[i])
      realLargest = arr[i]
    }
  }
  return realLargest
}
console.log("Largest absolute number: ", maxAbsOfArrSigned([2, -4, 3]))