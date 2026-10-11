function LongestWord2(sen) {

    let texto = '';
    for (let i = 0; i < sen.length; i++) {
        const char = sen[i];
        const esLetraOrNum = isLetterOrNum(char);

        const finalTxt = esLetraOrNum ? char : " ";
        texto += finalTxt;
    }
    const evaluate = texto.split(" ")

    let longest = evaluate[0];
    for (let i = 1; i < evaluate.length; i++) {
        if (evaluate[i].length > longest.length) {
            longest = evaluate[i];
        }
    }
    return longest;

}

function isLetterOrNum(text) {
    const array = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9'
    ];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === text) {
            return true;
        }
    }
    return false;
}

console.log(LongestWord2('fun&!! time'));
console.log(LongestWord2('123 apple123! banana 123'));
console.log(LongestWord2('7777765467 123456789 123'));