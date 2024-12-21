/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    const res = [];
    const map = {
        "+": () => res.push(res[res.length - 1] + res[res.length - 2]),
        "D": () => res.push(res[res.length - 1] * 2),
        "C": () => res.pop(),
    }

    for (const op of operations) {
        map?.[op] ? map[op]() : res.push(+op);
    }

    return res.reduce((acc, num) => acc + num, 0);
};
    
