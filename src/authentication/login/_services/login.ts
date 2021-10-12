import { UserModel, IUsers, UserInfo } from "users/model";
import { AuthenticationError } from "_utils/errors";
import bcrypt from "bcryptjs";

export const loginService = async (
	userInfo: UserInfo
): Promise<IUsers> => {

	const { email, password } = userInfo;

    const user = await UserModel.findOne({ email });

    if(user) {
        const match = await bcrypt.compare(
            password,
            user.password
        );

        if(!match) throw AuthenticationError("Invalid credentials");
        
    } else {
        throw AuthenticationError("There are no registered user that matches your credentials.")
    }
    
	// creates and return applicant information
	return user;
};
