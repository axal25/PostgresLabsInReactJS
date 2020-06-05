export const lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
export const upperCaseAlphabet = lowerCaseAlphabet.toLocaleUpperCase();
export const additionalCharacters = `",):`;
export const charactersArray = `${lowerCaseAlphabet}${upperCaseAlphabet}${additionalCharacters}`.split("");

class LookBehindReplacement {
    static oneCharacterLookBehindReplacement(input, charactersArray) {
        charactersArray.forEach(character => input.replace(`${character} `, `${character}`));
        return input;
    }

    static lookBehindReplacement(input) {
        // input.replace(/((?<![a-z",):\d])\s)/g,'');
        return LookBehindReplacement.oneCharacterLookBehindReplacement(input, charactersArray);
    }
}

export default LookBehindReplacement;