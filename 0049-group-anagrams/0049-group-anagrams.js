/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
     let map = new Map()
  for(let t of strs){
    let val =t.split("").sort().join("")
    if(map.has(val)){
      map.get(val).push(t)
    }else{
      map.set(val,[t])
    }
  }
  return [...map.values()]
};