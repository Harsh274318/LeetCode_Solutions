/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
      let count = 0;
    for(let w of word){
        if(w>="A"&&w<="Z"){
            count++
        }
    }
    if(count===0) return true
    else if(count===1&&word[0]==word[0].toUpperCase()) return true
    else if(count==word.length) return true
    else{
        return false
    }
};