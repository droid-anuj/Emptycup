const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
dotenv.config();

const ContactModel = require("./model/schema.js");
const apiRoutes = require("./routes/api.js");

const app = express();

app.use(express.json());
app.use(cors(
	{
		origin: "https://emptycup-ioqg.vercel.app",
	}
)
));
app.use("/api", apiRoutes);

mongoose.connect('mongodb+srv://helloanuj:helloanuj12345@cluster.gnr9kyw.mongodb.net/test?retryWrites=true&w=majority')
	.then(() => {
		console.log("Connected to MongoDB Atlas");
	})
	.catch((error) => {
		console.error("Unable to connect to MongoDB Atlas, Error:", error);
	});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
