/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let result = []
  for(let i = 0; i < nums1.length; i++){
    let target = nums1[i];
    for(let j = 0; j<nums2.length;j++){
      if(target == nums2[j]&&!result.includes(target)){
        result.push(target)
    }
    }
  }
    return result
};