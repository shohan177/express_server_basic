const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

//envirmnet variable init
const PORT = process.env.SERVER_PORT

app.use('/api/country', require('./routes/country'))

app.listen(PORT, () => {
    console.log(`server running... ${PORT}`)
})

