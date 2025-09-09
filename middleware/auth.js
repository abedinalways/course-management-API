const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Access token required',
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    const user = await User.findById(decoded.userId).select(
      '-password -refreshTokens'
    );

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid token - user not found',
      });
    }

    req.user = user;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        message: 'Access token expired',
      });
    }

    return res.status(401).json({
      success: false,
      message: 'Invalid token',
    });
  }
};

const adminAuth = async (req, res, next) => {
  try {
    await auth(req, res, () => {});

    if (req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Admin access required',
      });
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { auth, adminAuth };
