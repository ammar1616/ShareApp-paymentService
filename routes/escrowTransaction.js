const express = require('express');
const authentication = require('../middlewares/authentication.js');
const addEscrowTransactionService = require('../controllers/addEscrowTransaction.service.js');
const updateEscrowTransactionService = require('../controllers/updateEscrowTransaction.service.js');
const router = express.Router();

router.post('/', authentication, addEscrowTransactionService);
router.patch('/:id', authentication, updateEscrowTransactionService);

module.exports = router;