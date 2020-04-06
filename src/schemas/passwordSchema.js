import Joi from '@hapi/joi';

export const ForgotPasswordSchema = Joi.object({
  password: Joi.string().trim().min(8).max(150).required(),
  password2: Joi.ref('password')
}).with('password', 'password2');

export const PasswordSchema = Joi.object({
  password: Joi.string().trim().min(8).max(150).required(),
});

