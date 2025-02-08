let billInput = document.getElementById("bill-input");
let customTip = document.getElementById("custom-tip-input");
let totalPeople = document.getElementById("people-count-input");
let outputSection = document.querySelector(".output-section");
let tipAmount = document.querySelector(".tip-amount-output");
let tipTotal = document.querySelector(".tip-total-output");
let resetButton = document.querySelector(".reset-button");

let root = document.querySelector(":root");
let rs = getComputedStyle(root);

let [...tipValues] = document.querySelectorAll(".tip-value-container div");
let selectedTipAmount;
let totalTipAmount;

tipValues.forEach((ele) => {
  ele.addEventListener("click", () => {
    tipValues.forEach(
      (ele) =>
        (ele.style.backgroundColor = rs.getPropertyValue("--Very-dark-cyan"))
    );

    selectedTipAmount = Number(ele.getAttribute("data-value"));
    console.log(selectedTipAmount);
    ele.style.backgroundColor = rs.getPropertyValue("--Strong-cyan");
    if (totalPeople.value && billInput.value) {
      calculateOutput(selectedTipAmount);
    }
  });
});

outputSection.addEventListener("click", function () {
  calculateOutput(customTip.value ? customTip.value : selectedTipAmount);
});

function calculateOutput(selectedValue) {
  if (billInput.value && totalPeople.value && selectedValue) {
    totalTipAmount = (billInput.value * selectedValue) / 100;

    let totalAmount = Number(billInput.value) + totalTipAmount;

    tipAmount.textContent =
      "$" +
      Number(
        totalPeople.value > 0
          ? (totalTipAmount / totalPeople.value).toFixed(2)
          : ""
      );

    tipTotal.textContent =
      "$" +
      Number(
        totalPeople.value > 0
          ? (totalAmount / totalPeople.value).toFixed(2)
          : ""
      );
  }
}

resetButton.addEventListener("click", function () {
  tipAmount.textContent = "$0.00";
  tipTotal.innerHTML = "$0.00";
  billInput.value = "";
  totalPeople.value = "";
  customTip.value = "";
  selectedTipAmount = null;
  tipValues.forEach(
    (ele) =>
      (ele.style.backgroundColor = rs.getPropertyValue("--Very-dark-cyan"))
  );
});
