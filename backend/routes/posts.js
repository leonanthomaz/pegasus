const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//create a post
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
    } catch (err) {
      res.status(500).json({msg: "Falha ao enviar post", err});
    }
});


//update a post
router.put("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params._id);
      if (post.userId === req.body.userId) {
        await post.updateOne({ $set: req.body });
        res.status(200).json({msg: "Post atualizado com sucesso!", post});
      } else {
        res.status(403).json({msg: "Você só pode atualizar seu comentário"});
      }
    } catch (err) {
      res.status(500).json(err);
    }
});

//delete a post
router.delete("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      await post.deleteOne();
      res.status(200).json({msg: "Post deletado com sucesso!"});
    } catch (err) {
      res.status(500).json({msg: "Falha ao deletar post",err});
    }
});


//like / dislike a post
router.put("/:id/like", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post.likes.includes(req.body.userId)) {
        await post.updateOne({ $push: { likes: req.body.userId } });
        res.status(200).json({msg: "Like enviado com sucesso!"});
      } else {
        await post.updateOne({ $pull: { likes: req.body.userId } });
        res.status(200).json({msg: "Dislike enviado com sucesso!"});
      }
    } catch (err) {
      res.status(500).json(err);
    }
});

//get a post
router.get("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
});


//get timeline posts
router.get("/timeline/:userId", async (req, res) => {
    try {
      const currentUser = await User.findById(req.params.userId);
      const userPosts = await Post.find({ userId: currentUser._id });
      const friendPosts = await Promise.all(
        currentUser.followings.map((friendId) => {
          return Post.find({ userId: friendId });
        })
      );
      res.status(200).json(userPosts.concat(...friendPosts))
    } catch (err) {
      res.status(500).json(err);
    }
});

//get users all posts
router.get("/profile/:username", async (req, res) => {
  try {
    const user = await User.findOne({username: req.params.username})
    const posts = await Post.find({userId: user._id})
    res.status(200).json(posts)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
