function getLongestWord(words) {
    let longestWord = words[0];
    for (let i = 1; i < words.length; i++) {
        // console.log(words[i]);
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
    // return `word: ${longestWord} \ncount: ${longestWord.length}`;
}

console.log(getLongestWord(['carro', 'casa', 'edificio', 'locomotora', 'estacion']));