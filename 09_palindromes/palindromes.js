const palindromes = function (string) {
    let newString = string.replace(/[^a-zA-Z0-9]/g, "");
    let backwordsString = '';
    for (let i = newString.length; i >= 0; i--) {
        backwordsString += newString.charAt(i);
    }
    return (newString.toUpperCase() === backwordsString.toUpperCase());
};

// Do not edit below this line
module.exports = palindromes;
