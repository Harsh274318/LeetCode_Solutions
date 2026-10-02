/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(n) {
    let tri = [];
    for(let i = 0; i < n; i++){
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
    return tri
};