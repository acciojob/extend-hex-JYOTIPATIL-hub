function extendHex(shortHex) {
    // Remove the '#' prefix if it exists
    const hex = shortHex.startsWith('#') ? shortHex.slice(1) : shortHex;
    
    // Split the hex code into individual color components
    const red = hex[0];
    const green = hex[1];
    const blue = hex[2];
    
    // Extend each color component by repeating it
    const fullHex = `#${red}${red}${green}${green}${blue}${blue}`;
    
    return fullHex.toUpperCase(); // Convert to uppercase for consistency
}

// Example usage:
//console.log(extendHex("#abc")); // Expected output: "#AABBCC"
//console.log(extendHex("abc")); // Expected output: "#AABBCC"
//console.log(extendHex("#AbC")); // Expected output: "#AABBCC"
//console.log(extendHex("#f09")); // Expected output: "#FF0099"
