const express = require('express');
const { auth, adminAuth } = require('../middleware/auth');
const {
  purchaseCourse,
  getUserPurchases,
  getAllPurchases,
  getPurchaseById,
} = require('../controllers/purchaseController');

const router = express.Router();


router.post('/', auth, purchaseCourse);
router.get('/my', auth, getUserPurchases);
router.get('/', adminAuth, getAllPurchases);
router.get('/:id', auth, getPurchaseById);

module.exports = router;
