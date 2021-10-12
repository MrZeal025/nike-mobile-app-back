import { RequestHandler } from "express";
import { getOneUserService } from "users/_services/get";
/**
 *
 * @param req
 * @param res
 * @param next
 * This will be the main controller for registration
 * This will take a request body for the data consisting of
 * @params { firstName, lastName, applicantNumber,
 * emailUsedForRegistration, gradeLevelApplyingFor, Password }
 * @returns a response or an error catcher
 */
export const getOneUserController: RequestHandler = async (
	req,
	res,
	next
) => {
	try {
		const applicant = await getOneUserService(req.params.id);
		res.status(201).json({ success: true, data: applicant });
	} catch (error) {
		next(error);
	}
};
