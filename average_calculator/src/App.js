const express = require('express');
const numbersRouter = require('./routes/numbers');

const app = express();
app.use(express.json());
app.use('/numbers', numbersRouter);

const PORT = process.env.PORT || 9876;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});