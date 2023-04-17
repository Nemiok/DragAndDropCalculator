import { ICalculatorReactReducerAction, ICalculatorReactReducerState } from "./utilityFunctionTypes";

export interface IDeskProps {
  isInWorkspace?: boolean,
  calculatorReducerState?: ICalculatorReactReducerState,
  calculatorReducerDispatch?: React.Dispatch<ICalculatorReactReducerAction>
}