/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
      let max = -Infinity;
  for(let t of candies){
    if(t>max){
      max = t
    }
  }
  let result = []
  for(let can of  candies){
    result.push(can+extraCandies>=max)
  }
  return result  
};