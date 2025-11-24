import express from "express";
import dotenv from "dotenv";
import {nanoid} from "nanoid";

dotenv.config({
    path: "./.env"
})
const app = express();

//Middlewares
app.use(express.json({
    limit:"20kb"
 
}));
app.use(express.urlencoded({
    limit:"20kb",
    extended:true
}));

//connect to DB
import {connectDB} from "./config/db.config.js";
connectDB();

//Routes




app.get("/", (req, res) => {
    res.send(`Hello World! Your unique ID is: ${nanoid()}`);
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
})