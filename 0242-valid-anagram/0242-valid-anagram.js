/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if(s.length !== t.length){
    return false;
  };
  let map = new Map();
  for(let c of s){
      map.set(c,(map.get(c)||0)+1)
  
  }
  for(let d of t){
      map.set(d,(map.get(d)||0)-1)
  
  }
  for(let [key,value] of map){
      if(value!==0){
        return false
      }
    
  }
  return true


};