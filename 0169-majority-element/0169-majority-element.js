/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
        let map = new Map()
for(let t of nums){
  map.set(t,(map.get(t)||0)+1);
  
}
  for(let [key,value] of map){
    if(value>=nums.length/2){
      return key
    }
  }
};