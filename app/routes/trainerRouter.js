const { Router } = require('express');
const trainerRouter = Router();
const trainerController = require('../controllers/trainerController');

trainerRouter.get('/:id', trainerController.getOneTrainer);
trainerRouter.get('/', trainerController.getAllTrainers);

module.exports = trainerRouter;
