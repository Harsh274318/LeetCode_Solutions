/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // for the rows
   for(let i = 0; i<board.length;i++){
       let set1 = new Set()
        for(let j = 0; j<board[i].length;j++){
            if(board[i][j]!== "."){
                if(set1.has(board[i][j])){
                    return false
                }
                else{
                    set1.add(board[i][j])
                }
            }
        }
   }
//    for the columns 
   for(let i = 0; i<board.length;i++){
       let set2 = new Set()
        for(let j = 0; j<board[i].length;j++){
            if(board[j][i]!== "."){
                if(set2.has(board[j][i])){
                    return false
                }
                else{
                    set2.add(board[j][i])
                }
            }
        }
   }
// for 3 × 3 boxes
for (let row = 0; row < 9; row += 3) {

    for (let col = 0; col < 9; col += 3) {

        let set3 = new Set();

        // ek 3 × 3 box ke andar jana
        for (let i = row; i < row + 3; i++) {

            for (let j = col; j < col + 3; j++) {

                if (board[i][j] !== ".") {

                    if (set3.has(board[i][j])) {
                        return false;
                    }

                    set3.add(board[i][j]);
                }
            }
        }
    }
}
return true
};