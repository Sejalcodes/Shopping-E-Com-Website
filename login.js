const form = document.querySelector("form"),
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");

form.onsubmit = (e) =>{
  e.preventDefault();
  if (eInput.value == "") {
    eField.classList.add("error");
  } else {
    isValidEmail();
  }
  if (pInput.value == "") {
    pField.classList.add("error");
  } else {
    isValidPass();
  }
}

eInput.onkeyup = ()=>{
  isValidEmail();
}
pInput.onkeyup = ()=>{
  isValidPass();
}

function isValidEmail() {
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!eInput.value.match(pattern)) {
    eField.classList.add("error");
    let errorTxt = eField.querySelector(".error-txt");
    (eInput.value != "")? errorTxt.innerText = "Enter a valid email id" : errorTxt.innerText = "Email can't be blank";
  } else {
    eField.classList.remove("error");
  }
}

function isValidPass() {
  if (pInput.value == "") {
    pField.classList.add("error");
  } else {
    pField.classList.remove("error");
  }
}

//ERROR - Console log not working, it shows the form submitted msg by default, couldn't understand debugger prompts either
if (!eField.classList.contains("error") && !pField.classList.contains("error")) {
  window.location.href = "#";
  console.log("Form submitted!")
}

//Clearing form after submission
const loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', () => {
  const emailInput = document.getElementById('emailInput');
  const passInput = document.getElementById('passInput');
  emailInput.value = "";
  passInput.value = "";
})