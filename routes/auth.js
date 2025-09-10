const express = require('express');
const { auth } = require('../middleware/auth');
const {
  validateRequest,
  userRegistrationSchema,
  userLoginSchema,
  refreshTokenSchema,
} = require('../middleware/validation');
const {
  register,
  login,
  refreshToken,
  logout,
  getProfile,
} = require('../controllers/authController');

const router = express.Router();

router.post('/register', validateRequest(userRegistrationSchema), register);
router.post('/login', validateRequest(userLoginSchema), login);
router.post('/refresh', validateRequest(refreshTokenSchema), refreshToken);
router.post('/logout', auth, logout);
router.get('/profile', auth, getProfile);

module.exports = router;
