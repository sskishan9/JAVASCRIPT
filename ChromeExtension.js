let myLeads=[];
const inputEl=document.getElementById('input-el');
const inputBtn=document.getElementById('input-btn');
let displayEL=document.getElementById('display-el');
const listEl=document.getElementById('list-el');
inputBtn.addEventListener('click',function()
{
    
    myLeads.push(inputEl.value);   
    console.log(myLeads) 

})



