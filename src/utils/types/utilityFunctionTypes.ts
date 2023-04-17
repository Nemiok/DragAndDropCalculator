import { ICalculatorOperation } from "../entities/calculatorOperators"
import { IActions } from "../entities/calculatorReducerActions"

export interface ICalculatorReactReducerState {
  currentOperand: string | null,
  previousOperand: string | null,
  overwrite: boolean,
  operation: Partial<IActions> | string | null
}

export interface ICalculatorReactReducerAction {
  type: Partial<IActions> | string,
  payload?: {
    operation?: ICalculatorOperation,
    digit?: string
  }
}

export interface ICalculatorEvaluateArgs extends Omit<ICalculatorReactReducerState, 'overwrite'> {

}
