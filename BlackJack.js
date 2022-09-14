let firstCard=10;
let secondCard=4;
let cards=[firstCard,secondCard];
let sum=firstCard+secondCard;
let hasBlackJack=false;
let isAlive=true;
let msg=""
let messageEl=document.getElementById('message-el');
let sumEl=document.getElementById('sum-el');
let cardsEl=document.querySelector('#cards-el');
function startGame()
{
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
    cardsEl.textContent='Cards are'+' '+cards[0]+' and '+cards[1];
    sumEl.textContent="Sum : "+sum;
    
}

function newCard()
{
    console.log('Drawing a new card from Deck');
    let card=6;
    sum+=card;
    renderGame();
}

