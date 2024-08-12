const asynceHandler = require('express-async-handler');

exports.getAllPokemon = asynceHandler(async(req, res) => {
    res.render('pokemon', { links: req.links });
});