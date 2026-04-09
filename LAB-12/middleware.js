const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log("Request Time:", new Date().toLocaleString());
    next();
});


app.use((req, res, next) => {
    console.log("Method:", req.method);
    console.log("URL:", req.url);
    next();
});

app.get("/", (req, res) => {
    res.send("Middleware working!");
});

app.listen(3001, () => {
    console.log("Exercise 2 running on http://localhost:3001");
});