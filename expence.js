

let btn=document.getElementById('btn');
let currentBalance=document.getElementById('currentBalance');
let income1 =document.getElementById('income1');
let expense=document.getElementById('expense1');
let History=document.getElementById('History');
let formColor=document.getElementById('formColor');

btn.addEventListener('click',addItme);
function addItme(e){
    //alert('hello');
    e.preventDefault();
    let text=document.getElementById("text").value;
    let amount=document.getElementById("number").value;
    //formColor.style.backgroundColor="#9fafb4";
    if(amount>0)
    {
       
   // console.log(typeof(Number(income1.textContent))+" -- "+typeof(amount));
        income1.textContent=Number(income1.textContent)+Number(amount);

        currentBalance.textContent= Number(currentBalance.textContent)+Number(amount);
    }
    else
    {
        expense.textContent=Number(expense.textContent)+Number(amount);
        currentBalance.textContent=Number(currentBalance.textContent)+Number(amount);
    }

    let parentDiv=document.createElement('div');
    parentDiv.className="card";
    let childDiv=document.createElement('div');
    childDiv.className="card-body";
    let textValue=document.createElement('span');
    textValue.className='card-text';
    textValue.innerHTML=text;

    let spendValue=document.createElement('span');
    spendValue.className='card-text';
    spendValue.innerHTML=amount;
    spendValue.style.marginLeft="30%";
    let btn=document.createElement('button');
    btn.setAttribute("type","button");
    btn.className="btn btn-labeled btn-danger btn11";
    btn.innerHTML="Trash";
    btn.style="float:right";
    parentDiv.style.backgroundColor="#f8f8f8";
    childDiv.appendChild(textValue);
    childDiv.appendChild(spendValue);
    childDiv.appendChild(btn);
    parentDiv.appendChild(childDiv);
    History.appendChild(parentDiv);

    const boxes = document.getElementsByClassName('btn11');
for (const box of boxes) {
  box.addEventListener('click', (event) => {
    //event.target.removeChild(event);
    //event.target.remove();
    event.target.parentElement.remove();
    //event.parentNode.removeChild(event);

  });
}


}

