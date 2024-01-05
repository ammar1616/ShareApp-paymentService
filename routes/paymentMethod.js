const express = require('express');
const authentication = require('../middlewares/authentication.js');
const addPaymentMethodService = require('../controllers/addPaymentMethod.service.js');
const getMyPaymentMethodService = require('../controllers/getMyPaymentMethod.service.js');
const updateMyPaymentMethodService = require('../controllers/updateMyPaymentMethod.service.js');
const deleteMyPaymentMethodService = require('../controllers/deleteMyPaymentMethod.service.js');
const router = express.Router();

router.post('/', authentication, addPaymentMethodService);
router.get('/', authentication, getMyPaymentMethodService);
router.patch('/', authentication, updateMyPaymentMethodService);
router.delete('/', authentication, deleteMyPaymentMethodService);

module.exports = router;