//Functions~~~~~~~~~~~~~~~~~~~~~
//Functions~~~~~~~~~~~~~~~~~~~~~

// Write a function called sayHello, that takes in a name and prints out the greeting ‘Hey _____!’
let sayHello = name => `Hello ${name}`
sayHello('Jonie')


// Write a function called applyToEach, that takes a function and an array. It should return the result of applying the function to each element of the array.
let applyToEach = (func, array) => array.map((num)=>func(num))
applyToEach(function (num) {return num * 2}, [1,2,3])


//Strings~~~~~~~~~~~~~~~~~~~~~~~~~
//Strings~~~~~~~~~~~~~~~~~~~~~~~~~

// Write a function called createHtmlLink that takes in the href and innerHtml for a link, and returns a string containing the HTML of that link.
let createHtmlLink = (link, innerHtml) => `<a href="${link}">${innerHtml}</a>`
createHtmlLink('www.facelook.net', 'Get your face looked at!') 


//Array~~~~~~~~~~~~~~~~~~~~~~~~~ 
//Array~~~~~~~~~~~~~~~~~~~~~~~~~ 

//Write a function that takes in an array, and prints out the index and value for each element of the array.
let printIndexAndValue = array => {
  array.forEach((element, index) => {
    console.log(element, index)
  })
}

printIndexAndValue(["computer", 3, true, null, "javascript"])

// Write a function called multiplyEach that multiplies each number in an array by another number 
let multipleEach = (array, num) => array.map((number) => number * num)
multipleEach([1,5,32], 3)


//Objects~~~~~~~~~~~~~~~~~~~~~~~~~ 
//Objects~~~~~~~~~~~~~~~~~~~~~~~~~ 

//Create an array your 3 favorite movies as Movie objects. Each object should have properties for the following: title; # of times you’ve seen it; a plot description; and a function that, when called, prints your favorite line from the movie. 
let movieArray = [
  {
    title: "movie1",  
    timesSeen: 3,
    favoriteLine: "Favorite Line 1"
  },
  {
    title: "movie2",  
    timesSeen: 2,
    favoriteLine: "Favorite Line 2"
  },
  {
    title: "movie3",  
    timesSeen: 1,
    favoriteLine: "Favorite Line 3"
  },
]

let sayFavoriteLine = (array, movie) => {
  array.forEach( movieObj =>{
    if(movieObj.title === movie){
      console.log(movieObj.favoriteLine)
    }
  })
}

sayFavoriteLine(movieArray, "movie2")

//Review Questions~~~~~~~~~~~~~~~~~~~~~~~~~ 
//Review Questions~~~~~~~~~~~~~~~~~~~~~~~~~ 

// Write a function called countChars that takes in a string. It should return an object containing the number of times each character appears in the string. What are the keys in the object? What are the values?
let countChars = string => (
  string.split("").reduce((startObj, char)=>{
    startObj[char] ? startObj[char]++ : startObj[char] = 1
    return startObj
  }, {})
)

countChars('difficult')

//Write a function called maxOfEach that takes an array of arrays, and returns a single array containing the max of each.
let flatten = matrixArray => (
  matrixArray.map(array => Math.max(...array))
)
flatten([[1,2], [3,4,7,9], [5,6]])

// You are given an array containing the numbers 1-10. However, one of the numbers is missing. Find that number.
let findMissing = array => {
  let arrayTotal = array.reduce((start, num) => {
    return start + num
  },0)
  
  let add1Thru10 = 0; 
  for(let i = 1; i < 10; i++){
    add1Thru10 += i
  }
  
  return add1Thru10 - arrayTotal
}

findMissing([8,4,6,3,2,1,7,9])

// Write a function called allTypes. It takes in an object, and returns a list of the different types present in the object. Note that each type should appear at most 1 time.
let allTypes = obj => {
  let types = Object.keys(obj).map(element =>{
    return typeof obj[element]
  })
  return types.filter((elemetType, i) => 
    types.indexOf(elemetType) === i
  )
}

allTypes({
  name: 'Billy', 
  age: 4, 
  heighInInches: 60, 
  sayHi: () => console.log('hi')
});

// Write a function called reverseStrings that takes in an array. It should return an array where each string is reversed, and should ignore elements of other types.
let filterStrings = array => array.filter(element => typeof element === "string")
let reverseStrings = array => array.map(element => 
  element.split("").reverse().join("")
)
reverseStrings(filterStrings([123, 'hello', true, 'buddy', 'pal']))

// There are two primary ways to compound a series of words into a single string: camelCase and snake_case. Write a function called toCamelCase that takes in a string in snake_case and converts it to camelCase.
let toCamelCase = string => (
  string.split("_").map((word, i) => 
    i !== 0 ? word[0].toUpperCase() + word.substring(1): word
  ).join("")
)
toCamelCase('this_is_in_snake_case')

// Write a function called numRepetitions that takes in a single character and string, and returns the number of times that character appears in the string. 
let numRepetitions = (letter, str) => (
  str.split("").reduce((start, char) =>(
    char === letter ? start += 1 : start
  ), 0)
)
numRepetitions('a', 'Happy birthday, aardvark!')
numRepetitions('a', 'Hey there')

//Bonus ~~~~~~~~~~~~~~~~~~~~~~~~
//Bonus ~~~~~~~~~~~~~~~~~~~~~~~~

// Write a function called toNumber that takes in a string consisting of numbers, and returns that string in numerical form. You can assume the input string is valid, and that its integer representation is non-negative (i.e. so “-12” is not allowed). You cannot use the parseInt method.
let findUnique = array => {
  let sortArray = array.sort((a,b)=>a>b);
  return sortArray.filter((element, i) =>
    element !== sortArray[i+1] && element !== sortArray[i-1]
  )
};
findUnique([1,7,8,1,8]);

// You are given an array where each element is repeated twice, except for one. Find that element. You cannot use an object.
let findIntersection = (arr1, arr2) => (
  arr1.filter(num =>
    arr2.includes(num)
  ).sort()  
)
findIntersection([1,6,4], [6, 1])