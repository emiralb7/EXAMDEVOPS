const isValid = (gamerTag) => {
    // Rule 1: Gamer tag must have at least 8 characters
    if (gamerTag.length < 8) {
      return "Invalid - gamertag length must be at least 8 characters";
    }
  
    // Rule 2: Gamer tag must contain at least one special character
    const specialCharacters = ["&", "$", "!", "è", "§", "à", "_"];
    if (!gamerTag.split("").some(char => specialCharacters.includes(char))) {
      return "Invalid - gamertag must contain at least a special character";
    }
  
    // Rule 3: Gamer tag must contain at least one number
    if (!/\d/.test(gamerTag)) {
        return 'Invalid - gamertag must contain at least a number';
    }
    
     // All rules passed, gamer tag is valid
     return null;
};
  
  exports.isValid = isValid;
