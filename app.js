require("dotenv").config();
require("express-async-errors");
const connectDB = require("./db/connect");
const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
const authenticateUser = require("./middlewares/authenticateUser");
const authenticateHospital = require("./middlewares/authenticateHospital");
const authenticateCompany = require("./middlewares/authenticateCompany");

const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const companyRouter = require("./routes/company");
const hospitalRouter = require("./routes/hospital");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Insurance Dapp");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/u", authenticateUser, userRouter);
app.use("/api/v1/c", authenticateCompany, companyRouter);
app.use("/api/v1/h", authenticateHospital, hospitalRouter);

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
