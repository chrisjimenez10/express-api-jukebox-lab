//Import
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const trackRouter = require("./controllers/tracks.js");

const fetchAudio = require("./app.js");

//Database
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", ()=>{
    console.log(`Connected to MongoDB ${mongoose.connection.name}`);
});

//Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/tracks", trackRouter);

app.get("/audio", async (req, res)=>{
    res.json(await fetchAudio())
})

//Server
app.listen(process.env.PORT ? process.env.PORT : 4100, ()=>{
    console.log(`Server is running on port ${process.env.PORT ? process.env.PORT : 4100}`);
})
