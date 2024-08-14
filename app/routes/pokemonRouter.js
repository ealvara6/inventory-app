const { Router } = require('express');
const pokemonrouter = Router();
const pokemonController = require('../controllers/pokemonController');

pokemonrouter.get('/:id', pokemonController.getOnePokemon);
pokemonrouter.get('/', pokemonController.getAllPokemon);

module.exports = pokemonrouter;
