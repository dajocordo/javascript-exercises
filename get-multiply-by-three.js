function getMultiplyByThree(numbers = []) {
    const multiplyBy3 = numbers.filter(number => number > 0 && number % 3 === 0);
    return multiplyBy3
}

console.log(getMultiplyByThree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]));