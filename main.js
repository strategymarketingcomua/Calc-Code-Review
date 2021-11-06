

document.querySelector('.get-result').onclick = getResult;
const error = "Error: Указаны не все параметры, или результат не равен числу.";
function getResult() {
  
  let resultCalc;
  const oneOperand = getValueOneOperand();
  const twoOperand = getValueTwoOperand();
  const operation = getChoiseOperation();

  if (!(oneOperand === null) && !(twoOperand === null)) {

    switch (getChoiseOperation()) {
      case "+":
        resultCalc = oneOperand + twoOperand;
        break;
      case "-":
        resultCalc = oneOperand - twoOperand;
        break;
      case "/":
        resultCalc = oneOperand / twoOperand;
        break;
      case "%":
        resultCalc = oneOperand % twoOperand;
        break;
      case "**":
        resultCalc = oneOperand ** twoOperand;
        break;
      default:
        resultCalc = "unknown operation";
    }
  } else {
    resultCalc = error;
  }; 
  writeResult(checkResult(resultCalc));
};
function checkResult(resultCalc) {
  if ((resultCalc === Infinity) || isNaN(resultCalc) ||(resultCalc === -Infinity) ) {
    return resultCalc = error;
  } else {
    return resultCalc;
  }
}

function getValueOneOperand() {
  valueOperandOne = document.querySelector(".operand-one").value;
  if (valueOperandOne === "") {
    return null
  } else {

    return Number(valueOperandOne);
  }
};

function getValueTwoOperand() {
  valueOperandTwo = document.querySelector(".operand-two").value;
  if (valueOperandTwo === "") {
    return null

  } else {
    return Number(valueOperandTwo);
  }
};

function getChoiseOperation() {
  return valueChoiseOperation = document.querySelector(".item-operand").value
};

function writeResult(writeResult) {
   
      document.querySelector(".result-calc").innerHTML = writeResult;
 
  };