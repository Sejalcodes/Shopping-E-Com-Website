const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
}

function myFunction() {
  alert("Your e-mail has been registered!");
}

//Clearing input field after submission
const signbtn = document.getElementById('signbtn');
signbtn.addEventListener('click',()=>{
  const mailInput = document.getElementById('mailInput');
  mailInput.value = " ";
})



