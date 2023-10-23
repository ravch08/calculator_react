import { ActionProps, EvaluateProps, InitialStateProps } from "../types/types";
import { actionCreators, initialState } from "./actionCreators";

export function calcReducer(state = initialState, action: ActionProps): InitialStateProps {
	switch (action.type) {
		case actionCreators.ADD_DIGITS:
			if (action.payload === "." && state.overwrite) return state;
			if (action.payload === "0" && state.currentOperand === "0") return state;
			if (action.payload === "." && state.currentOperand.includes(".")) return state;

			if (state.overwrite) {
				return {
					...state,
					currentOperand: action.payload,
					overwrite: false,
				};
			}

			return { ...state, currentOperand: `${state.currentOperand}${action.payload}` };

		case actionCreators.ADD_OPERATORS:
			if (!state.currentOperand) {
				return {
					...state,
					operator: state.operator,
				};
			}

			return {
				currentOperand: "",
				previousOperand: `${state.previousOperand}${state.currentOperand}`,
				operator: action.payload,
			};

		case actionCreators.DELETE_DIGITS:
			if (state.overwrite) {
				return {
					...state,
					overwrite: false,
					currentOperand: "",
				};
			}
			return { ...state, currentOperand: state.currentOperand.slice(0, -1) };

		case actionCreators.RESET_OUTPUT:
			return initialState;

		case actionCreators.SHOW_OUTPUT:
			if (!state.currentOperand || !state.operator || !state.previousOperand) return state;
			return {
				...state,
				currentOperand: evaluateOutput(state),
				previousOperand: "",
				operator: null,
				overwrite: true,
			};

		default:
			return state;
	}
}

function evaluateOutput({ currentOperand, previousOperand, operator }: EvaluateProps) {
	const prev = parseFloat(previousOperand);
	const current = parseFloat(currentOperand);

	if (!prev || !current) return "";

	let output;

	switch (operator) {
		case "+":
			return (output = prev + current);
		case "-":
			return (output = prev - current);
		case "/":
			return (output = prev / current);
		case "*":
			return (output = prev * current);
	}

	const newOutput = output!.toString();
	return newOutput;
}
