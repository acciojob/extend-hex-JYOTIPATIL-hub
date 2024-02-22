const extendHex = (shortHex) => {
  // write your code here
	
};// A function that takes a short hex code as input and returns the corresponding full hex code
function extendHex(shortHex) {
  // If the short hex code does not have the # prefix, add it
  if (shortHex[0] !== "#") {
    shortHex = "#" + shortHex;
  }
  // If the short hex code is not 3 characters long, return an error message
  if (shortHex.length !== 4) {
    return "Invalid short hex code";
  }
  // Initialize an empty string to store the full hex code
  let fullHex = "#";
  // Loop through the short hex code, skipping the first character
  for (let i = 1; i < 4; i++) {
    // Get the current color component and repeat it twice
    let color = shortHex[i].repeat(2);
    // Convert the color to uppercase
    color = color.toUpperCase();
    // Append the color to the full hex code
    fullHex += color;
  }
  // Return the full hex code
  return fullHex;
}


// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
