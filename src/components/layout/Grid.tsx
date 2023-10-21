type GridProps = {
	children: JSX.Element[];
};

const Grid = ({ children }: GridProps) => {
	return <div className="grid">{children}</div>;
};

export default Grid;
