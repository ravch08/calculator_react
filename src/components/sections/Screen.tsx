import { ScreenProps } from "../../types/types";

const Screen = ({ current, previous, operator }: ScreenProps) => {
	return (
		<div className="output">
			<span className="previous-operand">
				{previous} {operator}
			</span>
			<span className="current-operand">{current}</span>
		</div>
	);
};

export default Screen;
