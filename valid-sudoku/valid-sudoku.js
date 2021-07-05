const getBoxId = (row, col) => {
    // i/3 * 3 + j / 3
    return Math.floor(row / 3) * 3 + Math.floor(col / 3);
}

/**
 * @param {character[][]} board
 * @return {boolean}
 */

var isValidSudoku = function(board) {
    const rows = board.length;
    const cols = board[0].length;
    
    for(let row = 0 ; row < rows; row++) {
        const seen = {};
        for (let col = 0 ; col < cols; col++) {
            const currentChar = board[row][col];
            if (currentChar != '.') {
                if (currentChar in seen)
                    return false;
                seen[currentChar] = true;
            }
        }
    }
    
    for(let row = 0 ; row < rows; row++) {
        const seen = {};
        for (let col = 0 ; col < cols; col++) {
            const currentChar = board[col][row];
            if (currentChar != '.') {
                if (currentChar in seen)
                    return false;
                seen[currentChar] = true;
            }            
        }
    }
    const boxes = [{},{},{},{},{},{},{},{},{}];
    
    for(let row = 0 ; row < rows; row++) {
        const seen = {};
        for (let col = 0 ; col < cols; col++) {
            const currentChar = board[col][row];
            if (currentChar != '.') {
                const boxId = getBoxId(row, col);

                if (currentChar in boxes[boxId]) 
                    return false;
                boxes[boxId][currentChar] = true;
            }            
        }
    }   
    return true;
    
};