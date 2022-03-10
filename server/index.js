const express = require('express');
const app = express();

app.get('/hello', (req,res) => {
    res.send('hello world')
})

app.listen(4000, () => {
    console.log('server is running on port 3000')
})