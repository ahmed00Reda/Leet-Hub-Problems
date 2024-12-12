/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {

  
    //we will solve it using max Heap 
 
 
 gifts.sort((a, b) => {return b - a; });
for(let i = 0 ; i <k;i++){
    let largest = gifts[0];
    let new_value = Math.floor(Math.sqrt(largest));
    gifts[0] = Math.floor(Math.sqrt(largest))
    gifts.sort((a, b) => {return b - a; });
}
console.log(gifts)

 return gifts.reduce((sum, gift) => sum + gift, 0); ;

    
}; 
