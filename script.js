const displayDiv = document.querySelector(".display");
const showOnDisplayBtns = document.querySelectorAll(".show-on-display");
const clearDisplay = document.querySelector(".clear-all");
const clearLastLetter = document.querySelector(".remove-last");
const resultBtn = document.querySelector(".equal-btn");

let displayText = "";
const operators = ["+", "-", "*", "/"];

function updateDisplay(displayText) {
  displayDiv.textContent = `${displayText}`;
}

resultBtn.addEventListener("click", () => {
  let cleanedString = displayText.replace(/[^-()\d/*+.]/g, "");
  displayText = eval(cleanedString);
  updateDisplay(displayText);
  displayText = '';
});

clearDisplay.addEventListener("click", () => {
  displayText = "";
  updateDisplay(displayText);
});

clearLastLetter.addEventListener("click", () => {
  displayText = displayText.slice(0, -1);
  updateDisplay(displayText);
});

showOnDisplayBtns.forEach((showOnDisplayBtn) => {
  showOnDisplayBtn.addEventListener("click", () => {
    if (
      operators.includes(showOnDisplayBtn.value) &&
      operators.includes(displayText.slice(-1))
    ) {
      alert("Can't group operators!");
    } else {
      displayText = displayText + showOnDisplayBtn.value;
    }
    updateDisplay(displayText);
  });
});
