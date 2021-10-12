import {  Document } from "mongoose";

export interface ILoginUsers extends Document, LoginUserSchema {}

export type LoginUserSchema = {
	email: string;
	password: string;
};