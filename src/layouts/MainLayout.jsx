import React from "react";
import useSudoku from "../store";

function MainLayout({ children }) {
	const { solvable } = useSudoku((state) => ({ solvable: state.solvable }));
	return (
		<div className="main-layout">
			{!solvable && <div className="invalid">Invalid input</div>}
			{children}
		</div>
	);
}

export default MainLayout;
