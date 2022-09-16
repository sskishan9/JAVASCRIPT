let course={
    title:'Learn CSS Grid for Free',
    lessons:16,
    creator:'Sameer',
    length:63,
    level:2,
    isFree:true,
    tags:['html','css']
}
console.log(course.length)
console.log(course.tags);

let castle={
    title:'Live like a king in my castle',
    price:190,
    isSuperHost:true,
    images:['img/castle1.png','img/castle2.png']

}
console.log(castle.price);
console.log(castle.isSuperHost);

let person={
    name:'Sameer',
    age:'22',
    country:'India'
}

function logData()
{
    let s=person.name+" is "+person.age+' years old who lives in '+person.country;
    return s;
}
console.log(logData());