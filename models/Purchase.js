const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID is required'],
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      required: [true, 'Course ID is required'],
    },
    amount: {
      type: Number,
      required: [true, 'Purchase amount is required'],
      min: [0, 'Amount cannot be negative'],
    },
    purchaseDate: {
      type: Date,
      default: Date.now,
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'completed', 'failed', 'refunded'],
      default: 'completed',
    },
    paymentMethod: {
      type: String,
      default: 'credit_card',
    },
  },
  {
    timestamps: true,
  }
);

// Prevent duplicate purchases
purchaseSchema.index({ userId: 1, courseId: 1 }, { unique: true });

module.exports = mongoose.model('Purchase', purchaseSchema);
