type ButtonOperatorProps = {
	operator: string;
	span?: string;
	clickHandler: () => void;
};

const ButtonOperator = ({ operator, clickHandler }: ButtonOperatorProps) => {
	return (
		<button className="btn btn-operator" onClick={clickHandler}>
			<span>{operator}</span>
		</button>
	);
};

export default ButtonOperator;
