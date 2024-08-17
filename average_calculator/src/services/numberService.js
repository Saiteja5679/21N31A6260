const axios = require('axios');
const { getApiUrl, calculateAverage } = require('../utils/apiClient');

let windowNumbers = [];

async function fetchNumbersAndCalculateAvg(type) {
    const apiUrl = getApiUrl(type);
    let newNumbers = [];
    try {
        const response = await axios.get(apiUrl, { timeout: 500 });
        newNumbers = response.data.numbers;
    } catch (error) {
        console.log('Error fetching numbers:', error.message);
    }

    const uniqueNumbers = [...new Set([...windowNumbers, ...newNumbers])];

    if (uniqueNumbers.length > 10) {
        uniqueNumbers.splice(0, uniqueNumbers.length - 10);
    }

    const avg = calculateAverage(uniqueNumbers);
    const response = {
        windowPrevState: windowNumbers,
        windowCurrState: uniqueNumbers,
        numbers: newNumbers,
        avg: avg
    };

    windowNumbers = uniqueNumbers;
    return response;
}

module.exports = {
    fetchNumbersAndCalculateAvg
};