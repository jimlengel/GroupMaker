// place all the people into an Array

function createGroupings(person, include, exclude) {

//var person = ["Alex", "Barb", "Carrie", "David", "Ellen", "Fred"];

var group1 = [];
var group2 = [];

// From the drop-downs, place a 1 for a yes, 0 for nothing, and -1 for a no.
// person0 is Alex in the example. person0and1 means Alex with Barb.
// Since the value is 1, it means Alex wants to be in a group with Barb.



// if include[0] == person[x] ->  1
// if include[0] != person[x] ->  0
// if exclude[0] == person[x] -> -1

/*
if (include[0] === person[x]) {
  person0andX = 1
} else {
  if (exclude[0] === person[x]) {
    person0andX = -1;
  } else {
    person0andX = 0;
  }
}

var personYandX = (include[y]===person[x])?1:(exclude[y]===person[x])?-1:0;

var str = '';
var $body = document.getElementsByTagName('body')[0];
var $add = document.createElement('PRE');
for (var y=0; y<6; y++) {
  for (var x=0; x<6; x++) {
    if (x===y) continue;
    str += 'var person'+y+'and'+x+' = ';
    str += '(include['+y+']===person['+x+'])?1:';
    str += '(exclude['+y+']===person['+x+'])?-1:0';
    $add.innerHTML += str+"\n";
    str = '';
  }
}
$body.appendChild($add);


*/

var person0and1 = (include[0]===person[1])?1:(exclude[0]===person[1])?-1:0
var person0and2 = (include[0]===person[2])?1:(exclude[0]===person[2])?-1:0
var person0and3 = (include[0]===person[3])?1:(exclude[0]===person[3])?-1:0
var person0and4 = (include[0]===person[4])?1:(exclude[0]===person[4])?-1:0
var person0and5 = (include[0]===person[5])?1:(exclude[0]===person[5])?-1:0
var person1and0 = (include[1]===person[0])?1:(exclude[1]===person[0])?-1:0
var person1and2 = (include[1]===person[2])?1:(exclude[1]===person[2])?-1:0
var person1and3 = (include[1]===person[3])?1:(exclude[1]===person[3])?-1:0
var person1and4 = (include[1]===person[4])?1:(exclude[1]===person[4])?-1:0
var person1and5 = (include[1]===person[5])?1:(exclude[1]===person[5])?-1:0
var person2and0 = (include[2]===person[0])?1:(exclude[2]===person[0])?-1:0
var person2and1 = (include[2]===person[1])?1:(exclude[2]===person[1])?-1:0
var person2and3 = (include[2]===person[3])?1:(exclude[2]===person[3])?-1:0
var person2and4 = (include[2]===person[4])?1:(exclude[2]===person[4])?-1:0
var person2and5 = (include[2]===person[5])?1:(exclude[2]===person[5])?-1:0
var person3and0 = (include[3]===person[0])?1:(exclude[3]===person[0])?-1:0
var person3and1 = (include[3]===person[1])?1:(exclude[3]===person[1])?-1:0
var person3and2 = (include[3]===person[2])?1:(exclude[3]===person[2])?-1:0
var person3and4 = (include[3]===person[4])?1:(exclude[3]===person[4])?-1:0
var person3and5 = (include[3]===person[5])?1:(exclude[3]===person[5])?-1:0
var person4and0 = (include[4]===person[0])?1:(exclude[4]===person[0])?-1:0
var person4and1 = (include[4]===person[1])?1:(exclude[4]===person[1])?-1:0
var person4and2 = (include[4]===person[2])?1:(exclude[4]===person[2])?-1:0
var person4and3 = (include[4]===person[3])?1:(exclude[4]===person[3])?-1:0
var person4and5 = (include[4]===person[5])?1:(exclude[4]===person[5])?-1:0
var person5and0 = (include[5]===person[0])?1:(exclude[5]===person[0])?-1:0
var person5and1 = (include[5]===person[1])?1:(exclude[5]===person[1])?-1:0
var person5and2 = (include[5]===person[2])?1:(exclude[5]===person[2])?-1:0
var person5and3 = (include[5]===person[3])?1:(exclude[5]===person[3])?-1:0
var person5and4 = (include[5]===person[4])?1:(exclude[5]===person[4])?-1:0

/* 
// Hard coded variables for testing...
var person0and1 = 1;
var person0and2 = 1;
var person0and3 = 0;
var person0and4 = 0;
var person0and5 = 0;


var person1and0 = 1;

var person1and2 = 1;
var person1and3 = -1;
var person1and4 = 0;
var person1and5 = 0;


var person2and0 = 1;
var person2and1 = 1;

var person2and3 = -1;
var person2and4 = 0;
var person2and5 = 0;


var person3and0 = 0;
var person3and1 = 1;
var person3and2 = -1;

var person3and4 = 0;
var person3and5 = 0;


var person4and0 = 0;
var person4and1 = 1;
var person4and2 = 0;
var person4and3 = -1;

var person4and5 = 0;


var person5and0 = 0;
var person5and1 = 1;
var person5and2 = 0;
var person5and3 = -1;
var person5and4 = 0;
*/
//create random number from 0 to 6

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//console.log(getRandomNumber(0,5));

// group 1 creation

var group1Score = "0"; // this is the score for the best grouping
var group1Group = ""; // this is the name of the group with the best score

// This FOR loop selects 3 random numbers, places them in order from smallest to largest,
// then finds the 'score' of that group. It loops 99 times and keeps updating the group1Score variable.

for (i = 1; i < 100; i++) {

    // create 3 random numbers

    console.log("Round number " + i + " =======");

    var randomPick1 = getRandomNumber(0,5);
    console.log('Random 1: ' + randomPick1);

    var randomPick2 = getRandomNumber(0,5);
    console.log('Random 2: ' + randomPick2);

    var randomPick3 = getRandomNumber(0,5);
    console.log('Random 3: ' + randomPick3);


    // if random number 2 is the same as random number 1, create a new random number 2

    while (randomPick2 == randomPick1){
        randomPick2 = getRandomNumber(0,5);
        console.log('Random 2: ' + randomPick2);
    }


    // if random number 3 is the same as random number 1 or 2, create a new random number 3

    while (randomPick3 == randomPick1 || randomPick3 == randomPick2){
        randomPick3 = getRandomNumber(0,5);
        console.log('Random 3: ' + randomPick3);
    }


    // put the 3 numbers in order from low to high (this greatly reduces the number of combinations...

    var group1Randoms = [randomPick1, randomPick2, randomPick3];
    group1Randoms.sort();
    console.log(group1Randoms);
    randomPick1 = group1Randoms[0];
    randomPick2 = group1Randoms[1];
    randomPick3 = group1Randoms[2];


    // find the score of group 1 === this is HARD!!!

    if (randomPick1 == 0 && randomPick2 == 1 && randomPick3 == 2){
        var currentScore01 = person0and1 + person0and2 + person1and0 + person1and2 + person2and0 +person2and1;
        console.log("person 0 1 2");
        console.log("Current Score " + currentScore01);
            if (currentScore01 > group1Score){
                group1Score = currentScore01;
                group1Group = '012';
                currentScore01 = 'high';
            }
    }

    if (randomPick1 == 0 && randomPick2 == 1 && randomPick3 == 3){
        var currentScore02 = person0and1 + person0and3 + person1and0 + person1and3 + person3and0 +person3and1;
        console.log("person 0 1 3")
        if (currentScore02 > group1Score){
            group1Score = currentScore02;
            group1Group = '013';
            currentScore02 = 'high';
        }
    }

    if (randomPick1 == 0 && randomPick2 == 1 && randomPick3 == 4){
        var currentScore03 = person0and1 + person0and4 + person1and0 + person1and4 + person4and0 +person4and1;
        console.log("person 0 1 4")
        if (currentScore03 > group1Score){
            group1Score = currentScore03;
            group1Group = '014';
            currentScore03='high';
        }
    }

    if (randomPick1 == 0 && randomPick2 == 1 && randomPick3 == 5){
        var currentScore04 = person0and1 + person0and5 + person1and0 + person1and5 + person5and0 +person5and1;
        console.log("person 0 1 5")
        if (currentScore04 > group1Score){
            group1Score = currentScore04;
            group1Group = '015';
            currentScore04='high';
        }
    }

    if (randomPick1 == 0 && randomPick2 == 2 && randomPick3 == 3){
        var currentScore05 = person0and2 + person0and3 + person2and0 + person2and3 + person3and0 +person3and2;
        console.log("person 0 2 3")
        if (currentScore05 > group1Score){
            group1Score = currentScore05;
            group1Group = '023';
            currentScore05='high';
        }
    }

    if (randomPick1 == 0 && randomPick2 == 2 && randomPick3 == 4){
        var currentScore06 = person0and2 + person0and4 + person2and0 + person2and4 + person4and0 +person4and2;
        console.log("person 0 2 4")
        if (currentScore06 > group1Score){
            group1Score = currentScore06;
            group1Group = '024';
            currentScore06='high';
        }
    }

    if (randomPick1 == 0 && randomPick2 == 2 && randomPick3 == 5){
        var currentScore07 = person0and2 + person0and5 + person2and0 + person2and5 + person5and0 +person5and2;
        console.log("person 0 2 5")
        if (currentScore07 > group1Score){
            group1Score = currentScore07;
            group1Group = '025';
            currentScore07='high';
        }
    }

    if (randomPick1 == 0 && randomPick2 == 3 && randomPick3 == 4){
        var currentScore08 = person0and2 + person0and4 + person3and0 + person3and4 + person4and0 +person4and3;
        console.log("person 0 3 4")
        if (currentScore08 > group1Score){
            group1Score = currentScore08;
            group1Group = '034';
            currentScore08='high';
        }
    }

    if (randomPick1 == 0 && randomPick2 == 3 && randomPick3 == 5){
        var currentScore09 = person0and2 + person0and5 + person3and0 + person3and5 + person5and0 +person5and3;
        console.log("person 0 3 5")
        if (currentScore09 > group1Score){
            group1Score = currentScore09;
            group1Group = '035';
            currentScore09='high';
        }
    }

    if (randomPick1 == 0 && randomPick2 == 4 && randomPick3 == 5){
        var currentScore10 = person0and4 + person0and5 + person4and0 + person4and5 + person5and0 +person5and4;
        console.log("person 0 4 5")
        if (currentScore10 > group1Score){
            group1Score = currentScore10;
            group1Group = '045';
            currentScore10='high';
        }
    }

    // randomPick==1

    if (randomPick1 == 1 && randomPick2 == 2 && randomPick3 == 3){
        var currentScore11 = person1and2 + person1and3 + person2and1 + person2and3 + person3and1 +person3and2;
        console.log("person 1 2 3")
        if (currentScore11 > group1Score){
            group1Score = currentScore11;
            group1Group = '123';
            currentScore11='high';
        }
    }

    if (randomPick1 == 1 && randomPick2 == 2 && randomPick3 == 4){
        var currentScore12 = person1and2 + person1and4 + person2and1 + person2and4 + person4and1 +person4and2;
        console.log("person 1 2 4")
        if (currentScore12 > group1Score){
            group1Score = currentScore12;
            group1Group = '124';
            currentScore12='high';
        }
    }

    if (randomPick1 == 1 && randomPick2 == 2 && randomPick3 == 5){
        var currentScore13 = person1and2 + person1and5 + person2and1 + person2and5 + person5and1 +person5and2;
        console.log("person 1 2 5")
        if (currentScore13 > group1Score){
            group1Score = currentScore13;
            group1Group = '025';
            currentScore13='high';
        }
    }

    if (randomPick1 == 1 && randomPick2 == 3 && randomPick3 == 4){
        var currentScore14 = person1and3 + person1and4 + person3and1 + person3and4 + person4and1 +person4and3;
        console.log("person 1 3 4")
        if (currentScore14 > group1Score){
            group1Score = currentScore14;
            group1Group = '134';
            currentScore14='high';
        }
    }

    if (randomPick1 == 1 && randomPick2 == 3 && randomPick3 == 5){
        var currentScore15 = person1and3 + person1and5 + person3and1 + person3and5 + person5and1 +person5and3;
        console.log("person 1 3 5")
        if (currentScore15 > group1Score){
            group1Score = currentScore15;
            group1Group = '135';
            currentScore15='high';
        }
    }

    if (randomPick1 == 1 && randomPick2 == 4 && randomPick3 == 5){
        var currentScore16 = person1and4 + person1and5 + person4and1 + person4and5 + person5and1 +person5and4;
        console.log("person 1 4 5")
        if (currentScore16 > group1Score){
            group1Score = currentScore16;
            group1Group = '145';
            currentScore16='high';
        }
    }

    // random pick == 2
    // ====================================
    if (randomPick1 == 2 && randomPick2 == 3 && randomPick3 == 4){
        var currentScore17 = person2and3 + person2and4 + person3and2 + person3and4 + person4and2 +person4and3;
        console.log("person 2 3 4")
        if (currentScore17 > group1Score){
            group1Score = currentScore17;
            group1Group = '234';
            currentScore17='high';
        }
    }

    if (randomPick1 == 2 && randomPick2 == 3 && randomPick3 == 5){
        var currentScore18 = person2and3 + person2and5 + person3and2 + person3and5 + person5and2 +person5and3;
        console.log("person 2 3 5")
        if (currentScore18 > group1Score){
            group1Score = currentScore18;
            group1Group = '235';
            currentScore18='high';
        }
    }

    if (randomPick1 == 2 && randomPick2 == 4 && randomPick3 == 5){
        var currentScore19 = person2and4 + person4and2 + person4and2 + person4and5 + person5and2 +person5and4;
        console.log("person 2 3 4")
        if (currentScore19 > group1Score){
            group1Score = currentScore19;
            group1Group = '234';
            currentScore19='high';
        }
    }

    if (randomPick1 == 2 && randomPick2 == 4 && randomPick3 == 5){
        var currentScore20 = person2and4 + person4and2 + person4and2 + person4and5 + person5and2 +person5and4;
        console.log("person 2 4 5")
        if (currentScore20 > group1Score){
            group1Score = currentScore20;
            group1Group = '245';
            currentScore20='high';
        }
    }

    // random pick = 3

    if (randomPick1 == 3 && randomPick2 == 4 && randomPick3 == 5){
        var currentScore21 = person3and4 + person3and5 + person4and3 + person4and5 + person5and3 +person5and4;
        console.log("person 3 4 5")
        if (currentScore21 > group1Score){
            group1Score = currentScore21;
            group1Group = '345';
            currentScore21='high';
        }
    }

console.log('This loop was performed '+i+ ' times.');
}

// ====================================

// group1Score is the best possible score for the combination of people for group1.

console.log("The following score is computed by ");
console.log("creating either a +1 when a person wants to include that person  ");
console.log("and a -1 when a person wants to exclude that person.");

console.log("Group 1 Score is: " + group1Score);

// this is the 3-number index of the array of people in group 1.
console.log("Group 1 Group is (index): " + group1Group);


var group1person1 = group1Group.charAt(0);
console.log('index 0 is '+group1person1);
var group1person1name = person[group1person1];
console.log('Person that represents index 0 is '+person[group1person1]); // This is the first person in group 1

var group1person2 = group1Group.charAt(1);
console.log('index 1 is '+group1person2);
var group1person2name = person[group1person2];
console.log('Person that represents index 1 is '+person[group1person2]); // This is the second person in group 1

var group1person3 = group1Group.charAt(2);
console.log('index 2 is '+group1person3);
var group1person3name = person[group1person3];
console.log('Person that represents index 2 is '+person[group1person3]); // This is the third person in group 1


// This is not used, but I am hesitant to delete it yet...
group1person1 = Number(group1person1);
group1person2 = Number(group1person2);
group1person3 = Number(group1person3);
sumGroup1=group1person1+group1person2+group1person3;
//console.log('sum = '+sumGroup1);




numArray6 = [0,1,2,3,4,5];

var group1Array = [group1person1, group1person2, group1person3];
//console.log('group 1 array is ' + group1Array);


// The following 6 variables return true or false to determine if they are in group 1 (true)
// or group 2 (false)
var contains0 = _.contains(group1Array, 0);
var contains1 = _.contains(group1Array, 1);
var contains2 = _.contains(group1Array, 2);
var contains3 = _.contains(group1Array, 3);
var contains4 = _.contains(group1Array, 4);
var contains5 = _.contains(group1Array, 5);


// building group 1 array - if true, then 'push' the person into group 1 array

if (contains0){
    group1.push(person[0])
}
if (contains1){
    group1.push(person[1])
}
if (contains2){
    group1.push(person[2])
}
if (contains3){
    group1.push(person[3])
}
if (contains4){
    group1.push(person[4])
}
if (contains5){
    group1.push(person[5])
}

// building group 2 array - if false, then 'push' the person into group 2 array

if (!contains0){
    group2.push(person[0])
}
if (!contains1){
    group2.push(person[1])
}
if (!contains2){
    group2.push(person[2])
}
if (!contains3){
    group2.push(person[3])
}
if (!contains4){
    group2.push(person[4])
}
if (!contains5){
    group2.push(person[5])
}

console.log("Group 1 is "+ group1);
console.log("Group 2 is "+ group2);

// to return one array, combine (concat) the two arrays, group 1 first and group 2 second

var groups = group1.concat(group2);
return groups;

}


