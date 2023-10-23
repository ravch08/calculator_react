export type ActionProps = {
	type: string;
	payload: string | null;
};

export type InitialStateProps = {
	currentOperand: string;
	previousOperand: string;
	operator: string | null;
	overwrite?: boolean;
};

export type ActionCreatorProps = {
	ADD_DIGITS: string;
	ADD_OPERATORS: string;
	DELETE_DIGITS: string;
	RESET_OUTPUT: string;
	SHOW_OUTPUT: string;
};

export type ScreenProps = {
	current: string;
	previous: string;
	operator: string | null;
};

export type EvaluateProps = {
	currentOperand: string;
	previousOperand: string;
	operator: string | null;
};
