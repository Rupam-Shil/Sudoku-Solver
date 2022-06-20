export const sudokuSolver = (arr) => {
	let tempArr = JSON.parse(JSON.stringify(arr));
	let result = helper(tempArr, 0, 0);
	return [tempArr, result];
};

const isSafe = (arr, row, col, val) => {
	for (let i = 0; i < 9; i++) {
		if (arr[i][col] === val || arr[row][i] === val) return false;
	}
	let rowIndex = row - (row % 3);
	let colIndex = col - (col % 3);
	for (let i = rowIndex; i < rowIndex + 3; i++) {
		for (let j = colIndex; j < colIndex + 3; j++) {
			if (arr[i][j] === val) return false;
		}
	}
	return true;
};

const helper = (arr, row, col) => {
	if (row === 9) {
		return true;
	}
	if (col === 9) {
		return helper(arr, row + 1, 0);
	}
	if (arr[row][col]) return helper(arr, row, col + 1);
	for (let i = 1; i <= 9; i++) {
		if (isSafe(arr, row, col, i)) {
			arr[row][col] = i;
			if (helper(arr, row, col + 1)) {
				return true;
			}
		}
		arr[row][col] = 0;
	}
	return false;
};
