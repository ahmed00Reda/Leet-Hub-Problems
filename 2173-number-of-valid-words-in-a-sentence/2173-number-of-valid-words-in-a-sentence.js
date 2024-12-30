/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function(sentence) {
     const splitString = sentence.split(" ").filter((s) => s.match(/^[a-z]+(-[a-z]+)?[\.!,]?$/) || s.match(/^[\.!,]$/)).length
    return splitString;
};