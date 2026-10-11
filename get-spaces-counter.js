function getSpacesCounter(text = '') {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
            count++;
        }
    }
    return count;
}

console.log(getSpacesCounter('hola mundo, como estan todos?'));