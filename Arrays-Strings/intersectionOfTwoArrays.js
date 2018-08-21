// Intersection of Two Arrays
// Go to Discuss
// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Note:

// Each element in the result must be unique.
// The result can be in any order.

function intersection(nums1,nums2) {

    const result = [];

    for(let i=0; i<nums1.length; i++) {
        for(let j=0; j<nums2.length; j++) {

            if(nums1[i] === nums2[j]) {
                if(result.indexOf(nums1[i]) > -1) {
                    continue
                }

                result.push(nums1[i])
            } 
        }
    }

    return result;

}