/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
  let rem = '';

  while (n > 0) {
    rem = n % 2 + rem;
    n = Math.floor(n / 2);
  }

  while (rem.length < 32) {
    rem = "0" +rem;
  }
let decimal = 0;
for(let i = 0; i<rem.length; i++){
    decimal+=(2**i)*rem[i]
}
  return decimal;
};
