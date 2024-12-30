/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function(sentence) {
     let words = sentence.split(" ")
    
   return   words.filter(word=> word.match(/^[a-z]+(-[a-z]+)?[\.!,]?$/) || 
   word.match(/^[\.!,]$/)).length 
    
};