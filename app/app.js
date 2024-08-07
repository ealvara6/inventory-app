const express = require('express');
const app = express();
const path = require('path')
const assetPath = path.join(__dirname, 'public');
require('dotenv').config();

const links = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Pokemon',
        link: '/',
    },
    {
        name: 'Trainers',
        link: '/',
    },
    {
        name: 'Gyms',
        link: '/',
    },
];

app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetPath));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { links: links });
});

const PORT = process.env.PORT;
app.listen(PORT || 3000, () => { console.log(`Express app listening on port: ${PORT}`)})