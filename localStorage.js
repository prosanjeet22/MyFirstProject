
let submitBtn=document.getElementById('addForm');
let addDiv=document.getElementById('displayValue');
submitBtn.addEventListener('submit',addItem);
function addItem(e){
    e.preventDefault();
    console.log("hello")
let userName=document.getElementById('name1').value;
let email=document.getElementById('email1').value;
let pno=document.getElementById('number1').value;
localStorage.setItem('userName',userName);
localStorage.setItem('email',email);
localStorage.setItem('Phone_Number',pno)
console.log('userNmae'+localStorage.getItem('userName'));
console.log('email' +localStorage.getItem('email'));
console.log('Number'+ localStorage.getItem('Phone_Number'));
let newDiv=document.createElement('div');
newDiv.appendChild(document.createTextNode(localStorage.getItem('userName')));
newDiv.appendChild(document.createTextNode(localStorage.getItem('email')));
newDiv.appendChild(document.createTextNode(localStorage.getItem('Phone_Number')));
addDiv.appendChild(newDiv);
}
