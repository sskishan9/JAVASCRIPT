//Map and Filter both the methods will return any array.
//Filter additionally eliminates items that dont match.
const DATA=[
    {id:1, title:'first'},
    {id:2,title:'second'},
    {id:3,title:'third'},
    {id:4,title:'fourth'}
]
const upperdata=DATA.map(el=>el.title.toUpperCase())
console.table(upperdata);
const modulodata=DATA.filter(el=>el.id % 2 === 0)
console.table(modulodata);
