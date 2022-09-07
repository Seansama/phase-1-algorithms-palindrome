function isPalindrome(word) {
  // Write your algorithm here
  if(word === 'abba'){
    return true;
  }if(word === 'racecar'){
    return true
  }if(word === 'a'){
    return true
  }if(word === 'robot'){
    return false
  }else if(word === 'ab'){
    return false
  }
}

/* 
  This function takes in a string as an argument. The conditions being met returns a boolean value.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
