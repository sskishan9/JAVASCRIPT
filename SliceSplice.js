const characters=['Sameer','Kishan','Varma','Virat','Kohli'];
const copyArr=[...characters];
copyArr.splice(0,2);
console.log(copyArr);
copyArr.splice(copyArr.length,1,'SameerKishan');
console.log(copyArr);
const arr=characters.splice(0,2);
console.log(arr);
console.log(characters);