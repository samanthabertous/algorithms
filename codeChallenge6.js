//Write a function that takes an array that multiplies all the numbers besides the index number at each position
function skipAnIndex(arr){
  var skipArr = []
  var num = 1;
  for(var i = 0; i< arr.length; i++){
    for(var j = 0; j < arr.length; j++){
      if(!(i === j)){
        num *= arr[j]
      }
    
    }
    skipArr.push(num)
    num = 1
  }
  return skipArr
}
skipAnIndex([1,2,3,4])