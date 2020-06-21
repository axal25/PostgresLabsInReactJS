class NameGenerator {
    // todo: no repeating same adjectives and nouns
    static generateRandomName(allAdjectives, allNouns) {
        const numberOfAdjectivesRoll = Math.floor(Math.random() * 10);
        const numberOfAdjectives = numberOfAdjectivesRoll < 6
            ? 1
            : numberOfAdjectivesRoll < 9
                ? 2
                : numberOfAdjectivesRoll < 10
                    ? 3
                    : 0;
        const randomAdjectives = Array.from(
            {length: numberOfAdjectives},
            () => allAdjectives[Math.floor(Math.random() * allAdjectives.length)]
        ).join(` `);
        const randomNoun = allNouns[Math.floor(Math.random() * allNouns.length)];
        return `${randomAdjectives} ${randomNoun}`;
    }
}

export default NameGenerator;