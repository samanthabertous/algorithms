var arr = [25, 101, 1000, 66, 10, 99] // array used for all challenges

//----------------------------
//----------------------------
//Find the min and max of an array
function largestElement(arr){
	var largest =  arr[0];
	for(var i = 1; i < arr.length; i++){
		if (arr[i] > largest){
			largest = arr[i]
		}
	}
	return largest
}
console.log("Find the largest element in an array: ", largestElement(arr))

function smallestElement(arr){
	var smallest = arr[0];
	for(var i = 1; i < arr.length; i++){
		if (arr[i] < smallest){
			smallest = arr[i]
		}
	}
	return smallest
}
console.log("Find the smallest element in an array: ", smallestElement(arr))

//----------------------------
//----------------------------
//Check to see if the target element is in the array
var target1 = 66
var target2 = 77

function detect (arr, target){
	var result = false;
	for (var i = 0; i < arr.length; i++){
		if(	arr[i] == target )
			result = true
	}
	return result
}
console.log("Is the target element with in the array? ", detect(arr, target1))
console.log("Is the target element with in the array? ", detect(arr, target2))

//----------------------------
//----------------------------
// Given an integer size, write a program that builds an array of that size where each element is its own index.
//Try with each element value being double its own index? Or triple?
//What about if all the odd indices are double while all the even indices are quadruple?

function simpleArray(num){
	var newArray =[];
	for(var i = 0; i < num; i++){
		newArray.push(i)
	}
	return newArray
}
console.log("Element at index: ", simpleArray(10))

function simpleDoubleArray(num){
	var newArray =[];

	for(var i = 0; i < num; i++){
		newArray.push(i*2)
	}
	return newArray
}
console.log("Element double index:", simpleDoubleArray(10))

function simpleOddEvenArray(num){
	var newArray =[];

	for(var i = 0; i < num; i++){
		if(i%2 === 0){
			newArray.push(i*4)
		} else{
			newArray.push(i*2)
		}
	}
	return newArray
}
console.log("ELement with odds and even: ", simpleOddEvenArray(10))

//----------------------------
//----------------------------
//Given two integers less than 1000, make an array with all the numbers between the two integers (inclusive).
function rangeOfNumbers(low, high){
	var newArray = []
	
	//arr.length = ( Y-X ) +1
	
	if(high <= 1000){
		for(var i = low; i <= high; i++){
			newArray.push(i)
		}
	} 
	return newArray
}
console.log("Range of numbers: ", rangeOfNumbers(20, 25))

//----------------------------
//----------------------------
//Given an array of numbers, find the average (mean) value. 
function mean(arr){
	var total = 0;
	for(var i = 0; i < arr.length; i++){
		total += arr[i]
	}
	return total / arr.length
}

console.log("Average value of numbers in an array: ", mean([5, 15,10,30,25]))