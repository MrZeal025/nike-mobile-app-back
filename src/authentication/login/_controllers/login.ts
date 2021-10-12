import { RequestHandler } from "express";
import { loginService } from "authentication/login/_services/login";
/**
 *
 * @param req
 * @param res
 * @param next
 * This will be the main controller for login
 * This will take a request body for the data 
 * @returns a response or an error catcher
 */
export const loginController: RequestHandler = async (
	req,
	res,
	next
) => {
	try {
		const applicant = await loginService(req.body);
		res.status(201).json({ success: true, data: applicant });
	} catch (error) {
		next(error);
	}
};
