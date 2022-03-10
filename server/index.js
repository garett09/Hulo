const express = require('express');
const app = express();
const cors=require('cors');

app.use(cors());

app.post('/api/register', (req,res) => {
   console.log(req.body)
})

app.listen(4000, () => {
    console.log('server is running on port 4000')
})