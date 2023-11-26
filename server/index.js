const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
dotenv.config();

const ContactModel = require("./model/schema.js");
const apiRoutes = require("./routes/api.js");

const app = express();

app.use(express.json());

app.use("/api", apiRoutes);

app.use(cors(
	{
		origin:  "https://emptycup-frontend.vercel.app",
	}
)

);


const MONGODB_URI = process.env.MONGODB_URI;
mongoose
	.connect(MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Connected to MongoDB Atlas");
	})
	.catch((error) => {
		console.error("Unable to connect to MongoDB Atlas, Error:", error);
	});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
