import express from "express";
import userModal from "../Schema/userSc.js";
const userSignup = express.Router();
userSignup.post("/signup", async (req, res) => {
  let { email, name, password } = req.body;
  const validUser = await userModal.findOne({ email });
  if (validUser) {
    return res.status(402).send({
      response: "Invalid log in",
      mes: "emailalready exit",
    });
  } else {
    if (email.search(/@masaischool.com/) === -1) {
      await userModal.create({ name, email, password, role: "student" });
      return res.send({
        mes: "Student signup successfully",
      });
    } else {
      await userModal.create({ name, email, password, role: "admin" });
      return res.send({
        mes: "Admin signup successfully",
      });
    }
  }
});
userSignup.get("/", async (req, res) => {
  const data = await userModal.find();
  res.send(data);
});
userSignup.post("/login", async (req, res) => {
  let { email, password } = req.body;
  const validuser = await userModal.findOne({ email, password });

  if (validuser) {
    res.send({
      mes: "login successfully",
      data: validuser,
    });
  } else {
    res.send({
      mes: "Invalid user",
    });
  }
});
export default userSignup;
