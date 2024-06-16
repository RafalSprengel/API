const express = require('express');
const app = express();
const { port } = require('./config.js');
const apiRouter = require('./routes/api');

require('./db/mongoose.js')
app.use(express.json())
app.use('/api', apiRouter)
app.use('/', function (req, res) {
    res.send('Jesteś na stronie głównej')
})


app.listen(port, function () {
    console.log('serwer słucha na porcie ' + port)
});