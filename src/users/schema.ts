import Joi from "joi";

export const userInfo = Joi.object({
	fullName: Joi.string().required(),
	email: Joi.string().email().required(),
	password: Joi.string().required(),
	dateOfBirth: Joi.string().required(),
});
