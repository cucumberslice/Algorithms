// Trapping Rain Water
//   Go to Discuss
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.


// The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

// Example:

// Input: [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6

function trapping(heights) {
    debugger
      let left =0;
      let right = heights.length-1;
    
      let leftMax = 0;
      let rightMax = 0;
      let ans = 0;
    
      while (left < right) {
        leftMax = Math.max(heights[left], leftMax)
        
    
        if(leftMax > heights[left]){
          ans += (leftMax - heights[left])
        }
    
        rightMax = Math.max(heights[right], rightMax)
    
        if(rightMax > heights[right]) {
          ans += (rightMax - heights[right])
        }
    
      heights[left] < heights[right] ? left++ : right --
      }
      
    
      return ans
    
    
    
    }
    
    trapping([0,1,0,2,1,0,1,3,2,1,2,1])