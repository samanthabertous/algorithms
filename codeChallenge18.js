// ### Multiply array
// Write a function called multArr that takes in an array of numbers as an argument and recursively multiplies together all of the values in the array.
let multArr = (arr) => {
  if(arr.length === 1){
    return arr[0]; //final value
  } else {
    return arr[0] * multArr(arr.slice(1))
  }
}
console.log("Multiply Array:", multArr([2, 3, 5])); // returns 30
console.log("Multiply Array:", multArr([5, 5, 1, 2])); //returns 50

// ### Concatenate array
// Write a function called concatArr that takes in an array of strings as an argument and recursively concatenates the strings together into a single string, with spaces between each original string.
let concatArr = (arr) => {
  if(arr.length === 1){
    return arr[0];
  } else {
    return arr[0] + ' ' + concatArr(arr.slice(1))
  }
}
console.log("Concatenate Array:", concatArr(['is', 'it', 'tomorrow'])); // returns 'is it tomorrow'
console.log("Concatenate Array:", concatArr(['or', 'just', 'the', 'end', 'of', 'time'])); //returns 'or just the end of time'

// ### Sum Evens
// Write a function called sumEvens that takes in an array of numbers as an argument and recursively sums only the even numbers in the array.
let sumEvens = (arr) => {
  if(arr.length === 1){
    return arr[0]
  } else {
    if(arr[0] % 2 === 0){
      return arr[0] + sumEvens(arr.slice(1))
    } else if (arr[0] % 2 === 1){
       return sumEvens(arr.slice(1))
    }
  }
}
console.log("Sum Evens:", sumEvens([2, 3, 5, 6])); // returns 8
console.log("Sum Evens:", sumEvens([10, 5, 1, 2, 12])); //returns 24


// ### Square and Multiply
// Write a function called squareAndMultiply that takes in an array of numbers, squares each number, multiplies all of the squared numbers together, and returns the product:

let squareAndMult = (arr) => {
  if(arr.length === 1){
    return Math.pow(arr[0], 2)
  } else {
    return Math.pow(arr[0], 2) * squareAndMult(arr.slice(1))
  }
}
console.log("Square and Multiply:", squareAndMult([1, 2, 3])); // returns 36
console.log("Square and Multiply:", squareAndMult([5, 10])); //returns 2500

// ### Recursive Range
// Write a function called range which takes in two numbers (num1, num2) as arguments. The function should return an array of numbers between num1 and num2.

let range = (num1, num2) => {
  if( num1 === num2){
    return [num1]
  } else {
    return [num1].concat(range((num1 + 1), num2))
  }
}
console.log("Recursive Range:", range(2,10)); // returns [2, 3, 4, 5, 6,7, 8, 9, 10]
console.log("Recursive Range:", range(17,20)); // returns [17, 18, 19, 20]


// ### Count the Vowels
// Write a function called countVowels that takes in a string and returns an object with the count of the number of vowels in the string:

let obj = {'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0}
let countVowels = (str) => {
  if(str.length === 1){
    return obj 
  } else {
    if( str[0] === 'a'|| 
      str[0] === 'e'||
      str[0] === 'i'||
      str[0] === 'o'||
      str[0] === 'u'){

      obj[str[0]] += 1
      
    }
    return countVowels(str.substring(1))
  }
}
console.log("Count the Vowels:", countVowels('this is a test')); // returns {'a': 1, 'e': 1, 'i': 2, 'o': 0, 'u': 0}
console.log("Count the Vowels:", countVowels('another one')); //returns {'a': 1, 'e': 2, 'i': 0, 'o': 2, 'u': 0}


// ### Add and Multiply
// Write a function called addAndMult that takes in an array of numbers and returns an object with two properies: 'sum', which has the sum of the array, and 'product', which has the product of the array:

let addAndMult = (arr, object = {'sum': 0, 'product': 0}, firstloop = true ) => {

  if(arr.length === 0){
    return object

  } else {

    if(firstloop){
      firstloop = false
      object.product = 1
    }

    let newSum = arr[0] + object.sum 
    let newMult = arr[0] * object.product
    return addAndMult(arr.slice(1), {sum: newSum, product: newMult}, firstloop)
  }
}
console.log("Add and Multiply:", addAndMult([])) //returns {'sum': 0, 'product': 0}
console.log("Add and Multiply:", addAndMult([1, 2, 3, 4, 5])); // returns {'sum': 15, 'product': 120}
console.log("Add and Multiply:", addAndMult([10, 10, 10])); // returns {'sum': 30, 'product': 1000}


// ### Factorial
// Write a function called calculateFactorial that takes in a number as arguments and returns the factorial of that number. A factorial is basically the product of all integers between that number and 1.

let calculateFactorial = (num) => {
  if(num === 1){
    return num 
  } else {
    return num * calculateFactorial(num - 1) 
  }
}
console.log("Factorial:", calculateFactorial(3)); //returns 6
console.log("Factorial:", calculateFactorial(4)); //returns 24
console.log("Factorial:", calculateFactorial(7)); //returns 5040


// ### Triple Step
// A child is running up a staircase with n steps and can hop either 1 step 2 steps or 3 steps at a time. Write a function called 'tripleStep', that takes in an argument n that represents the number of steps in the staircase, and returns a count of how many possible ways the child can run up the stairs.

let tripleStep = (steps) => {
  if(steps === 0 || steps === 1){
    return 1 
  } else {
    if (steps >= 3){
    return tripleStep(steps - 1) + tripleStep(steps - 2) + tripleStep(steps - 3)
    } else if ( steps === 2) {
      return tripleStep(steps - 1) + tripleStep(steps - 2)
    }
  }
}
console.log("Triple Step:", tripleStep(3)); //returns 4
console.log("Triple Step:", tripleStep(4)); //returns 7
console.log("Triple Step:", tripleStep(5)); //returns 13
console.log("Triple Step:", tripleStep(10)); //returns 274