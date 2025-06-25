'use strict';

const value = document.querySelector("#range-value");
const input = document.querySelector("#range-input");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});