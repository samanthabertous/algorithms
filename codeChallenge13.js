// Write a function named arrLength that takes in an array as an argument. The function should return the length of that array.

function arrLength(arr) {
  return arr.length;
}
console.log("What is the length of the array?",arrLength([1, 2, 3, 3, 2, 1]));
console.log("What is the length of the array?", arrLength(["jets", "mets", "giants", "yankees"]));


// Write a function named `longestArr` that takes in two arrays as arguments. The function should compare the length of the two arrays and return whichever array is longer (aka whichever array has more values in it).

function longestArr(arr1, arr2) {
  if (arr1.length > arr2.length) {
    return arr1;
  } else {
    return arr2;
  }
}

console.log("Which array is longer?",longestArr([1, 2, 3], [1, 2, 3, 4, 5]));
console.log("Which array is longer?",longestArr(["jets", "mets", "giants", "yankees"], ["cubs", "white sox", "bulls"]));


// Write a function named addTwoElements that takes in three arguments: an array, and two values to add to that array. The function should add those two values to the end of the array and return the updated array.

function addTwoElements(arr, x, y) {
  arr.push(x);
  arr.push(y);
  return arr;
}

// Examples:

console.log("Add elements in array", addTwoElements([1,2,3], 4, 5));
console.log("Add elements in array", addTwoElements(["hello", "hi"], "hey", "what up")); 


// Write a function removeLastTwo that takes an array as an argument and returns a copy of the array without the last two elements. If the original array is two elements or less, the function should return an empty array.

function removeLastTwo(arr) {
  var copy = arr.slice(0,2);
  return copy;
}

console.log("Remove last two elements from array:",removeLastTwo(['dog', 'cat', 'bat', 'octopus']));


// Write a function middleElement that takes an array as an argument and returns the middle element of that array. If the array has an even number of elements, the function should return "Oops, there's no middle..."

function middleElement(arr) {
  if (arr.length % 2 === 0) {
    console.log("Oops there's no middle...");
  } else {
    var middleIndex = Math.floor(arr.length/2);
    console.log(arr[middleIndex]);
  }
}


console.log("What is the middle element?", middleElement(['dog', 'cat', 'bat', 'octopus', 'chinchilla'])); 
console.log("What is the middle element?", middleElement([1, 2, 3, 4, 5]));
console.log("What is the middle element?", middleElement([1, "hmm", "wat", 4, 5])); 
console.log("What is the middle element?", middleElement([1, 2, 3, 4, 5, 6]));
console.log("What is the middle element?", middleElement(["john", "paul", "george", "ringo"]));


// Write a function everyThird that takes an array as an argument and returns a new array that contains every third element of the original array.

function everyThird(arr) {
  for (var i = 2; i < arr.length; i+= 3) {
    console.log("Every thrid element in the array:", arr[i]);
  }
}

everyThird(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']);
everyThird([1,2,3,4,5,6,7,8,9,10,11,12]) 


// Write a function stringArrays that takes two arrays as arguments and returns ONE string that contains all the words in both arrays, separated by commas. In other words, the function joins both arrays together then turns everything into a string.

function stringArrays(arr1, arr2) {
  var joinedArray = arr1.join(" ") + " " + arr2.join(" ");
  var joined = joinedArray.split(" ").join(", ");
  return joined;
}

console.log("Return two arrays as one string:",stringArrays(['arya', 'sansa', 'bran'], ['daenerys', 'tyrion', 'jon'])); 


// Write a function called tail that removes the first element from an array. The function should take in one argument: an array. The function should return a new array that contains all of the original elements except the first.

function tail(arr) {
  var copy = arr.slice(1);
  return copy;
}

console.log("Remove the first element of the array",tail([1, 2, 3, 4])); 
console.log("Remove the first element of the array",tail(['cat', 'dog', 'catdog'])); 
console.log("Remove the first element of the array",tail([1, 'one']));  


// Write a function called joinThreeArrays that joins three arrays together. The function should take in three separate arrays as arguments. The function should return a new array that contains all three arrays combined into one array.


function joinThreeArrays(arr1, arr2, arr3) {
  return arr1.concat(arr2, arr3);
}

console.log("Join three arrays together:",joinThreeArrays([1, 2], [3, 4], [5, 6]));