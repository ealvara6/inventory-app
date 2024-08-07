const express = require('express');
const app = express();
const path = require('path')
const assetPath = path.join(__dirname, 'public');
require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetPath));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

const PORT = process.env.PORT;
app.listen(PORT || 3000, () => { console.log(`Express app listening on port: ${PORT}`)})