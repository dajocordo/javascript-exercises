function getShortestNumber(numbers) {
    let shortest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < shortest) {
            shortest = numbers[i];
        }
    }
    return shortest;
}

console.log(getShortestNumber([2, -5, 12, 34, 7, 200, -16]));