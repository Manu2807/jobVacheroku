import express from "express";
import connection from "./connection.js";
import userSignup from "./Routes/user.js";
import companyauth from "./Routes/company.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
const port = 8080;
app.use("/user", userSignup);
app.use("/company", companyauth);
app.get("/", (req, res) => {
  res.send("hy");
});
app.listen(port, async () => {
  try {
    await connection;
    console.log("server started");
  } catch (error) {
    console.log(error);
  }
});
