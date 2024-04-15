/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
 
  const chars1 = str1.split('').sort();
  const chars2 = str2.split('').sort();

  if (chars1.join('') === chars2.join('')) {
    return true;
  } else {
    return false;
  }
}

