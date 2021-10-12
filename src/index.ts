import { clientHandler } from "configs/clientHandler";
import dotenv from "dotenv";
import dbConnect from "configs/dbConf";
import express from "express";
import morgan from "morgan";

// main router
import { mainRouter } from "./routes";

// Reads and parse env files
dotenv.config();

// start up
const app = express();

// constancts and defaults
const port = process.env.PORT || 5000;

// app usages
app.use(morgan("combined"));
app.use(express.json({ limit: "50mb" }));
app.use("/api", mainRouter);
// app.use(clientHandler);

// starting the server
const startServer = async () => {
	console.clear();
	console.log("Practise server for the mobile app nike shoes. \n");

	if (await dbConnect()) {
		app.listen(port, () => {
			console.log(
				`Now running and listening at \x1b[32m${
					process.env.NODE_ENV === "development"
						? "localhost:"
						: "SERVER-IP"
				}${port}`,
				"\x1b[0m"
			);
		});
		console.log("Sever logging starts now.");
	}
};

startServer();
