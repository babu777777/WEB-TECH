const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/lab12")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));
const userSchema = new mongoose.Schema({
    name: String
});

const User = mongoose.model("User", userSchema);
app.post("/users", async (req, res) => {
    const user = await User.create({ name: req.body.name });
    res.json(user);
});


app.get("/users", async (req, res) => {
    const users = await User.find();
    res.json(users);
});

app.put("/users/:id", async (req, res) => {
    const user = await User.findByIdAndUpdate(
        req.params.id,
        { name: req.body.name },
        { new: true }
    );
    res.json(user);
});

app.delete("/users/:id", async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.send("Deleted");
});

app.listen(3002, () => {
    console.log("Exercise 3 running on http://localhost:3002");
});