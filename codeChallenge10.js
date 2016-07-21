//Write a function called sumThree that takes in an three numbers and returns a sum of those three numbers.
function sumThree(x,y,z){
  return x + y + z
}

console.log("Sum of three numbers is:", sumThree(2, 5, 7)); //returns 14
console.log("Sum of three numbers is:",sumThree(1, 10, 100)); //returns 111

//Write a function called divide that takes in two numbers as arguments and returns the first number divided by the second number.

function divide(x,y){
  return x/y
}
console.log("Divide ",divide(10, 2)); //returns 5
divide(100, 10); //returns 10


//Write a function called numStringAdder that takes in two arguments. The arguments can be either numbers or a string of a number (in other words, the arguments can be either 2 or "2", 3 or "3", etc.). The function should add the two numbers together and return a NUMBER. Make sure you are returning a number, and not a string.

function numStringAdder(x,y){
  return parseInt(x) + parseInt(y)
}

// numStringAdder(2, "4"); // returns 6
// numStringAdder("3", 5); // returns 8
// numStringAdder("6", "1"); // returns 7
// numStringAdder(1, 1); // returns 2





//Write a function that takes in a number as an argument and returns a random number between 0 and the argument number. For example, if you input 100 the function should return a random number between 0 and 100.

function randNum(maxNumber){
  return Math.floor(Math.random()*maxNumber)
}

console.log("Random number between 0 and 100:", randNum(100)); // 77


//Write a function randomArray(size, min, max) that returns an array of size size where each element is a whole number between min and max.
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function randomArray(size, min, max){
  var randomGeneratedNumbersArray = []
  for(var i = 0; i < size ; i++){
    randomGeneratedNumbersArray.push(Math.floor(randomNumber(min,max)))
  }
  return randomGeneratedNumbersArray 
}

console.log("random generated number array", randomArray(7, 5, 10))


//Write a function inRectangle(x, y, rect) that takes the x and y coordinates of a point, and a rectangle object as above, and returns true if the point is inside the rectangle. If the point falls exactly on the edge of the rectangle, the function should return true.
var rectangle = {
  left: 4,
  right: 10,
  bottom: -2,
  top: 2
};


function inRectangle(x, y, rect){
  //if x is between left and right &&
  //if y is between bottom and top
  if((x >= rect.left && x <= rect.right) 
    && (y >= rect.bottom && y <= rect.top)){
    return true;
  }
}

console.log("Is the point with in the rectangle?",inRectangle(5, 1, rectangle));