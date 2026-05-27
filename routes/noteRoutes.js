const express = require("express");

const router = express.Router();

const Note =
require("../models/Note");

router.post("/add", async(req,res)=>{

    const note = new Note({

        title:req.body.title,

        text:req.body.text

    });

    await note.save();

    res.json({

        message:"Note Added"

    });

});

router.get("/", async(req,res)=>{

    const notes =
    await Note.find();

    res.json(notes);

});

module.exports = router;