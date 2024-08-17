const express = require('express');
const { fetchNumbersAndCalculateAvg } = require('../services/numberService');

const router = express.Router();

router.get('/:type', async (req, res) => {
    const type = req.params.type;
    try {
        const response = await fetchNumbersAndCalculateAvg(type);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: 'Error processing request' });
    }
});

module.exports = router;