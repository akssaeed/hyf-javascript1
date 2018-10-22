// Home Work Part 1
var Lang = "in English";
console.log("Hello World "+ Lang); //English
var Lang = "in Nederlands";
console.log("Hallo wereld "+ Lang); //Dutch
var Lang = "en Français";
console.log("Bonjour le monde "+ Lang); //Frensh
var Lang = "in italiano";
console.log("Ciao mondo " + Lang); //Italian
var Lang = "en español";
console.log("Hola mundo " + Lang); //Spanish

/* Home Work Part 2
console.log('I'm awesome'); have an error and should be like following */
console.log('I\'m awesome');

//part 3
var x ;
 console.log('the value of my variable x will be: undefined');
 console.log(x);
 
var x = 5;
 console.log('the value of my variable x will be: number > 5');
 console.log(x);
 
 //part 4
 var y ;
 console.log('the value of my variable y will be: undefined');
 console.log(y);
 
 var y = "Just I add this words to test";
 console.log('the value of my variable y will be: string > Just I add this words to test');
 console.log(y);

//part 5 
 var z = 7.25;
 console.log(z);
 
 var a = Math.round(z);
 console.log(a);
 
 var n = Math.max(a, z);
 console.log(n);
 
 //part 6
 var myFavoriteAnimals = [];
 console.log("the value of my Arry will be: Empty or null");
 console.log(myFavoriteAnimals);
 
 myFavoriteAnimals.push("Cats","Dogs","Birds");
 console.log(myFavoriteAnimals);
 
 myFavoriteAnimals.push("baby pig"); 
 console.log(myFavoriteAnimals);
 
 //part 7
 let myString = "this is a test";
 var l = myString.length;
 console.log('The length of my string is '+ l + ' letters');
 
 //part 8
 let g = 5;
 let h = "My String";
 let j = ['First','Second','Third'];
 let k = true;
 
 console.log('The value of my variable g is: ' + g);
 console.log('The value of my variable h is: ' + h);
 console.log('The value of my variable j is: ' + j);
 console.log('The value of my variable k is: ' + k);
 
 if (g===h===j===k) {
    console.log('g\,h\,j and k are SAME TYPE');
	}else{
		console.log('g\,h\,j and k are NOT SAME TYPE');
	}
	
//part 9

var x = 7;
var x = x % 3;
 console.log('The value of my variable x is: 1');
 console.log(x);
 
var x = 9;
var x = x % 3;
 console.log('The value of my variable x is: 0');
 console.log(x);
 
var x = 15;
var x = x % 4;
 console.log('The value of my variable x is: 3');
 console.log(x);
 
var x = 150;
var x = x % 8;
 console.log('The value of my variable x is: 6');
 console.log(x);
 
//part 10
var myTestArray = [];
myTestArray.push("String",5);
console.log(myTestArray);
console.log(typeof myTestArray[0]);
console.log(typeof myTestArray[1]);


var x = 6/0;
var y = 10/0;
console.log(x);
console.log(y);
console.log(typeof x);
console.log(typeof y);
if (x===y) {
    console.log('x and y are same Value');
	}else{
		console.log('x and y are not same Value');
	}
 
 
 
 /*let foo = 3;
console.log('The value of my variable foo is: '+ typeof foo + ' and he is '  + foo);*/
 
 
 















