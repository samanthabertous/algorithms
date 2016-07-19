//Write a function named greet that takes in a name as an argument. The function should log out "Hi !" (replacing with the name passed in as the argument).

function greet(name){
  console.log("Hi " + name + "!");
};

console.log("Greeting = ", greet("Samantha"));

//----------------------
//----------------------

//Write a function named add that takes in two numbers as arguments. The function should return the sum of the two numbers

function add(num1, num2){
  return num1 + num2
}

console.log("The result of adding two numbers: ", add(2,5))

//----------------------
//----------------------

//Write a function which takes a string as an input and returns the string reversed. Do not use the built-in reverse method.

function reverseStr(string){
  var newStr = "";
  for(var i = string.length-1; i >= 0; i--){
    newStr += string[i]
  }
  return newStr
}
var c4q = "ILOVEC4Q";
console.log("Reverse " + c4q + " to equal: ", reverseStr(c4q))

//----------------------
//----------------------

//Write a function that takes a sorted array as input and returns its median

function median(arr){
return arr[Math.floor(arr.length / 2)];
}

console.log("What is the middle number of the array: ",median([1,3,4,10,20,22,35])); 