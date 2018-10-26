// Home Work Part 1
let Lang = "in English";
console.log("Hello World "+ Lang); //English
Lang = "in Nederlands";
console.log("Hallo wereld "+ Lang); //Dutch
Lang = "en Français";
console.log("Bonjour le monde "+ Lang); //Frensh
Lang = "in italiano";
console.log("Ciao mondo " + Lang); //Italian
Lang = "en español";
console.log("Hola mundo " + Lang); //Spanish

/* Home Work Part 2
console.log('I'm awesome'); have an error and should be like following */
console.log('I\'m awesome');

//part 3
let x ;
 console.log('the value of my variable x will be: undefined');
 console.log(x);
 
x = 5;
 console.log('the value of my variable x will be: number > 5');
 console.log(x);
 
 //part 4
let y = "It\'s my life";
 console.log('the value of my variable y will be: undefined');
 console.log(y);
 
y = "Just I add this words to test";
 console.log('the value of my variable y will be: string > Just I add this words to test');
 console.log(y);

//part 5 
let z = 7.25;
 console.log(z);
 
let a = Math.round(z);
 console.log(a);
 
let n = Math.max(a, z);
 console.log(n);
 
 //part 6
let myFavoriteAnimals = [];
 console.log("the value of my Arry will be: Empty or null");
 console.log(myFavoriteAnimals);
 
 myFavoriteAnimals.push("Cats","Dogs","Birds");
 console.log(myFavoriteAnimals);
 
 myFavoriteAnimals.push("baby pig"); 
 console.log(myFavoriteAnimals);
 
 //part 7
let myString = "this is a test";
let l = myString.length;
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
 
 if (g===h) {
    console.log(g , + 'and ' ,+ h ,' are SAME TYPE');
	}else{
		console.log(g , + 'and ' ,+ h ,'are NOT SAME TYPE');
	}
	
 if (g===j) {
    console.log('g and j are SAME TYPE');
	}else{
		console.log('g and j are NOT SAME TYPE');
	}
	
 if (g===k) {
    console.log('g and k are SAME TYPE');
	}else{
		console.log('g and k are NOT SAME TYPE');
	}
	
 if (h===j) {
    console.log('h and j are SAME TYPE');
	}else{
		console.log('h and j are NOT SAME TYPE');
	}
	
 if (h===k) {
    console.log('h and k are SAME TYPE');
	}else{
		console.log('h and k are NOT SAME TYPE');
	}
	
 if (j===k) {
    console.log('j and k are SAME TYPE');
	}else{
		console.log('j and k are NOT SAME TYPE');
	}
	
//part 9

x = 7;
x = x % 3;
 console.log('The value of my variable x is: 1');
 console.log(x);
 
x = 9;
x = x % 3;
 console.log('The value of my variable x is: 0');
 console.log(x);
 
x = 15;
x = x % 4;
 console.log('The value of my variable x is: 3');
 console.log(x);
 
x = 150;
x = x % 8;
 console.log('The value of my variable x is: 6');
 console.log(x);
 
//part 10
let myTestArray = [];
myTestArray.push("String",5);
console.log(myTestArray);
console.log(typeof myTestArray[0]);
console.log(typeof myTestArray[1]);


x = 6/0;
y = 10/0;
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
 
 
 















