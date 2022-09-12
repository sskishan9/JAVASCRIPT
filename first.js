Values & Variables


let js='amazing';
if(js === 'amazing') {
    alert('Javascript is Fun!!!');
}
40+8+13-24+31;
console.log(40+8+13-24+31);
let firstname="sameer";
console.log(firstname);

//DataTypes
let javaScriptIsFun=true;
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'Sameer');
console.log(typeof false);

//Declaring Variables

//variables can be reassigned by using let keyword.
//Const variables cannot be muted and should be assigned to some value when declaring.
//var and let will work similar 
let age=30;
age=31;

//Operators
const ageJonas=2037-1991;
const ageSarah=2037-2018;
console.log(ageJonas,ageSarah);
console.log(ageJonas*2,ageJonas/10,2**3);

const fname='Sameer';
const lname="kishan";
console.log(fname+" "+lname);
console.log(ageJonas>ageSarah);

//Asignment1
let markWeight=78;
let markHeight=1.69;
let johnWeight=92;
let johnHeight=1.95;
let bmi1=markWeight/(markHeight**2);
let bmi2=johnWeight/(johnHeight**2);
let markHigherBmi=bmi1>bmi2;
console.log(bmi1,bmi2,markHigherBmi);

//String and Template Literals 
const firstname='Sameer Kishan';
const job='teaching';
const birthyear=2000;
const year =2022;
const res="I'm " + firstname +" of " + (year-birthyear) + " years old and my profession is " + job;
console.log(res);

//Asignment2
let markWeight=78;
let markHeight=1.69;
let johnWeight=92;
let johnHeight=1.95;
let bmi1=markWeight/(markHeight**2);
let bmi2=johnWeight/(johnHeight**2);
if(bmi1>bmi2){
    console.log(`Mark has Higher BMI`);
}
else 
{
    console.log(`John Has Higher BMI`);
}

// === is strictly equal == is loosely equal

//ternary operator 
const bill=275;
const tip=bill<=300 && bill>=50 ? bill*0.15 : bill*0.20;
console.log(bill+tip);









