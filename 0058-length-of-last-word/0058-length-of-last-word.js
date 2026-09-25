/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let ans = s.trim().split(" ")
return ans[ans.length-1].length
};