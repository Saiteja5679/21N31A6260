function getApiUrl(type) {
    const baseUrl = 'http://20.244.56.144/test';
    switch (type) {
        case 'p':
            return `${baseUrl}/primes`;
        case 'f':
            return `${baseUrl}/fibo`;
        case 'e':
            return `${baseUrl}/even`;
        case 'r':
            return `${baseUrl}/rand`;
        default:
            throw new Error('Invalid number type');
    }
}

function calculateAverage(numbers) {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return (sum / numbers.length).toFixed(2);
}

module.exports = {
    getApiUrl,
    calculateAverage
};
