const Joi = require('joi');

const validateRequest = schema => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        details: error.details[0].message,
      });
    }

    next();
  };
};

const userRegistrationSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid('user', 'admin').optional(),
});

const userLoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const courseSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  description: Joi.string().min(10).max(1000).required(),
  price: Joi.number().min(0).required(),
  instructor: Joi.string().min(2).max(50).required(),
  category: Joi.string().max(30).optional(),
  duration: Joi.string().optional(),
  level: Joi.string().valid('Beginner', 'Intermediate', 'Advanced').optional(),
});

const refreshTokenSchema = Joi.object({
  refreshToken: Joi.string().required(),
});

module.exports = {
  validateRequest,
  userRegistrationSchema,
  userLoginSchema,
  courseSchema,
  refreshTokenSchema,
};
