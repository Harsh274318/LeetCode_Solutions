/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
 let n =nums.length
  let nthSum = (n*(n+1))/2
  let numsSum = 0;
  for(let t of nums){
    numsSum+=t
  }
  let result = nthSum-numsSum;
  
    
  return result
};