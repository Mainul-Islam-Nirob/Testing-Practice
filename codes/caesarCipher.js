const caesarCipher = (str, shift) => {
    // Normalize the shift to be within 0-25
    const shiftAmount = ((shift % 26) + 26) % 26; 
    const result = [];

    for (let char of str) {
        if (/[a-zA-Z]/.test(char)) {
            const base = char.charCodeAt(0) < 97 ? 65 : 97; // Determine if uppercase or lowercase
            // Calculate the new character with wrapping
            const shiftedChar = String.fromCharCode(((char.charCodeAt(0) - base + shiftAmount) % 26) + base);
            result.push(shiftedChar);
        } else {
            result.push(char); // Non-alphabetical characters remain unchanged
        }
    }

    return result.join('');
};

export default caesarCipher;