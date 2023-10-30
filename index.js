const express = require('express');
const app = express()
const dotenv = require('dotenv');
const titleRouter = require('./src/router/title');
// const app = express()

app.use('/',titleRouter)

// healthcheck
app.get('/ping', (req,res) => {
    res.json({ messaage : 'ping succesfully'})
})

dotenv.config()

const PORT = 3000 || process.env.APP_PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
