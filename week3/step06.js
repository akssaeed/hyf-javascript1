//step 6
function vehicleType(color,code,age) {
    if (color=='blue' && code==1 && age > 1 && age <= 5){
        console.log ('a ' + color + ' ' +'used car');
        
    } else if (color=='blue' && code==2 && age > 1 && age <= 5){
        console.log('a '+ color + ' ' +'used motorbike');
        
    } else if (color=='blue' && code==1 && age ==1){
        console.log ('a ' + color + ' ' +'new car');
        
    } else if (color=='blue' && code==2 && age ==1 ){
        console.log('a '+ color + ' ' +'new motorbike');
    } else {
        console.log('The vehicle dosn\'t exit sorry ');
   
   }
}
vehicleType('blue', 1 , 4)
vehicleType('blue', 2 , 5)
vehicleType('blue', 1 , 1)
vehicleType('other', 2 ,1 )