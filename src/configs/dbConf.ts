import mongoose from "mongoose";

const mongooseConnector = async (mongodbUri: string) => {
	let connected = false;

	while (!connected) {
		await mongoose
			.connect(mongodbUri, {
				useUnifiedTopology: true,
				useNewUrlParser: true,
			})
			.then(() => {
				connected = true;
				console.log("Successfully connected to the database.\n\n");
			})
			.catch((err) => {
				console.error(
					"We have a problem connecting to the database, retrying..."
				);
			});
	}

	return mongoose.connection.readyState > 0;
};

/**
 * Connects to the database.
 * @returns Boolean
 */
export default async function connectToDatabase(): Promise<boolean> {
	const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME } = process.env;

	if (!DB_HOST || !DB_PORT || !DB_USER || !DB_PASS || !DB_NAME) {
		console.log(DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME);
		throw new Error(
			"You have not defined the database credentials correctly."
		);
	}

	const mongodbUri = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

	console.log(
		`Connecting to the MongoDB database at: mongodb://${DB_HOST}:${DB_PORT}`
	);

	return await mongooseConnector(mongodbUri);
}
