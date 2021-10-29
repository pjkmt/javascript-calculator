// Start Function Refresh JavaScript Calculator Display
let drawCalculatorResult = 0;
// console.log(drawCalculatorResult); // testing
let calculatorMathOperationOptions = ['multiply', 'divide', 'add', 'subtract']; // MDAS Math Operations
// console.log(calculatorMathOperationOptions); // testing
let operatingOperation = "";
// console.log(operatingOperation); // testing

function refreshJavaScriptCalculatorDisplay(calculatorInput) {
    
    let calculatorDisplay = document.getElementById("display"); // Primary Display
    // console.log(calculatorDisplay); // testing
    let anotherCalculatorDisplay = document.getElementById("anotherCalculatordisplayID"); // Secondary Display

    // console.log(typeof calculatorDisplay.innerHTML); // using typeOf
    
    if (calculatorDisplay.innerHTML === "0" && calculatorMathOperationOptions.indexOf(calculatorInput) === -1) {
        if (calculatorInput === "decimal") {
          calculatorDisplay.innerHTML = "0.";
        } else if (calculatorInput === "negativeCalculatorValue") {
          if (calculatorDisplay.innerHTML.indexOf("-1") === -1) {
        
            // calculatorDisplay.innerHTML = "-" + calculatorDisplay.innerHTML; // previous code
            calculatorDisplay.innerHTML = "-";
          } else if (calculatorDisplay.innerHTML.indexOf("-1" > -1)) {
            calculatorDisplay.innerHTML = calculatorDisplay.innerHTML.slice(1, calculatorDisplay.innerHTML.length);
          }
        } else {
          calculatorDisplay.innerHTML = calculatorInput;
        }
    } else if (calculatorMathOperationOptions.indexOf(calculatorInput) >= 0) {
      console.log("Dealing with Operation"); // testing

      if (drawCalculatorResult === calculatorDisplay.innerHTML) {
        // if the operand button was selected twice or clicked twice
        // alert(drawCalculatorResult);
        operatingOperation = calculatorInput;
        console.log(operatingOperation);
        
        console.log("Double Operand Selected");
      } else if (operatingOperation === "") {
        // Dealing without operand
        operatingOperation = calculatorInput;
        drawCalculatorResult = calculatorDisplay.innerHTML;
        calculatorDisplay.innerHTML = 0;
      } else {
        // Dealing with a set operand
        console.log(calculatorDisplay.innerHTML, "Dealing with set operand");
        drawCalculatorResult = JavaScriptCalculateInputNumbers(drawCalculatorResult, calculatorDisplay.innerHTML, operatingOperation);
        anotherCalculatorDisplay.innerHTML = drawCalculatorResult;
        calculatorDisplay.innerHTML = 0;
        operatingOperation = calculatorInput;
      }
    } else if (calculatorInput === "equals") {
      
      calculatorDisplay.innerHTML = JavaScriptCalculateInputNumbers(drawCalculatorResult, calculatorDisplay.innerHTML, operatingOperation);
      drawCalculatorResult = 0;
      operatingOperation = "";
    } else if (calculatorInput === "decimal") {
      console.log("You Press Decimal Button"); // testing
      if (calculatorDisplay.innerHTML.indexOf(".") === -1) {
        calculatorDisplay.innerHTML += ".";
      }
      // console.log("Skipped the Decimal Point because the number have Decimal Point");
    } else if (calculatorInput === "negativeCalculatorValue") {
      console.log("Negative Calculator Value Pressed"); // testing
      if (calculatorDisplay.innerHTML.indexOf("-1") === -1) {
        
        // calculatorDisplay.innerHTML = "-" + calculatorDisplay.innerHTML; // The sequence "5 * - + 5" = should produce an output of "10"
        calculatorDisplay.innerHTML = "-";
      } else if (calculatorDisplay.innerHTML.indexOf("-1" > -1)) {
        calculatorDisplay.innerHTML = calculatorDisplay.innerHTML.slice(1, calculatorDisplay.innerHTML.length);
      }
    } else {
        calculatorDisplay.innerHTML += calculatorInput;
    }
    // console.log(drawCalculatorResult, "<- drawCalculatorResult");
    // console.log("False");
    console.log(drawCalculatorResult, "<= drawCalculatorResult", display.innerHTML, " <= display.innerHTML", operatingOperation, "<= operatingOperation"); // testing
}
// End Function Refresh JavaScript Calculator Display

// Start Function Clear Calculator Display
function clearCalculatorDisplay() {
    let calculatorDisplay = document.getElementById("display");
    drawCalculatorResult = 0;
    calculatorDisplay.innerHTML = 0;
}
// End Function Clear Calculator Display

// Start Function JSCalculator
function JavaScriptCalculateInputNumbers(firstInputNumber, secondInputNumber, calculatorOperation) {
  let calculatorResult;
  firstInputNumber = parseFloat(firstInputNumber);
  secondInputNumber = parseFloat(secondInputNumber);
  
  switch (calculatorOperation) {
    case "multiply":
      calculatorResult = firstInputNumber * secondInputNumber;
      break;
    case "divide":
      calculatorResult = firstInputNumber / secondInputNumber; // Code
      break;
    case "add":
      calculatorResult = firstInputNumber + secondInputNumber; // Code
      break;
    case "subtract":
      calculatorResult = firstInputNumber - secondInputNumber; // Code
      break;

    default:
      break;
  }
  return calculatorResult.toString();
}
// End Function JSCalculator

// Start Function Calculator Keyboard Sound
function calculatorKeyboardClickSound() {
    var audioID = document.getElementById("mute-click-sound");
    audioID.play();
}
// End Function Calculator Keyboard Sound

// jQuery Prepend
/* $(document).ready(function(){
    $("#btn1").click(function(){
      $("p").prepend("<b>Prepended text</b>. ");
    });
    $("#btn2").click(function(){
      $("ol").prepend("<li>Prepended item</li>");
    });
  }); */
// 