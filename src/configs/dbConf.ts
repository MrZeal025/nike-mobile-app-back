import mongoose from "mongoose";

const mongooseConnector = async () => {
	let connected = false;

	const deploymentURI =
		"mongodb+srv://bitezoo:test@nikeshoesdb.klmz9.mongodb.net/nikeshoesdb?retryWrites=true";

	while (!connected) {
		await mongoose
			.connect(deploymentURI, {
				useUnifiedTopology: true,
				useNewUrlParser: true,
			})
			.then(() => {
				connected = true;
				console.log("Successfully connected to the database.\n\n");
			})
			.catch(() => {
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
	console.log(`Connecting to the MongoDB database ${process.env.MONGO_URI}`);

	return await mongooseConnector();
}
