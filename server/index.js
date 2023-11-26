const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
dotenv.config();

const ContactModel = require("./model/schema.js");
const apiRoutes = require("./routes/api.js");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());
app.use(cors(
	{
		origin:"emptycupserver.vercel.app",
	}
)
));
app.use("/api", apiRoutes);


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
