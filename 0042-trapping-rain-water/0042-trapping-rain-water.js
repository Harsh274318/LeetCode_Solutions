/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let n = height.length;
  let l = 0,r = n-1
  let lMax = 0 ,rMax = 0,ans = 0
  while(l < r){
    lMax = Math.max(lMax , height[l])
    rMax =Math.max(rMax, height[r])
    if(lMax<rMax){
      ans += lMax - height[l]
      l++
    }else{
      ans += rMax - height[r]
      r--
    }
  }
  return ans
};