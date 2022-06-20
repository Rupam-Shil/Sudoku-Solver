import React from "react";
import useSudoku from "../store";

function SudokuSolve() {
	const { solvedSudokuArr, rawSudokuArr } = useSudoku((state) => ({
		solvedSudokuArr: state.solvedSudokuArr,
		rawSudokuArr: state.rawSudokuArr,
	}));
	return (
		<div className="sudoku">
			{solvedSudokuArr.length &&
				solvedSudokuArr.map((row, index) => {
					return (
						<div className="sudoku-row" key={index}>
							{row.map((col, i) => {
								return (
									<div
										className={`${
											rawSudokuArr[index][i] === 0 ? "inserted" : ""
										} sudoku-col`}
										key={i}
									>
										{col}
									</div>
								);
							})}
						</div>
					);
				})}
		</div>
	);
}

export default SudokuSolve;
