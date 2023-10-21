import { ActionCreatorProps, InitialStateProps } from "../types/types";

export const initialState: InitialStateProps = {
	currentOperand: "",
	previousOperand: "",
	operator: null,
};

export const actionCreators: ActionCreatorProps = {
	ADD_DIGITS: "ADD_DIGITS",
	ADD_OPERATORS: "ADD_OPERATOR",
	DELETE_DIGITS: "DELETE_DIGITS",
	RESET_OUTPUT: "RESET_OUTPUT",
	SHOW_OUTPUT: "SHOW_OUTPUT",
};
