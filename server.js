const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware for JSON parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to Mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googleBooks", {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

// Define routes here
app.use(require("./routes"));

// All other routes sent to the index.html
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
	console.log(`App is listening on http://localhost:${PORT} !`);
});