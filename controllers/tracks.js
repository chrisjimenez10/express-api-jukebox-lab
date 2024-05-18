//Import
const express = require("express");
const router = express.Router();
const Track = require("../models/track.js");

//Routes
router.post("/", async (req, res)=>{
    try{
        if(!req.body.title || !req.body.artist){
            res.status(400);
            throw new Error("Bad Request - Missing Properties");
        }
        const createdTrack = await Track.create(req.body);
        res.status(201).json(createdTrack);
    }catch(error){
        if(res.statusCode === 400){
            res.json({error:error.message});
        }else{
            res.status(500).json({error:error.message});
        }
    }
});

router.get("/", async (req, res)=>{
    try{
        const listOfTracks = await Track.find();
        res.status(200).json(listOfTracks);
    }catch(error){
        res.status(500).json({error:error.message});
    }
});

router.get("/:trackId", async (req, res)=>{
    const {trackId} = req.params;
    try{
        const singleTrack = await Track.findById(trackId);
        if(!singleTrack){
            res.status(404);
            throw new Error("Track does not exist");
        }
        res.status(200).json(singleTrack);
    }catch(error){
        if(res.statusCode === 404){
            res.json({error:error.message});
        }else {
            res.status(500).json({error:error.message});
        }
    }
});

router.put("/:trackId", async (req, res)=>{
    const {trackId} = req.params;
    try{
        const updatedTrack = await Track.findByIdAndUpdate(trackId, req.body, {new: true});
        if(!updatedTrack){
            res.status(404);
            throw new Error("Track does not exist");
        }
        res.status(200).json(updatedTrack);
    }catch(error){
        if(res.statusCode === 404){
            res.json({error:error.message});
        }else{
            res.status(500).json({error:error.message});
        }
    }
});

router.delete("/:trackId", async (req, res)=>{
    const {trackId} = req.params;
    try{
        const deletedTrack = await Track.findByIdAndDelete(trackId);
        if(!deletedTrack){
            res.status(404);
            throw new Error("Track does not exist");
        }
        res.status(200).json(deletedTrack);
    }catch(error){
        if(res.statusCode === 404){
            res.json({error:error.message})
        }else{
            res.status(500).json({error:error.message});
        }
    }
});

//Export
module.exports = router;