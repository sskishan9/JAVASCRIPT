//spread
const introduction=['my','name','is','Sameer','Kishan'];

const a=[...introduction];
console.log(a);
console.log(...a);

//Rest 
 const getSize=(...args)=>{
    return args.length;
 }

 console.log(getSize(1,2,3,4));
 console.log(getSize(1,2,3,4,5,6,7,8,9,1,2));