import { RequestHandler } from "express";
import { createOneApplicantService } from "users/_services/create";
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
export const createOneApplicantController: RequestHandler = async (
	req,
	res,
	next
) => {
	try {
		const applicant = await createOneApplicantService(req.body);
		res.status(201).json({ success: true, data: applicant });
	} catch (error) {
		next(error);
	}
};
