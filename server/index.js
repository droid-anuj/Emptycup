const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
dotenv.config();

const ContactModel = require("./model/schema.js");
const apiRoutes = require("./routes/api.js");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = "mongodb+srv://helloanuj:helloanuj12345@cluster.gnr9kyw.mongodb.net/test?retryWrites=true&w=majority";

app.use(express.json());
app.use("/api", apiRoutes);
app.use(cors());



const MONGODB_URI = "mongodb+srv://helloanuj:helloanuj12345@cluster.gnr9kyw.mongodb.net/test?retryWrites=true&w=majority";
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
