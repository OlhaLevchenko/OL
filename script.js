//document.getElementById("b1").addEventListener("click", f1)
document.getElementById("x").addEventListener("input", checkAllInputs)
document.getElementById("b1").addEventListener("click", check)

let firstNumberSel = document.getElementById("fn")
let secondNumberSel = document.getElementById("b")
let operationSel = document.getElementById("action")
let resultSel = document.getElementById("x")
let selectedValue = document.getElementById("action").value;


function checkAllInputs(){
  let firstNumber = parseInt(firstNumberSel.value)
  let secondNumber = parseInt(secondNumberSel.value)
  if (Number.isInteger(firstNumber) && Number.isInteger(secondNumber) && operationSel.value != 'none'){
  document.getElementById("b1").removeAttribute("disabled");}
 }

function check(){
  
  let a = parseInt(firstNumberSel.value)
  let b = parseInt(secondNumberSel.value)
  let x = parseInt(selectedValue.value)

  let summa = null
  
  switch (action.value) {
    case '+':
      summa = a + b;
      break;
    case '-':
      summa = a - b;
      break;
    case '*':
      summa = a * b;
      break;
  }


//function f1(){
  
  //let a = parseInt(number1.value)
 // let b = parseInt(number2.value)
 // let x = parseInt(result.value)
  //let summa = a + b
  //let razn = a - b
  //let pr = a * b
  let message = ""
  let backgroundColor = "lightgreen"
  let selectedValue = document.getElementById("action").value;
  
  
 if (x == summa){
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
  selectedValue = ""  
  //message = ""  

}








