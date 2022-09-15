<script setup>
import { ref } from "vue";

import Screen from "../Screen/Screen.vue";
import Board from "../Board/Board.vue";
import TopBar from "../TopBar/TopBar.vue";

const operation = ref("0");
const result = ref("0");
const error = ref("");
const firstOperator = ref(null);
const operator = ref(null);
const secondOperator = ref(null);

function resultToZero() {
  result.value = "0";
  operation.value = "0";
  firstOperator.value = null;
  operator.value = null;
  secondOperator.value = null;
  error.value = "";
}

function updateOperation(item) {
  if (result.value !== "0") {
    resultToZero();
  }

  error.value = "";
  if (!hasNumber(item) && firstOperator.value) {
    operator.value = item;
  } else if (!operator.value) {
    firstOperator.value = !firstOperator.value
      ? item
      : (firstOperator.value += item);
  } else {
    secondOperator.value = !secondOperator.value
      ? item
      : (secondOperator.value += item);
  }
  updateTextOperation();
}

function updateTextOperation() {
  if (!firstOperator.value) {
    return;
  }
  operation.value = `${firstOperator.value ?? ""} 
                        ${operator.value ?? ""} 
                        ${secondOperator.value ?? ""}`;
}

function hasNumber(text) {
  return /\d/.test(text);
}

function calcResult() {
  if (!firstOperator.value || !operator.value || !secondOperator.value) {
    error.value = "For the calculation enter all elements";
  }
  switch (operator.value) {
    case "/":
      if (secondOperator.value === "0") {
        error.value = "It is not possible to divide by 0";
        break;
      }
      result.value = (firstOperator.value / secondOperator.value).toFixed(2);
      break;
    case "*":
      result.value = firstOperator.value * secondOperator.value;
      break;
    case "-":
      result.value = firstOperator.value - secondOperator.value;
      break;
    case "+":
      result.value =
        parseInt(firstOperator.value) + parseInt(secondOperator.value);
      break;
    default:
      error.value = "The calculation is not valid";
  }
}
</script>

<template>
  <div class="calculator">
    <TopBar />
    <Screen :text="operation" :result="result" :error="error" />
    <Board
      @clear-result="resultToZero"
      @calc-result="calcResult"
      @collect-value="updateOperation"
    />
  </div>
</template>

<style scoped>
.calculator {
  background: transparent;
  width: 300px;
  height: 700px;
  border-radius: 15px;
  position: relative;
  top: 15%;
  left: 35%;
}

@media (max-width: 1024px) {
  .calculator {
    top: 100px;
    left: 60px;
  }
}
</style>
