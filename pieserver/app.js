//   http://localhost:3000/user/signup
//      app.js        user=  usercontroller   signup= createuser

require('dotenv').config();
const express = require('express');
const app = express();
const sequelize = require('./db');
const pies = require('./controllers/piecontroller');
const user = require('./controllers/usercontroller');

sequelize.sync();
// DROPS TABLES!!!!!
// sequelize.sync({force: true});
// DROPS TABLES!!!!!

app.use(express.json());
app.use(require('./middleware/headers.js'));

// app.use(express.static(__dirname + '/public'));
// console.log(__dirname);

// app.get('',(req, res) => res.render('index'));

// app.get('/pies', (req, res) => res.send('I love pie!'));
app.use('/pies', pies);
app.use('/user', user);

app.listen(process.env.PORT, () => console.log(`app listening on ${process.env.PORT}`));

