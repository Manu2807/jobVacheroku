import express from "express";
import mongoose from "mongoose";
const connection = mongoose.connect("mongodb+srv://ManuMangal:ManuMangal@cluster0.vas47pl.mongodb.net/?retryWrites=true&w=majority");
export default connection;
