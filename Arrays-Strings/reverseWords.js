// Reverse Words in a String II
// Go to Discuss
// Given an input string , reverse the string word by word. 

// Example:

// Input:  ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
// Output: ["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]
// Note: 

// A word is defined as a sequence of non-space characters.
// The input string does not contain leading or trailing spaces.
// The words are always separated by a single space.
// Follow up: Could you do it in-place without allocating extra space?

function reverseWords(str) {

    //one line solution which is nasty
    // return word.join('').split(' ').reverse().join(' ').split('')

    str.reverse();

    let i = 0, j = 0;

    while ( j <= str.length ) {

        if ( str[j] === " " || j === str.length ) {

            for ( let a = i, b = j - 1; a < b; a++, b-- ) {
                [str[a], str[b]] = [str[b],str[a]];
            }

            i = j = j + 1;

        } else {

            j++;
        }
    }

}