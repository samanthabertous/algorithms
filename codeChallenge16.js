// Write a function myTypeOf that receives two arguments and returns true if the second argument matches the type of the first. The function should process all JavaScript data types.

function myTypeOf (arg1, arg2){
  if (typeof arg1 ===  arg2) {
    return true
  } else {
    return false
  }
}
console.log( myTypeOf(1, "number") )

// Write a function mySplit that receives a string and returns an array with each letter in the string argument. BONUS: have the function receive a second argument so it behaves like the actual split function

function mySplit(str){
  var splitString = str.split("")
  return splitString
}

console.log(mySplit("hello"))


// Write a function myJoin that receives an array and returns a string of all the array elements concatenated. BONUS: have the function receive a second argument so it behaves like the actual join function

function myJoin (arr){
  var joinString = arr.join("");
  return joinString
}

console.log("Join array", myJoin(['j', 'a', 'v', 'a']));


// Write a function mySlice that receives an array and one or two numbers and behaves exactly like the slice() function.

var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
function mySlice(arr, num1, num2){
  //look at fruits, index start, index end 
  var newFruits = [];
  if (num2 === undefined) {
    num2 = arr.length; 
  }
  for (var i = num1; i < num2; i++) {
    newFruits.push(fruits[i]);
  }
  return newFruits
}

var citrus = mySlice(fruits, 1, 3);
var noBanana = mySlice(fruits, 1)

console.log("Create own slice function", citrus)
console.log("Create own slice function", noBanana)


// Write a function oddEven that receives a number.

function oddEven(num) {
  if (num % 2 !== 0) {
    return "odd";
  } else {
    return "even";
  }
}

console.log("Is the number even or odd?", oddEven(0))
console.log("Is the number even or odd?",oddEven(1))
console.log("Is the number even or odd?",oddEven(4))
console.log("Is the number even or odd?",oddEven(9))



// Write a function sumTo that receives an array of numbers and a target number and returns true if two of the elements in the array add up to that target number.

function sumTo (arr, targetNum) {
  for (var i =0; i < arr.length; i++) {
    if(arr[i] + arr[i+1] === targetNum) {
      return true 
    }
  }
  return false
}

console.log("Does two numbers equal target number?", sumTo([3, 2, 3, 4, 9], 13))
console.log("Does two numbers equal target number?", sumTo([3, 2, 3, 4, 11], 12)) 


// Write a function capLast that receives a sentence string and capitalizes the last letter of each word.

function capLast (str){
  var arr = str.split(" ");
  var newArr=[]
  for(var i =0; i < arr.length; i++){
    var firstHalf = arr[i].substring(0,arr[i].length-1);
    var lastLetter = arr[i][arr[i].length-1].toUpperCase()
    var string = firstHalf + lastLetter
    newArr.push(string)
  }
  return newArr.join(" ")
} 
  
console.log("Capitalize last letter",capLast('just keep swimming')) 

//Write a function stockPrices that receives an array of numbers. The array of numbers represent the stock price at different points in the day. The function should output the largest profit that can be made. You can only sell at an index greater than the index you bought at.

var prices = [10, 21, 4, 30, 60]

function stockPrices(arr){
  var largestProfit = 0 
  for(var i = 0; i< arr.length; i++){
    for(var j = i+1; j < arr.length; j++){
      if(arr[i] < arr[i+1]){
        var profit = arr[j] - arr[i]
        if( profit > largestProfit){
          largestProfit = profit
        }
      }
    }
  }
  return largestProfit
}
console.log("What is the highest profit?",stockPrices(prices)) 