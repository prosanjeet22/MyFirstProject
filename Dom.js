//console.dir(document)
// console.log("hello javascript")
// let item=document.getElementById('headder');
// item.style.border="2px solid black";
// let newItm=document.querySelector('#itemName')
// console.log(newItm);
// newItm.style.color="green";
// let items=document.getElementsByClassName('list-group-item');
// console.log(items);
// items[2].style.backgroundColor="green";

// for(let i=0;i<items.length;i++)
// {
//     items[i].style.fontStyle="italic"
// }

let itemList=document.querySelector('#items');
// console.log(itemList.parentNode);
// console.log(itemList.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode);

 // parentElement
// console.log(itemList.parentElement);
// console.log(itemList.parentElement.parentElement);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// console.log(itemList.children[1]);
// itemList.children[2].style.backgroundColor='yellow'

// console.log(itemList.firstElementChild);
// console.log(itemList.lastElementChild);
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling)
// console.log(itemList.previousElementSibling)
itemList.previousElementSibling.style.backgroundColor="yellow";
 let div=document.createElement('div');
 div.className="parentDiv";
 div.id="newDiv";
 div.setAttribute('title',"helloDiv");
 let textNode=document.createTextNode("Hello Word")
 div.appendChild(textNode)
 console.log(div)
 console.log(textNode)