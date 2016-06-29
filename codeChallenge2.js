//Given an array, sort the array from the smallest to the largest with one nested function.

var arr = [25, 101, 1000, 66, 10, 99, 79, 70]

function sortArray(arr){
	var temp = 0;
	for(var i = 0; i < arr.length ; i++){
		for(var j = i+1; j <arr.length; j++)
		if (arr[j] < arr[i]){
			 swap(arr,i, j)
		}	
	}
	console.log("Sort the array from smallest to largest: ", arr)
}

function swap(Arr, x, y){
	var temp = arr[y];
	arr[y] = arr[x];
	arr[x] = temp;
}

sortArray(arr)

//----------------------------
//----------------------------
//Check to see if the number is a perfect square (option 1)
var isPerfectSquare1 = function(arg) {
  var sqrtOfArg = Math.sqrt(arg) //rounded
  return Math.floor(sqrtOfArg) == sqrtOfArg ? true : false
}

console.log("Is 16 a perfect square? ", isPerfectSquare1(16)) 
console.log("Is 2 a perfect square? ", isPerfectSquare1(2))

//----------------------------
//----------------------------
//Check to see if the number is a perfect square (option 2)
var isPerfectSquare2 = function(arg) {
	for(var i = 0; i < arg; i++){
		if(	i * i === arg){
			return true
		}
	}
	return false
}

console.log("Is 9 a perfect square?", isPerfectSquare2(9))
console.log("Is 7 a perfect square?", isPerfectSquare2(7))

//----------------------------
//----------------------------
//Given an array of numbers, find the largest consecutive gap between two elements.
function largestGapConsecutiveElements (arr){
  var gap = 0;
  for(var i = 0; i < arr.length; i++){
    var diff = arr[i] - (arr[i+1])
      if (diff > gap){
        gap = diff;
      }
  }
  return gap;
}

console.log("Largest consecutive gap between two elements with in an array is: ", largestGapConsecutiveElements(arr))

//----------------------------
//----------------------------
//Given an array of numbers, find the largest gap between any two elements with in the array.
function largestGapBetweenTwo(arr){
    arr.sort(function(a,b){
        return a-b;
    });
    return arr[arr.length-1] - arr[0];
}

console.log("Largest gap between any two elements with in an array is: ", largestGapBetweenTwo(arr))





