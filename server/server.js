import express from "express";
import { readdirSync } from 'fs';
import cors from 'cors';
import mongoose from 'mongoose';
const morgan =require("morgan");
require('dotenv').config();

const app = express();
//db connection
mongoose.connect(process.env.DATABASE).then(()=> console.log('DB Connected'))
.catch(() => console.log('DB Connection Failed', err));

//middlewares
app.use(cors()); //make sure cors is always on top of the rest of the middlewares for no errors
app.use(morgan("dev"));
app.use(express.json());

//route middleware 
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

const port = process.env.PORT || 6000;

app.listen(port, () => console.log(`whats good this is the server on port ${port}`));