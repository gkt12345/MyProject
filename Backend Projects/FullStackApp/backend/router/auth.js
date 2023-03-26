// const { json } = require('express');
const express = require("express");
const router = express.Router();

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("Hello world from the server router js");
});

// router.post("/register", (req, res) => {
//     const { name, email, phone, work, password, cpassword } = req.body;

//     if (!name || !email || !phone || !work || !password || !cpassword) {
//       return res.status(422).json({ error: "please field the field properly" });
//     }

//     User.findOne({ email: email }).then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: "Email already Exist" });
//       }

//     const user = new User({ name, email, phone, work, password, cpassword });

//     user.save().then(() => {
//         res.status(201).json({message : "user registerd successfully"})
//       }).catch((err) => res.status(500).json({ error: "Failed to registerd" }));

//     }).catch((err) => {console.log(err);});

// });

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "please field the field properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already Exist" });
    }

    const user = new User({ name, email, phone, work, password, cpassword });

    await user.save();

    res.status(201).json({ message: "user registerd successfully" });
 
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
