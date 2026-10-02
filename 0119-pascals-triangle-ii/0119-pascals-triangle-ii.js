/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
       let tri = [];
    for(let i = 0; i <= rowIndex; i++){
        let row = [];
        for(let j = 0; j <= i; j++){
            if(j == 0 || j == i){
                row.push(1);
            }else{
                row.push(tri[i-1][j-1]+tri[i-1][j])
            }

        }
        tri.push(row)
    }
    return tri[rowIndex]
};