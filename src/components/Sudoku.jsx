import React, { useState, useEffect } from "react";
import useSudoku from "../store";

function Sudoku() {
	const { rawSudokuArr, changeArray } = useSudoku((state) => ({
		rawSudokuArr: state.rawSudokuArr,
		changeArray: state.changeArray,
	}));

	return (
		<div className="sudoku">
			{rawSudokuArr.length &&
				rawSudokuArr.map((row, index) => {
					return (
						<div className={`sudoku-row `} key={index}>
							{row.map((col, i) => {
								return (
									<input
										type="text"
										className="sudoku-col"
										key={i}
										value={rawSudokuArr[index][i]}
										onKeyDown={(e) => {
											if (!isNaN(parseInt(e.key))) {
												changeArray(index, i, parseInt(e.key));
											}
										}}
										onChange={(e) => {
											if (!isNaN(parseInt(e.nativeEvent.data))) {
												changeArray(index, i, parseInt(e.nativeEvent.data));
											}
										}}
									/>
								);
							})}
						</div>
					);
				})}
		</div>
	);
}

export default Sudoku;
