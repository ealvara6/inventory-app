const { Router } = require('express');
const gymRouter = Router();
const gymController = require('../controllers/gymController');

gymRouter.get('/', gymController.getAllGyms);

module.exports = gymRouter;
