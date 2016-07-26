// Write a function hello(name) that logs:
function hello(name){
  return "Hello " + name + "!"
}

console.log("Greeting:",hello("John"))

//Write a function square(x) in that takes a number as an argument and returns the square of that number.

function square(x){
  return x * x
}
console.log("Square one number:",square(4))

//Write a function named calculateAge that takes two arguments: birth year and current year. The function should then calculate the two possible ages based on that year, and returns the result in the following format (replacing 'NN' with the possible years) : "You are either NN or NN."

function calculateAge(birthYear, currentYear){
  var age = currentYear - birthYear;
  return "You are either " + (age-1) + " or " + age
  
}
console.log("How old are you?",calculateAge(1990,2016))

// Write a function xToNum(num) that takes as arguments two numbers: x and num and returns the sum of all numbers from x to num (including both). For example:
function xToNum(x, num){
  var sum = 0;
  for (var i = x; i <= num; i++){
    sum += i
  }
  return sum
}
console.log("Sum of numbers between to intergers:", xToNum(4, 8))


// Write a function named countTheArguments. If less than five numbers are passed in as arguments when the function is called, the function should return "Sorry, not enough arguments." If more than five numbers are passed in as arguments when the function is called, the function should return "Sorry, too many arguments." If exactly five arguments are passed in when the function is called, the function should return the sum of the arguments.

function countTheArguments(){
  if(arguments[5] !== undefined){
    return 'Sorry, too many arguments'
  } else if (arguments[4] === undefined){
    return 'Sorry, not enough arguments'
  } else {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++){
      if(arguments[i] !== undefined){
        sum += arguments[i]
      }
    }
    return sum
  }
}


console.log("Is there 5 arguments?",countTheArguments(1, 2, 3, 4));
console.log("Is there 5 arguments?",countTheArguments(44, 21, 55, 33, 3, 4));
console.log("Is there 5 arguments?",countTheArguments(12, 1, 3, 5, 10));  


// Write two functions, one named celsiusToFahrenheit and the other named fahrenheitToCelsius. celsiusToFahrenheit should take in a celsius temperature as an argument and convert it to fahrenheit. Similarly, fahrenheitToCelsius should take in a fahrenheit temperature as an argument and convert it to celsius.
function fahrenheitToCelsius(fahrenheit){
  var celsius = (5/9) * (fahrenheit - 32)
  return celsius
}
function celsiusToFahrenheit(celsius){
  var fahrenheit = ((9/5) * celsius) + 32
  return fahrenheit
}
console.log("celsius to fahrenheit",celsiusToFahrenheit(30));
console.log("fahrenheit to celsius",fahrenheitToCelsius(32));


// Write a function called functionCeption that returns a new function. When called, that new function should console logs out "Is all that we see or seem, But a dream within a dream?". Neither function should take any arguments.

// Checkout the Inception wikipedia page if you're curious about the inspiration for this question. Also shoutout to Edgar Allen Poe for the quote.

function functionCeption (){

return function generalFunction(){
  console.log("Is all that we see or seem, But a dream within a dream?");  
  }
}
var dreamFunc = functionCeption();
dreamFunc();


//Part 1. Write a javascript function printElement(element, index) that takes as argument an element of an array and an index. It then logs to the console: 1. The index. 2. The type of the element. 3. The element itself.

//Part 2. Write a function printArrayElements(arr) that takes an array as an argument. The function will traverse through the array, and for each element call the function printElement.

var arr = ["apple", "orange", "pear"];
printElement(arr[0], 0);

function printElement(element, index) {
  console.log("The index: " + index + "\nType of: " + typeof element + "\nElement value: " + element);
}

function printArrayElements(arr) {
  arr.map(printElement);
}

console.log("Print array elements",printArrayElements(arr));