/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;
    
    for (let i = 0; i < flowerbed.length; i++) {
        // Check if the current plot is empty (0)
        if (flowerbed[i] === 0) {
            // Check if left and right neighbors are also empty (or out of bounds)
            let leftEmpty = (i === 0 || flowerbed[i - 1] === 0);
            let rightEmpty = (i === flowerbed.length - 1 || flowerbed[i + 1] === 0);
            
            if (leftEmpty && rightEmpty) {
                // Plant a flower here
                flowerbed[i] = 1;
                count++; // Increment our successfully planted flowers
                
                // Optimization: skip the next spot because it's now adjacent to our new flower
                i++; 
            }
        }
        
        // If we've already planted enough flowers, we can stop early
        if (count >= n) {
            return true;
        }
    }
    
    return count >= n;
};