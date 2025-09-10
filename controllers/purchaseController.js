const Purchase = require('../models/Purchase');
const Course = require('../models/Course');
const User = require('../models/User');

const purchaseCourse = async (req, res, next) => {
  try {
    const { courseId } = req.body;
    const userId = req.user._id;

    // Check if course exists and is active
    const course = await Course.findById(courseId);
    if (!course || !course.isActive) {
      return res.status(404).json({
        success: false,
        message: 'Course not found or inactive',
      });
    }

    // Check if user already purchased this course
    const existingPurchase = await Purchase.findOne({ userId, courseId });
    if (existingPurchase) {
      return res.status(400).json({
        success: false,
        message: 'You have already purchased this course',
      });
    }

    // Create purchase record
    const purchase = new Purchase({
      userId,
      courseId,
      amount: course.price,
    });

    await purchase.save();

    // Add course to user's purchased courses
    await User.findByIdAndUpdate(userId, {
      $addToSet: { purchasedCourses: courseId },
    });

    // Increment enrolled students count
    await Course.findByIdAndUpdate(courseId, { $inc: { enrolledStudents: 1 } });

    // Populate purchase data
    await purchase.populate(['courseId', 'userId']);

    res.status(201).json({
      success: true,
      message: 'Course purchased successfully',
      data: { purchase },
    });
  } catch (error) {
    next(error);
  }
};

const getUserPurchases = async (req, res, next) => {
  try {
    const purchases = await Purchase.find({ userId: req.user._id })
      .populate('courseId', 'title description instructor price')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: { purchases },
    });
  } catch (error) {
    next(error);
  }
};

const getAllPurchases = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const purchases = await Purchase.find()
      .populate('userId', 'name email')
      .populate('courseId', 'title instructor price')
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Purchase.countDocuments();

    res.json({
      success: true,
      data: {
        purchases,
        pagination: {
          current: page,
          pages: Math.ceil(total / limit),
          total,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

const getPurchaseById = async (req, res, next) => {
  try {
    const purchase = await Purchase.findById(req.params.id)
      .populate('userId', 'name email')
      .populate('courseId', 'title description instructor price');

    if (!purchase) {
      return res.status(404).json({
        success: false,
        message: 'Purchase not found',
      });
    }

    // Check if user owns this purchase (unless admin)
    if (
      req.user.role !== 'admin' &&
      purchase.userId._id.toString() !== req.user._id.toString()
    ) {
      return res.status(403).json({
        success: false,
        message: 'Access denied',
      });
    }

    res.json({
      success: true,
      data: { purchase },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  purchaseCourse,
  getUserPurchases,
  getAllPurchases,
  getPurchaseById,
};
