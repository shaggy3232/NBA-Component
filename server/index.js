
const express = require('express');
const app = express();
app.use (express.json());
app.use (express.urlencoded({extended:false}));


const PORT = process.env.PORT || 5000;

const NBARouter = require('./routes/NBAAPI')

app.use('/NBA',NBARouter)

app.listen(PORT, ()=> {
    console.log(`server listening on port ${PORT}`)

})

module.exports = app