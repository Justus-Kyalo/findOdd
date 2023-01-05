function findOdd(a) {
  // Initialize an object to store the counts of each number
  let counts = {};

  // Iterate over the array and count the frequency of each number
  for (const num of a) {
    if (counts[num]) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }
  }

  // Iterate over the counts and return the first number whose frequency is odd
  for (const num in counts) {
    if (counts[num] % 2 !== 0) {
      // Parse the number as an integer before returning it
      return parseInt(num);
    }
  }

  // Return null if all the frequencies are even
  return null;
}


//ALTERNATIVE
function findOdd(arr) {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2)
  }