const express = require('express');
const app = express();
const path = require('path')
const assetPath = path.join(__dirname, 'public');
require('dotenv').config();
const pokemonRouter = require('./routes/pokemonRouter');
const trainerRouter = require('./routes/trainerRouter');
const gymRouter = require('./routes/gymRouter');

const links = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Pokemon',
        link: '/pokemon',
    },
    {
        name: 'Trainers',
        link: '/trainers',
    },
    {
        name: 'Gyms',
        link: '/gyms',
    },
];

app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetPath));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/pokemon', (req, res, next) => {
    req.links = links;
    next();
}, pokemonRouter);

app.use('/trainers', (req, res, next) => {
    req.links = links;
    next();
}, trainerRouter);

app.use('/gyms', (req, res, next) => {
    req.links = links;
    next();
}, gymRouter);

app.get('/', (req, res) => {
    res.render('index', { links: links });
});

const PORT = process.env.PORT;
app.listen(PORT || 3000, () => { console.log(`Express app listening on port: ${PORT}`)})