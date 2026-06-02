
if (process.env.NODE_ENV !== "production") {
    const dotenv = await import("dotenv");
    dotenv.default.config();
}

import express from "express";
import expressLayouts from "express-ejs-layouts";
import path from "path";
import { fileURLToPath } from "url";
import indexRouter from "./controllers/index.js"

import mongoose  from "mongoose";


const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine" , "ejs");
app.set("views" , __dirname+"/views");
app.set("layout" , "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

mongoose.connect(process.env.DATABASE_URL );
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));

db.once("open", () => {
    console.log("Connected to MongoDB");
});

app.use("/" , indexRouter);

app.listen(process.env.PORT || 3000);