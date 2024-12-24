/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
  let hash = new Map()
    let i = 0
    while (arr.length > i) {
        if (hash.has(arr[i])) {
            let before = hash.get(arr[i])
            hash.set(arr[i], before + 1)
        } else {
            hash.set(arr[i], 1)
        }
        i++
    }
    for (const [key, value] of hash) {
        if (value == 1) {
            k = k - 1
            if (k <= 0) return key
        }
    }
    return ""


};