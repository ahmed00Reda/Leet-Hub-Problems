/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    senior = 0 
    for(age of details){
       if(age.slice(11,13)>60){
            senior++
        }
    }
    return senior
    
};


// senior = 0 
//     for(age of details)
//     {
//        
//         
//     }