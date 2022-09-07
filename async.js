const fetchdata=async()=>{

try{
    const response=await fetch('https://swapi.dev/api/people/');
    if(!response.ok) throw new Error(response.status);

    const result=await response.json
    return result;
}
catch(e)
{
    console.log(e);
}
}