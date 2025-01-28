let hasdot = 0;
let result = document.getElementById("result");

function displayValue(val) {
  if (val == '.' && hasdot == 1) {
    return;
  } else {
    result.value += val;
    if (val == '.') {
      hasdot = 1;
    }
    if (val == '/' || val == '*' || val == '-' || val == '+') {
      hasdot = 0;
    }
  }
}

function solve() {
  let x = result.value;
  let y = eval(x);
  if (y.toString().indexOf('.') >= 0) {
    hasdot = 1;
  } else {
    hasdot = 0;
  }
  if (y == "Infinity") {
    result.value = "Divide BY Zero Error..!"; 
  } else {
    result.value = y;
  }
}

function clearResult() {
  result.value = "";
  hasdot = 0;
}
