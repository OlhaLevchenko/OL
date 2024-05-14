document.getElementById("x").addEventListener("input", checkAllInputs)
document.getElementById("butt").addEventListener("click", vibor)

let firstNumberSel = document.getElementById("fn")
let secondNumberSel = document.getElementById("b")
let operationSel = document.getElementById("action")
let resultSel = document.getElementById("x")

function checkAllInputs(){
  let firstNumber = parseInt(firstNumberSel.value)
  let secondNumber = parseInt(secondNumberSel.value)
  if (Number.isInteger(firstNumber) && Number.isInteger(secondNumber) && operationSel.value != 'none'){
  document.getElementById("butt").removeAttribute("disabled");}
 }

function vibor(){
  
  let a = parseInt(firstNumberSel.value)
  let b = parseInt(secondNumberSel.value)
  let r = parseInt(resultSel.value)
  
  let rez = null
  
  switch (action.value) {
    case '+':
      rez = a + b;
      break;
    case '-':
      rez = a - b;
      break;
    case '*':
      rez = a * b;
      break;
  }

let message = ""
let backgroundColor = "lightgreen"

 if (r == rez){
    message = "OK";
  }
  else {
    backgroundColor = "red"
    message = "wrong"
  }


 document.getElementById("result").style.backgroundColor = backgroundColor
 document.getElementById("result").innerHTML = message
  
  firstNumberSel.value = ""
  secondNumberSel.value = ""
  operationSel.value = "none"
  resultSel.value = ""
  message = ""
 
}
 






