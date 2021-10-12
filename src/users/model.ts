import { Schema, model, Document } from "mongoose";

export interface IUsers extends Document, UserInfo {}

export type UserInfo = {
	fullName: string;
	email: string;
	password: string;
	dateOfBirth: string;
};

const userSchema = new Schema({
	fullName: {
		type: String,
		require: true,
	},
	email: {
		type: String,
		require: true,
	},
	password: {
		type: String,
		require: true,
	},
	dateOfBirth: {
		type: String,
		require: true,
	},
});

export const UserModel = model<Document & IUsers>("users", userSchema);
