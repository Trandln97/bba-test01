function findPairDivisibleBy17() {
    let count = 0;
    const divisiblePairs = [];
    for (let a = 1; a <= 100; a++) {
        for (let b = 1; b <= 100; b++) {
            if ((a + b) % 17 === 0) {
                count++;
                divisiblePairs.push([a, b]);
            }
        }
    }
    console.log("Số lượng cặp chia hết cho 17:", count);
    console.log("Các cặp thỏa điều kiện:", divisiblePairs);
    return count;
}

// Test function
findPairDivisibleBy17();
