import express from "express";
import fs from 'fs';

const app = express();

//route middleware 
fs.readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));


app.listen(8000, () => console.log(`whats good this is the server on port 8000`));