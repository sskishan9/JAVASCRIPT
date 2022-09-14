//document.getElementById('countel').innerText=9;

let myAge;
myAge=22;
console.log(myAge);

let bonusPoints=50;
bonusPoints+=50;
bonusPoints-=75;
bonusPoints+=45;
console.log(bonusPoints);

//onClick Event Listener
let countEl=document.getElementById("count-el");
console.log(countEl);
let count=0;
function increment()
{
    console.log('clicked');
    count+=1;
    countEl.innerHTML=count;
    
}
function decrement()
{
    count-=1;
    countEl.innerHTML=count;
}
function myLogger()
{
    console.log(42);
}

myLogger();

let lap1=34;
let lap2=33;
let lap3=36;

function lapLogTime()
{
    let totaltime=lap1+lap2+lap3;
    console.log(totaltime);
}
lapLogTime();

let lapsCompleted=0;

function lapIncrementor()
{
    lapsCompleted+=1;
}
lapIncrementor();
lapIncrementor();
lapIncrementor();

console.log(`${lapsCompleted} times i have been icremented`);

let saveEl=document.getElementById('save-el');
function save()
{
    console.log(count);
    saveEl.innerHTML+=count + '-';
    countEl.innerHTML=0;
    count=0;
}
let username='Sameer'
let msg='You have three new notifications';
console.log(username+' '+msg);




//Strings and Numbers 
console.log(5+4);
console.log("2"+4);
console.log("5"+"1");
console.log(100+"100");

let welcomeEl=document.getElementById('welcome-el');
let name='Sameer Kishan';
let greeting='Welcome back';
let mygreeting=greeting+' '+name;
welcomeEl.innerHTML=mygreeting;
welcomeEl.innerHTML+=' '+ "👏";

let firstName='Sameer';
let lastName='Kishan';
let fullName=firstName + ' '+ lastName;
console.log(fullName);

function myName()
{
    let msg='Hi there'+' '+firstName+'!';
    console.log(msg);
}
myName();

let myPoints=3;
console.log(myPoints);

function add3Points()
{
    myPoints+=3;
}
function remove1Point()
{
    myPoints-=1;
}
add3Points();
console.log(myPoints);
remove1Point();
console.log(myPoints);

const errorEl=document.getElementById('error-el');
function error()
{
    let msg='Something went wrong please try again!!!!'
    errorEl.innerHTML=msg;
}

