//console.dir(document)
console.log("hello javascript")
let item=document.getElementById('headder');
item.style.border="2px solid black";
let newItm=document.querySelector('#itemName')
console.log(newItm);
newItm.style.color="green";
let items=document.getElementsByClassName('list-group-item');
console.log(items);
items[1].style.backgroundColor="yellow"