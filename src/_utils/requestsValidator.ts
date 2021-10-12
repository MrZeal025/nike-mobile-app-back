import Joi from "joi";
import { RequestHandler } from "express";

/* eslint-disable */
import { BadRequestError } from "_utils/errors";

export const validateRequestSchema = (
	schema: Joi.ObjectSchema<any> | Joi.ArraySchema,
	requestBody: any
): boolean => {
	const { error } = schema
		.options({ abortEarly: false })
		.validate(requestBody);
	if (error) {
		throw BadRequestError(error.message);
	} else return true;
};

/**
 * This is the source of validateRequest middlewares.
 * @param schema Joi.ObjectSchema
 * @returns
 */
export const validateRequest =
	(schema: Joi.ObjectSchema<void>): RequestHandler =>
	(req, res, next) => {
		try {
			validateRequestSchema(schema, req.body);
			next();
		} catch (err) {
			next(err);
		}
	};

export const validateMany =
	// schema : Joi schema for mass verification
	// key : request body key for a set of data inside an array


		(schema: Joi.ObjectSchema<void>, key: string): RequestHandler =>
		async (req, res, next) => {
			try {
				validateRequestSchema(Joi.array().items(schema), req.body[key]);
			} catch (err) {
				next(err);
			}

			next();
		};

export const validateArrayOfIds =
	(schema: Joi.ArraySchema): RequestHandler =>
	(req, res, next) => {
		try {
			validateRequestSchema(schema, req.body.idsToBeDeleted);
			next();
		} catch (error) {
			next(error);
		}
		next();
	};
