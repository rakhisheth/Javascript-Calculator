window.onload = function() {
  let numStr = "";
  let finalCalc = "";

  // NUMBERS

  let displayScreen = document.getElementById("display");
  let realTimeDisplay = document.getElementById("rt-update");

  let obj = {
    1: document.getElementById("n1"),
    2: document.getElementById("n2"),
    3: document.getElementById("n3"),
    4: document.getElementById("n4"),
    5: document.getElementById("n5"),
    6: document.getElementById("n6"),
    7: document.getElementById("n7"),
    8: document.getElementById("n8"),
    9: document.getElementById("n9"),
    0: document.getElementById("n0")
  };

  // CLEARING FUNCTION

  function clear() {
    numStr = "";
    finalCalc = "";
  }

  // NUMBER

  Object.keys(obj).forEach(k =>
    obj[k].addEventListener("click", () => {
      numStr += obj[k].innerHTML;
      finalCalc = eval(numStr);
      displayScreen.innerHTML = numStr;
      realTimeDisplay.innerHTML = finalCalc;
    })
  );

  // ACTIONS

  let actions = {
    1: document.getElementById("add"),
    2: document.getElementById("minus"),
    3: document.getElementById("times"),
    4: document.getElementById("divide")
  };

  Object.keys(actions).forEach(j =>
    actions[j].addEventListener("click", () => {
      numStr += actions[j].innerHTML;
      displayScreen.innerHTML = numStr;
    })
  );

  // DECIMAL

  document.getElementById("decimal").addEventListener("click", () => {
    numStr += ".";
    displayScreen.innerHTML = numStr;
  });

  // CLEAR

  document.getElementById("clear").addEventListener("click", function() {
    numStr = "";
    finalCalc = "";
    displayScreen.innerHTML = 0;
    realTimeDisplay.innerHTML = 0;
  });

  // EQUAL

  document.getElementById("equal").addEventListener("click", () => {
    let result = eval(numStr);
    let final = numStr;
    displayScreen.innerHTML = final;
    document.getElementById("rt-update").innerHTML = result;
    clear();
  });
};
