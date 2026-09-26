/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
     let rem = 0
    while(n>0){
     rem += n%2
      n = Math.floor(n/2)
    }
  
  return rem
};