let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
favoriteAnimals.splice(1 , 0 ,'meerkat');
console.log(favoriteAnimals);
let countFavAnimlas = favoriteAnimals.length;
let newValue = 0;
while (newValue<countFavAnimlas){
    favoriteAnimals.push[newValue] = newValue;
    newValue += 1;
}
console.log('The new value of the array is ' + ' ' + favoriteAnimals);
console.log('The array has a length of: ' + favoriteAnimals.length);

//Jason does not like 'giraffe', delete this animal from the array.
favoriteAnimals.splice(3 , 1 );
console.log('The new value of the array after delete what Jason doesn\'t like is ' + ' ' + favoriteAnimals);

//first methode to know a postion for element
for( let a = 0; a < favoriteAnimals.length-1; a++){ 
    if ( favoriteAnimals[a] === 'meerkat') {
      console.log('The item you are looking for using methode 1 is at index: ' + a) 
      /* the folowing code to remove meerkat but i want leave it to run second methode
      favoriteAnimals.splice(a,1);
      console.log(favoriteAnimals);*/
    }
    
 }

 
 //second methode to know a postion for element 
 
 let b = favoriteAnimals.indexOf('meerkat');
 console.log('The item you are looking for using methode 2 is at index: ' + b);
favoriteAnimals.splice(b,1);
console.log(favoriteAnimals);