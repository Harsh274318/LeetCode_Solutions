/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
    let map = new Map(knowledge);

let flag = false;
let key = "";
let ans = "";

for (let t of s) {

  if (t === "(") {
    flag = true;
    key = "";
    continue;
  }

  if (t === ")") {
    flag = false;

    if (map.has(key)) {
      ans += map.get(key);
    } else {
      ans += "?";
    }

    continue;
  }

  if (flag) {
    key += t;
  } else {
    ans += t;
  }
}
return ans
};