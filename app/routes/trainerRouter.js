const { Router } = require('express');
const trainerRouter = Router();
const trainerController = require('../controllers/trainerController');

trainerRouter.get('/', trainerController.getAllTrainers);

module.exports = trainerRouter;
