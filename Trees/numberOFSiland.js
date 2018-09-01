// Number of Islands
//   Go to Discuss
// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1
// Example 2:

// Input:
// 11000
// 11000
// 00100
// 00011

// Output: 3

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(grid === null) return 0;
  let islandCounter = 0;
  for( let i = 0; i < grid.length; i++) {
   
    for(let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        //increse ours island count
        ++islandCounter;
        //change any other land conneted to zeros
        changeLandToWater(grid,i,j);
      }
    }
  }
  return islandCounter
}

function changeLandToWater(grid,i,j) {
  // 1) row less 0;
  // 2) row greater than grid.lenght (row lenght)
  // 3) column less 0
  // 4) column greater than grid[0].length (column length)
  // 5) if position is a '0'

  if(i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '0') return;
  grid[i][j] = '0';
  changeLandToWater(grid, i - 1, j) // down
  changeLandToWater(grid, i + 1, j) // up
  changeLandToWater(grid, i, j - 1) // left
  changeLandToWater(grid, i, j + 1) // right
}