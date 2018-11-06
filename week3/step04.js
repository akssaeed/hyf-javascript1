//step 4
function vehicleType(color,code) {
     if (color=='blue' && code==1){
         console.log ('a ' + color + ' ' + 'car');
         
     } else if (color=='blue' && code==2){
         console.log('a '+ color + ' ' +'motorbike');
         
     } else {
         console.log('The vehicle dosn\'t exit sorry ');
    
    }
}
vehicleType('blue', 1)
vehicleType('blue', 2)
vehicleType('other', 1)
vehicleType('other', 2)