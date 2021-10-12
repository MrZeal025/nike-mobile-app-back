import { UserModel, IUsers, UserInfo } from "users/model";
import { ExistingError } from "_utils/errors";
import { isExistingInDatabase } from "_utils";
import bcrypt from "bcryptjs";

export const createOneApplicantService = async (
	userInfo: UserInfo
): Promise<IUsers> => {
	if (await isExistingInDatabase("email", userInfo.email, UserModel))
		throw ExistingError("User Email");

	userInfo.password = bcrypt.hashSync(userInfo.password, 12);

	// creates and return applicant information
	return await UserModel.create(userInfo);
};
