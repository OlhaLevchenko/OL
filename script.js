document.getElementById("b1").addEventListener("click", f1)
document.getElementById("x").addEventListener("input", checkAllInputs)
document.getElementById("check").addEventListener("click", check)

let firstNumberSel = document.getElementById("fn")
let secondNumberSel = document.getElementById("b")
let operationSel = document.getElementById("op")
let resultSel = document.getElementById("sum")


function checkAllInputs(){
  let firstNumber = parseInt(firstNumberSel.value)
  let secondNumber = parseInt(secondNumberSel.value)
  if (Number.isInteger(firstNumber) && Number.isInteger(secondNumber) && operationSel.value != 'none'){
  document.getElementById("check").removeAttribute("disabled");}
  // if (firstNumberSel.value != "" && secondNumberSel.value != "" && operationSel.value != 'none'){
  // document.getElementById("check").removeAttribute("disabled");}
}

function check(){
  
  let a = parseInt(firstNumberSel.value)
  let b = parseInt(secondNumberSel.value)
  let s = parseInt(resultSel.value)

  let summa = null
  
  switch (op.value) {
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


function f1(){

  let number1 = document.getElementById("a")
  let number2 = document.getElementById("b")
  let result = document.getElementById("x")
  
  let a = parseInt(number1.value)
  let b = parseInt(number2.value)
  let x = parseInt(result.value)
  let summa = a + b
  let razn = a - b
  let pr = a * b
  let message = ""
  let backgroundColor = "lightgreen"
  let selectedValue = document.getElementById("action").value;
  
if(selectedValue == "summa"){
  
   if (x == summa){
    message = "OK";
  }
  else {
    backgroundColor = "red"
    message = "wrong"
  }
}
else if (selectedValue == "razn") {
  if (x == razn){
    message = "OK";
  }
  else {
    backgroundColor = "red"
    message = "wrong"
  }
  }
  else if (selectedValue == "pr") {
  if (x == pr){
    message = "OK";
  }
  else {
    backgroundColor = "red"
    message = "wrong"
  }
}

 document.getElementById("result").style.backgroundColor = backgroundColor
  document.getElementById("result").innerHTML = message
  
  number1.value = ""
  number2.value = ""
  result.value = ""
  message = ""  

}








