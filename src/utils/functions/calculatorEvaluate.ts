import { ICalculatorEvaluateArgs } from "../types/utilityFunctionTypes"

export const evaluate = ({ currentOperand, previousOperand, operation }: ICalculatorEvaluateArgs): string => {

  let prev = 0
  let current = 0

  if (previousOperand !== null) {
    prev = parseFloat(previousOperand)
  }

  if (currentOperand !== null) {
    current = parseFloat(currentOperand)
  }

  if (isNaN(prev) || isNaN(current)) return ""
  let computation = 0
  switch (operation) {
    case "+":
      computation = prev + current
      break
    case "-":
      computation = prev - current
      break
    case "x":
      computation = prev * current
      break
    case "/":
      computation = prev / current
      break
  }
  console.log(computation)
  return computation.toString()
}