import { ACTIONS } from "../entities/calculatorReducerActions"
import { ICalculatorReactReducerAction, ICalculatorReactReducerState } from "../types/utilityFunctionTypes"
import { evaluate } from "./calculatorEvaluate"

export const reducer = (state: ICalculatorReactReducerState, { type, payload }: ICalculatorReactReducerAction): ICalculatorReactReducerState => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite && payload?.digit !== undefined) {
        return {
          ...state,
          currentOperand: payload?.digit,
          overwrite: false,
        }
      }
      if (payload?.digit === "0" && state.currentOperand === "0") {
        return state
      }


      if (payload?.digit === "." && (state.currentOperand === null || state.currentOperand === undefined)) {
        return {
          ...state,
          currentOperand: '0' + payload?.digit,
          overwrite: false,
        }
      }
      if (payload?.digit === "." && state.currentOperand !== null && state?.currentOperand.includes(".")) {
        return state
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload?.digit}`,
      }
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state
      }

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload?.operation as string,
        }
      }

      if (state.previousOperand == null && payload !== undefined) {
        return {
          ...state,
          operation: payload.operation as string,
          previousOperand: state.currentOperand,
          currentOperand: null,
        }
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload?.operation as string,
        currentOperand: null,
      }


    case ACTIONS.CLEAR:
      return {} as ICalculatorReactReducerState
    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null,
        }
      }
      if (state.currentOperand == null) return state
      if (state.currentOperand.length === 1) {
        return { ...state, currentOperand: null }
      }

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      }
    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state
      }

      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      }
    default: return state
  }
}