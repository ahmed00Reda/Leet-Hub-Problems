/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
  const hashMap = new Map();

  for (const char of arr) {
    hashMap.set(char, (hashMap.get(char) || 0) + 1);
  }
  let distinct={}
  for([key,val] of hashMap){
    if (val===1){
        distinct[key]=val
    }
  }
  const entries = Object.entries(distinct);
  if (k > 0 && k <= entries.length) {
  const nthElement = entries[k - 1];
  return nthElement[0] 
  console.log(`Key: ${nthElement[0]}, Value: ${nthElement[1]}`);
} else {
  return ""
}

  console.log(distinct.length)
   //if(k>distinct.length) {return ""}
  console.log(distinct)


 

 






    
};