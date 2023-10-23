import { useReducer } from "react";

import Grid from "./components/layout/Grid";
import Wrapper from "./components/layout/Wrapper";
import ButtonNumber from "./components/sections/ButtonNumber";
import ButtonOperator from "./components/sections/ButtonOperator";
import Screen from "./components/sections/Screen";

import { actionCreators, initialState } from "./reducer/actionCreators";
import { calcReducer } from "./reducer/calcReducer";

function App() {
	const [state, dispatch] = useReducer(calcReducer, initialState);

	console.log(state);

	return (
		<Wrapper>
			<Screen
				current={state.currentOperand}
				previous={state.previousOperand}
				operator={state.operator}
			/>
			<Grid>
				<ButtonOperator
					operator="+"
					clickHandler={() => dispatch({ type: actionCreators.ADD_OPERATORS, payload: "+" })}
				/>
				<ButtonOperator
					operator="-"
					clickHandler={() => dispatch({ type: actionCreators.ADD_OPERATORS, payload: "-" })}
				/>
				<ButtonOperator
					operator="*"
					clickHandler={() => dispatch({ type: actionCreators.ADD_OPERATORS, payload: "*" })}
				/>
				<ButtonOperator
					operator="/"
					clickHandler={() => dispatch({ type: actionCreators.ADD_OPERATORS, payload: "/" })}
				/>
				<ButtonOperator
					operator="DEL"
					clickHandler={() => dispatch({ type: actionCreators.DELETE_DIGITS, payload: null })}
				/>
				<ButtonOperator
					operator="AC"
					clickHandler={() => dispatch({ type: actionCreators.RESET_OUTPUT, payload: null })}
				/>
				<ButtonNumber
					value="7"
					clickHandler={() => dispatch({ type: actionCreators.ADD_DIGITS, payload: "7" })}
				/>
				<ButtonNumber
					value="8"
					clickHandler={() => dispatch({ type: actionCreators.ADD_DIGITS, payload: "8" })}
				/>
				<ButtonNumber
					value="9"
					clickHandler={() => dispatch({ type: actionCreators.ADD_DIGITS, payload: "9" })}
				/>
				<ButtonNumber
					value="4"
					clickHandler={() => dispatch({ type: actionCreators.ADD_DIGITS, payload: "4" })}
				/>
				<ButtonNumber
					value="5"
					clickHandler={() => dispatch({ type: actionCreators.ADD_DIGITS, payload: "5" })}
				/>
				<ButtonNumber
					value="6"
					clickHandler={() => dispatch({ type: actionCreators.ADD_DIGITS, payload: "6" })}
				/>
				<ButtonNumber
					value="1"
					clickHandler={() => dispatch({ type: actionCreators.ADD_DIGITS, payload: "1" })}
				/>
				<ButtonNumber
					value="2"
					clickHandler={() => dispatch({ type: actionCreators.ADD_DIGITS, payload: "2" })}
				/>
				<ButtonNumber
					value="3"
					clickHandler={() => dispatch({ type: actionCreators.ADD_DIGITS, payload: "3" })}
				/>
				<ButtonNumber
					value="0"
					clickHandler={() => dispatch({ type: actionCreators.ADD_DIGITS, payload: "0" })}
				/>
				<ButtonNumber
					value="."
					clickHandler={() => dispatch({ type: actionCreators.ADD_DIGITS, payload: "." })}
				/>
				<ButtonOperator
					operator="="
					clickHandler={() => dispatch({ type: actionCreators.SHOW_OUTPUT, payload: null })}
				/>
			</Grid>
		</Wrapper>
	);
}

export default App;
