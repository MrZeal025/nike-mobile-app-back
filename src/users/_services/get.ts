import { UserModel, IUsers } from "users/model";
import { NotExistingError } from "_utils/errors";

export const getOneUserService = async (
	id: string
): Promise<IUsers> => {

    const user = await UserModel.findById(id);

    if(!user) throw NotExistingError("User");

	return user;
};
