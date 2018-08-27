const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const Post = require('../../models/Post');
router.get("/test", (req, res) => res.json({ test: "this is working" }));

/**
 *   POST api/posts
 *
 * * create post
 *
 *
 * @private
 */

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {}
  // validation
  const { errors, isValid } = validatePostData(req.body);

    //* check if isValid is false
    if (!isValid) {
      return res.status(400).json(errors);
    }


  // schema
  const newPost = new Post({
    text: req.body.text,
    name:req.body.name,
    avatar: req.body.avatar,
    user: req.user.id
  }
); 

  newPost.save().then( post => res.json(post));
);

module.exports = router;
