import React, { useEffect } from "react";
import Sudoku from "./components/Sudoku";
import SudokuSolve from "./components/SudokuSolve";
import MainLayout from "./layouts/MainLayout";
import useSudoku from "./store";

function App() {
	const { solveSudoku, rawSudokuArr } = useSudoku((state) => ({
		solveSudoku: state.solveSudoku,
		rawSudokuArr: state.rawSudokuArr,
	}));

	useEffect(() => {
		solveSudoku();
	}, []);

	return (
		<MainLayout>
			<Sudoku />
			<SudokuSolve />
		</MainLayout>
	);
}

export default App;
