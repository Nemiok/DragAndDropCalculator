export interface IActions {
  ADD_DIGIT: string;
  CHOOSE_OPERATION: string;
  CLEAR: string;
  DELETE_DIGIT: string;
  EVALUATE: string;
}

export const ACTIONS: IActions = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
}