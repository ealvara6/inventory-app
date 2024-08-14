const asyncHandler = require('express-async-handler');

exports.getAllPokemon = asyncHandler(async(req, res) => {
    res.render('pokemon', { links: req.links });
});

exports.getOnePokemon = asyncHandler(async(req, res) => {
    res.render('pokemonView', { links: req.links });
});
