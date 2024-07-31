const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const app = express();

const mongoose = require("mongoose");
require("dotenv").config();
const mongoURL = process.env.DB_HOST;
const PORT = process.env.PORT;

const contactsRouter = require("./routes/api/contacts");
const usersRouter = require("./routes/api/users");

app.use(logger("dev"));
app.use(cors());
app.use(express.json());

app.use(express.static("public"));

app.use("/api/contacts", contactsRouter);
app.use("/api/users", usersRouter);

app.use((req, res) => {
  res.status(404).json({ message: `Not found - ${req.path}` });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

const startServer = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log("Database connection successful.");
    app.listen(PORT, () => {
      console.log("Server is running on port", PORT);
    });
  } catch (error) {
    console.log("Database connection error:", error.message);
    process.exit(1);
  }
};

startServer();

module.exports = app;
