//Write a function named sortArrNum that takes in an array of numbers and returns the array sorted from lowest to highest.
function sortArrNum(arr){
  return arr.sort(function (a, b) {
    return a - b;
  })
}
console.log("Sort an array of numbers",sortArrNum([3, 5, 7, 1, 9, 0]));

//Write a function named sortArrStr that takes in an array of strings and returns the array sorted alphabetically.
function sortArrStr(arr){
  return arr.sort();
}
console.log("Sort an array:",sortArrStr(['cat', 'elephant', 'dog', 'walrus'])); 

//Write a function named sortStr that takes in a string and returns a string of the letters sorted alphabetically.
function sortStr(str){
  return str.split("").sort().join("");
}
console.log("Sort a string:", sortStr('hello')); 
console.log("Sort a string:",sortStr('big apple')); 

//Write a function named arrReverse that takes in an array of numbers and returns an array of numbers in the reverse order.
function arrReverse(arr){
  return arr.reverse();
}
console.log("Reverse an array:",arrReverse([1, 2, 3, 4, 5]));

// Write a function called reverseStr that uses the reverse method to reverse a string and return the reversed string. Do NOT use a typical loop; just use the reverse method.

function reverseStr(str) {
  return str.split("").reverse().join("")
}
console.log("Reverse a string: ",reverseStr('hello'));
console.log("Reverse a string: ",reverseStr('when am i?')); 

// Write a function named sortObjs that takes in an array of objects and sorts them alphabetically by their name property.

function sortObjs(obj) {
  return obj.sort(function(a,b){
    return a.name > b.name;
  })
}
console.log("Sort the array of objects",sortObjs([{name: 'lesane'}, {name: 'sean'}, {name: 'kendrick'}, {name: 'christopher'}, {name: 'young thug'}]))

// Write a function called highLow that uses the sort method to sort an array of numbers* from high to low.

function highLow(arr) {
  return arr.sort(function (a, b) {
    return a < b;
  })
  return arr;
}
console.log("High to low:",highLow([1,2,3,4,5]));
console.log("High to low:",highLow([10,5,11,2,6,7,26])); 

// Write a function named checkDrinkingAge that takes in an array of objects, each of which has a name property and age property. The function should return true if everyone's 21 or older, and should return false if anyone is under 21.

function checkDrinkingAge(arr) {
  return arr.every(function (x) {
    return x.age >= 21;
  })
}
console.log("Is everyone over 21",checkDrinkingAge([{name: "Adrian", age: 33}, {name: "Jojo", age: 23}, {name: "Cornelius", age: 26}])); 
console.log("Is everyone over 21",checkDrinkingAge([{name: "Tommy", age: 22}, {name: "Chucky", age: 24}, {name: "Lil", age: 21}])); 

// Write a function named sort that takes in an array of numbers and sorts them in order from lowest to highest. Do not use the built in .sort array method in your answer.

function sort(arr){
  for (var i = 0; i < arr.length; i ++){
    for (var j = i+1; j < arr.length; j++){
      if(arr[i] > arr[j]){
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr
}
console.log("Hand sorted array",sort([11, 2, 36, 4, 15])); 