let featuredPost=["Checkout my netflix clone","Here is the code for my project","I have relaunched my protofolio"];
let players=["Virat","Kohli","MSD","Kl","Sky","rohit"];
let sam=['Sameer',22,false];

//push() is the method to add an element into Array
players.push('ABD');
console.log(players);

//pop() is the method to remove last element from Array
players.pop();
console.log(players);

for(let count=10;count<=100;count+=10)
{
    console.log(count);
}

for(let i=0;i<players.length;i++)
{
    console.log(players[i]);
}

function rollDice()
{
    let n=Math.floor(Math.random()*6)+1;
    console.log(n);
}
rollDice();

let hasSolvedChallenge=false;
let hasHintsLeft=false;
if(!hasSolvedChallenge && !hasHintsLeft)
{
    showSolution();
}
function showSolution()
{
    console.log('Solution is Generated');
}