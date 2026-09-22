/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let zero = 0;
let one = 0;
let two = 0;
for(let t of nums){
  if(t == 0){
    zero++
  }
  else if(t == 1){
    one++
  }else{
    two++
  }
}
for(let i = 0; i<nums.length; i++){
  if(zero!==0){
    nums[i]=0
    zero--
  }
  else if(one!==0){
    nums[i]=1
    one--
  }
  else{
    nums[i] = 2
    two--
  }
}

};