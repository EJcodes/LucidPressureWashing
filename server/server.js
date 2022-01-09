import express from "express"

const app = express();

app.get('/api/:message', (req, res) => {
    res.status(200).send(`Here is a thing i just lea${req.params.message}`);
});

app.listen(8000, () => console.log(`whats good this is the server on port 8000`));