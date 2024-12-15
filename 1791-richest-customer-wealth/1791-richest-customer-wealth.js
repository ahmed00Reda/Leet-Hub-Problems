/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  return Math.max(...accounts.map(customer=>customer.reduce((a,b)=>a+b)));
};