//First Unique Character in a String
// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
// Examples:
// s = "leetcode"
// return 0.
// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.

function firstUniqChars(s) {
    // using built-in methods
    // for( let i=0; i<s.length; i++) {
    //   if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
    //     return i;
    //   }
    // }
    // return -1
  
    //using hashmap
    let obj = {};
  
    for(let item of s.split('')) {
      if(!obj[item]) {
        obj[item] = 1;
      } else {
        obj[item] = obj[item] + 1;
      }
    }
   
    for(let prop in obj) {
      if(obj[prop] === 1) {
        return s.split('').indexOf(prop)
      }
    }
    return -1;
  
  
  }
  
  var s = "loveleetcode"
  
  firstUniqChars(s)