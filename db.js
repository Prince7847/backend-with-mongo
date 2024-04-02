const mongoose = require("mongoose");

const localhost = "mongodb://localhost:27017/test";

mongoose.connect(localhost, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Event listener for successful connection
db.on("connected", () => {
  console.log(`Connected to MongoDB database`);
});

// Event listener for connection error
db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

// Event listener for disconnection
db.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});

module.exports = db;
