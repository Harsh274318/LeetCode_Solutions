/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
       let map = new Map();
  for(let t of nums){
    map.set(t,(map.get(t)+1)||1)
  }
  let as = [...map]
    as.sort((a,b)=>b[1]-a[1])
  let result = []
  for(let i = 0; i<k;i++){
    result.push(as[i][0])
  }
  return result
};