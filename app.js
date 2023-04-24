const express = require('express');

const app = express();

const PORT = 3000;

// Express server
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
})