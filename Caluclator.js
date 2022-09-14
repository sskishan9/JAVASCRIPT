let num1=8;
let num2=4;
document.getElementById('num-el1').textContent=num1;
document.getElementById('num-el2').textContent=num2;
const resultEl=document.getElementById('res-el');
let res=0;
function addNumbers()
{    
     res=num1+num2;
     resultEl.textContent='Result is '+res;
    }
function substractNumbers()
{
    res=num1-num2;
    resultEl.textContent='Result is '+res;
}
function multiplyNumbers()
{
     res=num1*num2;
     resultEl.textContent='Result is '+res;
}
function divideNumbers()
{    
     res=num1/num2;
     resultEl.textContent='Result is '+res;
}



