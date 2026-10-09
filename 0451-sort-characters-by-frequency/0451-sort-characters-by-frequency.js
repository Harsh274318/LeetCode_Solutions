/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
       let map = new Map();
    for(let ch of s){
        map.set(ch,(map.get(ch)||0)+1)
    }
    let arr = [...map]
    
    return arr.sort((a,b)=>b[1]-a[1]).map(item=>item[0].repeat(item[1])).join("")
};