const express = require('express');
const router = express.Router();
const alunasController = require('../controllers/alunasController')

router.get('/', alunasController.get);
router.get('/nasceuSp', alunasController.getSp);
router.get('/:id', alunasController.getById);
router.get('/:id/books', alunasController.getBooks);

module.exports = router;