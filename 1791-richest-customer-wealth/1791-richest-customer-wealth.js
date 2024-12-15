/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    wealth = []
    for(i in accounts ){
        wealth[i]=accounts[i].reduce((accumulator, currentValue) => {
            return accumulator + currentValue},0);
    }
    return Math.max(...wealth)
    
};