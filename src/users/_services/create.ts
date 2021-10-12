import { UserModel, IUsers, UserInfo } from "users/model";
import { ExistingError } from "_utils/errors";
import { isExistingInDatabase } from "_utils";

export const createOneApplicantService = async (
	userInfo: UserInfo
): Promise<IUsers> => {
	if (await isExistingInDatabase("email", userInfo.email, UserModel))
		throw ExistingError("User Email");

	// creates and return applicant information
	return await UserModel.create(userInfo);
};
