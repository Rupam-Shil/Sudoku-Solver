import React, { useEffect } from "react";
import Sudoku from "./components/Sudoku";
import SudokuSolve from "./components/SudokuSolve";
import MainLayout from "./layouts/MainLayout";
import useSudoku from "./store";

function App() {
	const { solveSudoku, solvedSudokuArr, rawSudokuArr, bear } = useSudoku(
		(state) => ({
			solveSudoku: state.solveSudoku,
			solvedSudokuArr: state.solvedSudokuArr,
			rawSudokuArr: state.rawSudokuArr,
			bear: state.bear,
		})
	);
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
