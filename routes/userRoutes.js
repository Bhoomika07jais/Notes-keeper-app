const express = require("express");

const router = express.Router();

const User =
require("../models/User");

/* REGISTER USER */

router.post("/register",
async(req,res)=>{

    try{

        const {

            name,
            email,
            password

        } = req.body;

        const user =
        new User({

            name,
            email,
            password

        });

        await user.save();

        res.json({

            message:
            "User Registered Successfully"

        });

    }

    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

});

/* LOGIN USER */

router.post("/login",
async(req,res)=>{

    try{

        const {

            email,
            password

        } = req.body;

        const user =
        await User.findOne({email});

        if(!user){

            return res.json({

                message:"User Not Found"

            });

        }

        if(user.password !== password){

            return res.json({

                message:"Invalid Password"

            });

        }

        res.json({

            message:"Login Successful"

        });

    }

    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

});

module.exports = router;