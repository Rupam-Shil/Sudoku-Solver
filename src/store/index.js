import create from "zustand";
import { devtools } from "zustand/middleware";
import { sudokuSolver } from "../utils/helpers";

const createSudoku = (set) => ({
	rawSudokuArr: [
		[3, 0, 6, 5, 0, 8, 4, 0, 0],
		[5, 2, 0, 0, 0, 0, 0, 0, 0],
		[0, 8, 7, 0, 0, 0, 0, 3, 1],
		[0, 0, 3, 0, 1, 0, 0, 8, 0],
		[9, 0, 0, 8, 6, 3, 0, 0, 5],
		[0, 5, 0, 0, 9, 0, 6, 0, 0],
		[1, 3, 0, 0, 0, 0, 2, 5, 0],
		[0, 0, 0, 0, 0, 0, 0, 7, 4],
		[0, 0, 5, 2, 0, 6, 3, 0, 0],
	],
	solvedSudokuArr: [],
	solvable: true,
	solveSudoku: () => {
		set((state) => {
			let [tempArr, isSolved] = sudokuSolver(state.rawSudokuArr);
			return {
				solvedSudokuArr: tempArr,
				solvable: isSolved,
			};
		});
	},
	changeArray: (row, col, val) => {
		set((state) => {
			state.rawSudokuArr[row][col] = val;
			state.solveSudoku();

			return {
				rawSudokuArr: state.rawSudokuArr,
			};
		});
	},
});
const useSudoku = create(devtools(createSudoku));

export default useSudoku;
