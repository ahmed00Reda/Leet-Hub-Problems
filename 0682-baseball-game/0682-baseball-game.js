/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    const arr = []
    for(let i=0;i<operations.length;i++){
       let value = Number(operations[i])
       if(!isNaN(value)){
        arr.push(value)
       }
       else if(operations[i]==="C"){
        arr.pop()
       }
       else if(operations[i]==="D"){
         arr.push(arr[arr.length-1]*2)
       }
       else if(operations[i]==='+'){
        arr.push(arr[arr.length-1]+arr[arr.length-2])
       }
    }
    const result = arr.reduce((acc,curr)=>
        acc+=curr,0)

    return result
    
};