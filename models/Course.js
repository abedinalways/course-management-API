const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Course title is required'],
      trim: true,
      minlength: [3, 'Title must be at least 3 characters long'],
      maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    description: {
      type: String,
      required: [true, 'Course description is required'],
      trim: true,
      minlength: [10, 'Description must be at least 10 characters long'],
      maxlength: [1000, 'Description cannot exceed 1000 characters'],
    },
    price: {
      type: Number,
      required: [true, 'Course price is required'],
      min: [0, 'Price cannot be negative'],
    },
    instructor: {
      type: String,
      required: [true, 'Instructor name is required'],
      trim: true,
      minlength: [2, 'Instructor name must be at least 2 characters long'],
      maxlength: [50, 'Instructor name cannot exceed 50 characters'],
    },
    category: {
      type: String,
      trim: true,
      maxlength: [30, 'Category cannot exceed 30 characters'],
    },
    duration: {
      type: String,
      trim: true,
    },
    level: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced'],
      default: 'Beginner',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    enrolledStudents: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Create index for text search
courseSchema.index({ title: 'text', description: 'text', instructor: 'text' });

module.exports = mongoose.model('Course', courseSchema);
