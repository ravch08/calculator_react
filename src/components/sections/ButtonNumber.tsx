type ButtonNumberProps = {
	value: string;
	clickHandler: () => void;
};

const ButtonNumber = ({ value, clickHandler }: ButtonNumberProps) => {
	return (
		<button className="btn btn-num" onClick={clickHandler}>
			<span>{value}</span>
		</button>
	);
};

export default ButtonNumber;
