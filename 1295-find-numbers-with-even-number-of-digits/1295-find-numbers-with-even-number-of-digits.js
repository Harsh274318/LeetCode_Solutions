/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let result = 0;
  for(let n of nums){
    let count = 0;
    while(n>0){
      n=Math.floor(n/10)
      count++
    }
    if(count%2==0){
      result++
    }
  }
  return result
};