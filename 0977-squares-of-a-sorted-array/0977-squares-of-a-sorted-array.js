/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  let squares = new Array(nums.length)
  let counter = nums.length-1
  let start = 0
  let end = nums.length-1
  
  while(counter>=0){
    if((nums[start]**2)>nums[end]**2){
      squares[counter] = nums[start]**2
      start++
    }else{
      squares[counter] = nums[end]**2
      end--
    }
    counter--
  }
  return squares
  
};