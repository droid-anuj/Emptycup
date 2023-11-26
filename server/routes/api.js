const { Router } = require("express");
const ContactModel = require("../model/schema.js");

const router = Router();

router.get("/contacts", async (req, res) => {
	try {
		const contacts = await ContactModel.find();
		res.set("Content-Type", "application/json");
		res.json(contacts);
	} catch (err) {
		console.error("Failed to retrieve objects", err);
		res.status(500).json({ error: "Failed to retrieve objects" });
	}
});

module.exports = router;
