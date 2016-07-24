// Create an object that has some information about yourself, including your name, hometown, favorite food, and favorite musical artist. Feel free to add any other properties you'd like.

var samantha = {
  name: "Samantha",
  hometown: "Dalllas, Fort Worth",
  favorite_food: "rice",
  favorite_artist: "Beyonce"
};

samantha.favorite_color = "orange";


// Create an object called company. The company object should contain the following properties: name, year founded, CEO. The CEO should be an object that contains two properties: name and age. Choose a real company (other than Apple) and add its details.

var company = {
  name: "AwesomeLand",
  year: 1829,
  CEO: {
    name: "Samantha",
    age: 26
  }
}


// Write a function named getObjName that takes in an object as an argument. The function return the value of the name property of the object.

function getObjName(obj) {
  return obj.name;
}

getObjName({name: 'Jimi', insrument: 'guitar'});  // returns 'Jimi'
getObjName({name: 'Snorlax', type: 'normal'});  // returns 'Snorlax'


// Create an array of 3-5 objects, where each object describes one of your favorite movies and has properties for the title, genre, and year_released.

var arrOfObj = [{
    title:"Intestellar",
    genre:"SciFi",
    year_released: 2014
  },
  {
    title:"Fifth Element",
    genre:"SciFi",
    year_released: 1997
  },
  {
    title:"Captain America: Civil War",
    genre:"Action",
    year_released:2016
  }
  ]


// Write a function called whatKindOfRabbit which accepts as an argument an object called rabbit. Make the function log to the console the type property of the object, like this:

// This is a ______ rabbit
var whiteRabbit = {
  type: "white"
}
var fatRabbit = {
  type: "fat"
}

function whatKindOfRabbit(rabbit) {
  return "This is a " + rabbit.type + " rabbit";
}

console.log("What type of rabbit:", whatKindOfRabbit(whiteRabbit));
console.log("What type of rabbit:", whatKindOfRabbit(fatRabbit));


// Create two objects: 1. An object called cat. This object will contain the properties kind ("cat") and age (2); 2. An object called mouse. This object will contain the properties kind ("mouse") and age (20);

// Write a function called whoIsWiser that accepts two objects as arguments: firstAnimal and secondAnimal. Have the function compare the age property of the two objects


var cat1 = {
  kind: "cat",
  age: 2
}

var mouse1 = {
  kind: "mouse",
  age: 20
}

function whoIsWiser(firstAnimal, secondAnimal) {
  if (firstAnimal.age === secondAnimal.age) {
    return "These two are equal in wisdom";
  } else {
    var olderAnimal = secondAnimal.kind;
    var youngerAnimal = firstAnimal.kind;
    if (firstAnimal.age > secondAnimal.age) {
      olderAnimal = firstAnimal.kind;
      youngerAnimal = secondAnimal.kind;
    }
    return "The "+ olderAnimal +" is wiser than the " + youngerAnimal;
  }
}

console.log("cat age vs mouse age:", whoIsWiser(cat1, mouse1));

// write a function called dialogue that would accepts as arguments two objects, speaker1 and speaker2. Inside the function, log to the console words arrays of both speakers as follows:

var mouse = {
    name: "French Mouse",
    words:[ "Would YOU like cats if you were me?",
          "As if I would talk on such a subject! Our family always HATED cats: nasty, low, vulgar things! Don't let me hear their name again!",
          "Nothing. The mouse is leaving."]
}

var girl = {
  name: "Alice",
  words: [ "Oh, I beg your pardon! I quite forgot you didn't like cats.",
          "Well, perhaps not. We won't talk about cats any more if you'd rather not.",
          "I won't indeed! Are you--are you fond--of--of dogs?"]
}


function dialogue(speaker1, speaker2) {
  console.log(speaker1.words.length)
  for (var i = 0; i < speaker1.words.length; i++) {
    console.log(speaker1.name, "says", speaker1.words[i]);
    console.log(speaker1.name, "says", speaker2.words[i]);
  }
}
console.log("Conversation between two objects:", dialogue(mouse, girl))


// Create an empty object called rabbit. Add a function called speak as a property to your object. This function will accept a single argument and log to the console "The rabbit says: " followed by the argument. Call the function with the string "Can I have some lettuce?".

var rabbit = { 
  speak: function speak(arg){
    console.log("The rabbit says:", arg)
  }
};

rabbit.speak("Can I have some lettuce?");


// Write a function called objSize that takes this object as its input and return the object's size (number of properties in the object) as its output.

var student = { 
  name : "Tony Stark", 
  university: "MIT", 
  Major: "Physics",
  age : 40
};


function objSize(obj){
  console.log(Object.keys(obj).length)
}
objSize(student); //returns 4


// You are helping create a simple text-based role playing game. The Following code is given:

var player1 = {
    name: "Player",
    attack: 2
}

var monster1 = {
    name: "Goblin",
    hp:10,
    gotHit: function(damage){
        // If damage would bring hp to less then zero, setting hp to zero
        this.hp = (this.hp - damage >= 0) ? (this.hp - damage) : (0);
        // Printing out how much hp the monster has left
        console.log(this.name + " has " + this.hp + " hp");
    },
    // Call this function to check if the monster is dead
    isDead: function(){
        return this.hp === 0;
    }
}

// Write a new function fight(player, monster)
function fight(player, monster){
  
 while (!(monster.isDead())){
      console.log(player.name, "hit", monster.name)
      monster.gotHit(player.attack);
  }
  return monster.name + "has been defeated"
}

console.log(fight(player1, monster1))