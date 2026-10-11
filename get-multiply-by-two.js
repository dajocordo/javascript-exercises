function getMultiplyByTwo(numbers = []) {
    const multiplyByTwo = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            multiplyByTwo.push(numbers[i]);
        }
    }
    return multiplyByTwo;
}

console.log(getMultiplyByTwo([34, 3, 5, 7, 8, 10, 12, 14, 17, 21, 365, 1234]));