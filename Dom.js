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

//let itemList=document.querySelector('#items');
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
// itemList.previousElementSibling.style.backgroundColor="yellow";
//  let div=document.createElement('div');
//  div.className="parentDiv";
//  div.id="newDiv";
//  div.setAttribute('title',"helloDiv");
//  let textNode=document.createTextNode("Hello Word")
//  div.appendChild(textNode)
 
//  console.log(div)
//  console.log(textNode)
let form=document.getElementById('addForm');
let itemList=document.getElementById('items');
let filter=document.getElementById('filter');
//console.log(form)
form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems);
itemList
function addItem(e){
    //alert(e)
    e.preventDefault();
    let newItem=document.getElementById('item').value;
    console.log(newItem)
    let li=document.createElement('li');
    li.className='list-group-item';
    console.log(li);
    //add text node with the input value
   li.appendChild(document.createTextNode(newItem));
   let deleteBtn=document.createElement('button');
   deleteBtn.className='btn btn-danger btn-sm float-right delete';
   deleteBtn.appendChild(document.createTextNode('X'));
   li.appendChild(deleteBtn)

    itemList.appendChild(li);
}
//Remove item
function removeItem(e){
console.log(1)
if(e.target.classList.contains('delete')){
    var li=e.target.parentElement;
    itemList.removeChild(li);
}

}
function filterItems(e){
    //Converts in lower case
    let  text=e.target.value.toLowerCase();
    console.log(text);
   let items= itemList.getElementsByTagName('li');
   console.log(items);
   Array.from(items).forEach(function(item){
    let itemName=item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text)!=-1){
        item.style.display='block';
    }
    else
    {
        item.style.display='none'
    }
    console.log(itemName);
   })

}

//add items
// function addItem(e)
// {
//    // e.preventDefault();
//     console.log(1)
// }