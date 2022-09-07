const DATA=[
    {id:1, title:'first'},
    {id:2,title:'second'},
    {id:3,title:'third'},
    {id:4,title:'fourth'}
]


const ItemIndex=DATA.findIndex(el=>el.id===2);
console.log(ItemIndex);

const Item=DATA.find(el=>el.id===2);
console.log(Item);
