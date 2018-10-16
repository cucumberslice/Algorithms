// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(arr, s) {

    let result = [];

    // for (let elem of arr) {
    //     const last = result[result.length - 1]

    //     if (!last || last.length === s) {
    //         result.push([elem])
    //     } else {
    //         last.push(elem)
    //     }
    // }

    let i = 0;

    while (i < arr.length) {
        result.push(arr.slice(i, i + s));
        i += s;
    }

    return result;
}

module.exports = chunk;