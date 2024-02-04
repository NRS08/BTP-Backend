require("dotenv").config();
require("express-async-errors");
const connectDB = require("./db/connect");
const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const authRouter = require("./routes/auth");

app.get("/", (req, res) => {
  res.send("Insurance Dapp");
});

app.use("/api/v1/auth", authRouter);

const port = process.env.PORT || 4000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listining on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
