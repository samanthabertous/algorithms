// Given an array myFavoriteNumbers, write code to log to the console the first element of the array.

var arr = [47, 8, 9, 22, 1, 2, 3, 4]
console.log("First element of the array", arr[0])

// 2 Given an array myFavoriteNumbers, write code to log to the console the last element of the array.

 console.log("Last Element of the array", arr[arr.length - 1])

// What is the value of 13 % 4 ?

console.log("The value of 13 % 4 is: ", 13 % 4)



// 6 Write a function named sumAllElements that returns the sum of all of the elements of an array.
function sumAllElements(arr){
  var sum = 0;
  for(var i=0; i<arr.length; i++ ){
    sum = sum + arr[i]
  }
  console.log(sum)
}
console.log("The sum of all elements in the array is: ", sumAllElements(arr))

//--------------------
//--------------------

// Write a function that takes a string argument and returns the number of spaces in the string. For example,

function numberOfSpaces(str){
  var spaceCount = 0;
  for(var i=0; i< str.length; i++){
    if(str[i] === " "){
      spaceCount += 1;
    }
  }
  return spaceCount;
}
console.log("How many spaces are in 'The quick brown fox jumped over the lazy dogs.'?", numberOfSpaces("The quick brown fox jumped over the lazy dogs."))


// Q4. remove-zero

// Write a function that, given a string as input, will remove all 0s from that string.

function removeZero(str){
  var strRemove0s = "";
  for(var i = 0; i < str.length; i++){
    if(!(str[i] === "0")){
      strRemove0s += str[i] ;
    }
  }
  return strRemove0s;
}

console.log("Remove all zeros from hello2016: ", removeZero("hello2016")) 
console.log("Remove all zeros from g00dbye2017: ", removeZero("g00dbye2017")) 


// Q5. min-function

// Write a function min that takes two arguments and returns their minimum.

// // Your code here.

function min(a, b){
  if(a < b){
    return a
  } else {
    return b
  }
}

console.log("Return the min value:" , min(0, 10));

console.log("Return the min value:" , min(0, -10));

// Q6. sum-every-third

// Write a function called sumEveryThird that takes in an array of numbers as an argument and returns the sum of every third number in the array.

// Examples:

function sumEveryThird(arr){
  var sum = 0;
  for(var i = 2; i < arr.length; i+=3){
    sum += arr[i];
  }
  return sum
}

console.log("Total of every thrid number in an array: ", sumEveryThird([1,2,3,4,5,6,7,8,9])); //returns 18
console.log("Total of every thrid number in an array: ", sumEveryThird([12,5,9])); //returns 9
console.log("Total of every thrid number in an array: ",sumEveryThird([4,9,1,3,8,1])); 
// Q7. find-longest-word

// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

function findLongestWord(arr){
  var longestElement = arr[0]
  for(var i = 0; i < arr.length; i++){
    if(arr[i].length > longestElement.length){
      longestElement = arr[i]
    }
  }
  return longestElement.length
}


console.log("What is the length of the longest element in the array: ", findLongestWord(['dog', 'cat', 'bat', 'octopus', "fish", "elephant"])); 
// Q8. tip-calculator

// Write a function called tipCalculator that takes in three arguments: total bill amount, tip percentage, and number of people. The function should return how much each person owes in tip.

// Examples:

function tipCalculator(bill, tip, people){
  return bill * tip / people
}

console.log("How much money does each person owe after the tip is added", tipCalculator(500, .15, 10)); 
console.log("How much money does each person owe after the tip is added", tipCalculator(80, .20, 2)); 

// Q9. repeat-a-string

// Write a function to concatenates a given string n times. The function should take in two arguments: the first argument should be the string, and the second argument should be the number of times the string should be concatenated. If no second argument is entered, the string should be logged once.

// Example output:
function repeat(str, times){
  if(times == undefined){
    return str
  }
  var strConcatenated = "";
  for(var i = 0; i < times; i++){
    strConcatenated += str
  }
  return strConcatenated 
}

console.log("concatenate a string multiple times: ", repeat('Ha!')); 
console.log("concatenate a string multiple times: ",repeat('Ha!', 2)); 
console.log("concatenate a string multiple times: ",repeat('Ha!', 3));

// print-sequence

// Write a loop that will log the following sequence to the console: 1,2,4,7,11,16,22,29,37,46,56,67,79,92

function printSequence(){
  var num = 1;
  var counter = 0;
  while(counter < 19){
    console.log("sequence", num)
    counter++
    num += counter

  }
}
console.log(printSequence())