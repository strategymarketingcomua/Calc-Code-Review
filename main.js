document.querySelector('.get-result').onclick = getResult;

let error = "Error: Указаны не все параметры, или результат не равен числу.";

function getResult() {
  let resultCalc;
  getValueOneOperand();
  getValueTwoOperand();
  getChoiseOperation();

  if ((getValueOneOperand() !== NaN) && (getValueTwoOperand() !== NaN)) {

    switch (getChoiseOperation()) {
      case "+":
        resultCalc = getValueOneOperand() + getValueTwoOperand();
        break;
      case "-":
        resultCalc = getValueOneOperand() - getValueTwoOperand();
        break;
      case "/":
        resultCalc = getValueOneOperand() / getValueTwoOperand();
        break;
      case "%":
        resultCalc = getValueOneOperand() % getValueTwoOperand();
        break;
      case "**":
        resultCalc = getValueOneOperand() ** getValueTwoOperand();
        break;
      default:
        resultCalc = "unknown operation";
    }
  } else {
    resultCalc = error;
  };
  writeResult(resultCalc);



};

function getValueOneOperand() {
  return valueOperandOne = +document.querySelector(".operand-one").value
};

function getValueTwoOperand() {
  return valueOperandTwo = +document.querySelector(".operand-two").value
};

function getChoiseOperation() {
  return valueChoiseOperation = document.querySelector(".item-operand").value
};

function writeResult(writeResult) {
   
      document.querySelector(".result-calc").innerHTML = writeResult;
 
  };