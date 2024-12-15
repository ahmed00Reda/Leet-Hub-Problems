/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    wealth = []
    for(i in accounts ){
        wealth[i]=accounts[i].reduce((accumulator, currentValue) => {
            return accumulator + currentValue});
    }
    return Math.max(...wealth)
    
//  another solution
// return Math.max(...accounts.map(customer=>customer.reduce((a,b)=>a+b)));
};