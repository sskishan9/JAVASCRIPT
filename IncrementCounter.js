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

function save()
{
    console.log(count);
}
let username='Sameer'
let msg='You have three new notifications';
console.log(username+' '+msg);

let name='Sameer Kishan';
let greeting='Hi, my name is ';
let mygreeting=greeting+' '+name;
console.log(mygreeting);
