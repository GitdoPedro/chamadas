const express = require('express');
const chamadaController = require('../controllers/chamadaController');

const router = express.Router();

router.post('/', chamadaController.create);
router.get('/:id',chamadaController.findById)
router.get('/', chamadaController.listAll);
router.put('/:id', chamadaController.update);
router.delete('/:id', chamadaController.delete);

module.exports = router;