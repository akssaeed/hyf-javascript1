//step 3
let myIdcard = {
    firstName : 'Abdulkader',
    lastName : 'Alsaid',
    myAge : 43,
    myLenght : 170,
    mySons : ['Raghad','Salah','Mohamed'],
    fullName : function (){
        return this.firstName + ' '+ this.lastName;
    }

};
console.log(myIdcard.fullName()+' is'+' ' + myIdcard.myAge+' and '+myIdcard.myLenght+' CM length'+' and has '+ myIdcard['mySons'].length +' sons'+' their names are :' + myIdcard['mySons']);