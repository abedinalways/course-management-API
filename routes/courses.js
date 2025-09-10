const express = require('express');
const { auth, adminAuth } = require('../middleware/auth');
const { validateRequest, courseSchema } = require('../middleware/validation');
const {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} = require('../controllers/courseController');

const router = express.Router();

router.get('/', getAllCourses);
router.get('/:id', getCourseById);
router.post('/', adminAuth, validateRequest(courseSchema), createCourse);
router.put('/:id', adminAuth, validateRequest(courseSchema), updateCourse);
router.delete('/:id', adminAuth, deleteCourse);

module.exports = router;
