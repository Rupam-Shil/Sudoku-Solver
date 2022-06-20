import React, { useState, useEffect } from "react";
import useSudoku from "../store";

function Sudoku() {
	const { rawSudokuArr } = useSudoku((state) => ({
		rawSudokuArr: state.rawSudokuArr,
	}));

	return (
		<div className="sudoku">
			{rawSudokuArr.length &&
				rawSudokuArr.map((row, index) => {
					return (
						<div className="sudoku-row" key={index}>
							{row.map((col, i) => {
								return (
									<div className="sudoku-col" key={i}>
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

export default Sudoku;
