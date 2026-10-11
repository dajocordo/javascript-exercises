function getLargestNumber(numbers) {
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}

console.log(getLargestNumber([2, 4, 3, 10, 8, 7, 6, 7, 1, -2]));
