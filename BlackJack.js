let firstCard=getRandomCard();
let secondCard=getRandomCard();
let cards=[firstCard,secondCard];
let sum=firstCard+secondCard;
let hasBlackJack=false;
let isAlive=false;
let msg=""
let messageEl=document.getElementById('message-el');
let sumEl=document.getElementById('sum-el');
let cardsEl=document.querySelector('#cards-el');

function getRandomCard()
{
    let n=Math.floor(Math.random()*13)+1;
    if(n===1)
    {
        return 11;
    }
    else if(n>10)
    {
        return 10;
    }
    else 
    {
        return n;
    }
}
function startGame()
{   isAlive=true;
    renderGame();
}
function renderGame()
{
    if(sum<=20)
    {
        msg='Do u want to draw a new card';
    }
    else if(sum===21)
    {
        msg='You got the BlackJack';
        hasBlackJack=true;
    }
    else 
    {
        msg='You lost the game';
        isAlive=false;
    }
    messageEl.textContent=msg;
    cardsEl.textContent='Cards are';
    for(let i=0;i<cards.length;i++)
    {
        cardsEl.textContent+=' '+cards[i];
    }
    sumEl.textContent="Sum : "+sum;
    
}

function newCard()
{
    if(isAlive && hasBlackJack)
    {
    console.log('Drawing a new card from Deck');
    let card=getRandomCard();
    sum+=card;
    cards.push(card);
    console.log(cards);
    renderGame();
    }
    
}

