You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees(clockwise).

    Note:

// You have to rotate the image in -place, which means you have to modify the input 2D matrix directly.DO NOT allocate another 2D matrix and do the rotation.

//     Example 1:

// Given input matrix =
//     [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9]
//     ],

//     rotate the input matrix in -place such that it becomes:
// [
//     [7, 4, 1],
//     [8, 5, 2],
//     [9, 6, 3]
// ]


function matrix(m) {

    let n = m.length;

    for (let i = 0; i < Math.floor(n / 2); i++) {

        for (let j = 0; j < n - (2 * i) - 1; j++) {

            let t = m[i + j][n - 1 - i]
            m[i + j][n - 1 - i] = m[i][i + j]
            m[i][i + j] = t

            t = m[n - 1 - i][n - 1 - i - j]
            m[n - 1 - i][n - 1 - i - j] = m[i][i + j]
            m[i][i + j] = t

            t = m[n - 1 - i - j][i]
            m[n - 1 - i - j][i] = m[i][i + j]
            m[i][i + j] = t;


        }
    }

    return m

}

let arr = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9],
]
matrix(arr)