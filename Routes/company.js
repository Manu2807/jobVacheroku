import express from "express";

import comModal from "../Schema/companySc.js";

const companyauth = express.Router();

companyauth.get("/", async (req, res) => {
  const data = await comModal.find();
  return res.send(data);
});
companyauth.post("/add", async (req, res) => {
  const { companyName, location, position, contract } = req.body;
  await comModal.create({
    companyName,

    location,
    position,
    contract,
  });
  return res.send({
    mes: "Add company successfully",
  });
});

companyauth.delete("/delete:id", async (req, res) => {
  const id = req.params.id;
  await comModal.findByIdAndDelete(id);

  return res.send({
    mes: "deleted Successfully",
  });
});
companyauth.patch("/update:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  await comModal.findByIdAndUpdate(id, body);
  res.send({
    mes: "Update Successfully",
  });
});
export default companyauth;
