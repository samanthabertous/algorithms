// anagram-checker

// Write a function called anagramChecker that takes in two strings as arguments and returns true if the strings are anagrams, or returns false if the two strings are not anagrams (two words are anagrams if they both contain the exact same letters, even if the letters are arranged in a different order).

function anagramChecker(str1, str2){
  if(!(str1.length === str2.length)){
    return false
  }
  for(var i = 0; i < str1.length; i++){
    if(!str2.includes(str1[i])){
      return false  
    } 
  }
  return true
}

console.log("Are 'listen' and 'silent' anagrams? ",anagramChecker("listen", "silent")); 
console.log("Are 'hello' and 'goodbye' anagrams?",anagramChecker("hello", "goodbye"));
console.log("Are 'bus' and 'sub' anagrams?", anagramChecker("bus","sub")); 
console.log("Are 'boats' and 'dragon' anagrams?", anagramChecker("boat", "dragon")); 

//What is the two strings are not the same length but contain the same letter?

function anagramCheckerBugs1(str1, str2){
  if(!(str1.length === str2.length)){
    return false
  }
  for(var i = 0; i < str1.length; i++){
    if(!str2.includes(str1[i])){
      return false  
    } 
  }
  return true
}

console.log("Are 'abbass' and 'abs' anagrams?" , anagramCheckerBugs1("abbass", "abs"))

//What if the two strings contain the same letters and length but not the same amount of each letter?

function anagramCheckerBugs2(str1, str2){
  var string1 = str1.split("").sort()
  var string2 = str2.split("").sort()
  return string1 === string2 ? true : false
}

console.log("Are 'abbba' and 'abbbb' anagrams?" , anagramCheckerBugs2("aabba", "abbbb"))