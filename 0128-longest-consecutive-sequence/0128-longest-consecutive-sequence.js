/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length == 0) return 0
     let sorted = nums.sort((a,b)=>a-b);
  let set  = new Set(sorted)
  const setArray = Array.from(set)
 let currentLen = 1;
  let maxlength = 1;
  
  for(let i = 0; i<setArray.length-1;i++){
    if(setArray[i+1]==setArray[i]+1){
      currentLen++
    }else{
      currentLen = 1
    }
    
   if(currentLen>maxlength){
     maxlength= currentLen
   }
  }
  return maxlength
};