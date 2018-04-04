const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sequelize = require('./db');
app.use(require('cors')());


sequelize.sync();

app.use(bodyParser.json());
app.use(require('./middleware/validate-session'))
app.use(express.static(__dirname + '/public'));
app.use('/api/auth', require('./controllers/userscontroller'));
app.use('/api/music', require('./controllers/songcontroller'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
app.listen(3000, () => {
    console.log('server is on port 3000');
});