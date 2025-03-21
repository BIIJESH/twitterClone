import User from "../models/user.model.js"
import Notification from "../models/notification.model.js"
import Post from "../models/post.model.js"
import { v2 as cloudinary } from "cloudinary"


export const createPost = async (req, res) => {
  try {
    const { text, img } = req.body
    const userId = req.user._id.toString()

    const user = await User.findById(userId)
    if (!user) return res.status(404).json({ message: "User not found" })

    if (user.followers && user.followers.length > 0) {
      for (const followerId of user.followers) {
        const newNotification = new Notification({
          type: "post",
          from: userId,
          to: followerId
        })
        await newNotification.save()
      }
    }
    if (!text && !img) { //checking that both are falsy
      return res.status(400).json({ error: "Post must have image or text" })
    }
    let imgUrl = img
    if (img) {
      try {
        const uploadResponse = await cloudinary.uploader.upload(img)
        imgUrl = uploadResponse.secure_url
      } catch (uploadError) {
        console.error("Error uploading image to cloudinary", uploadError)
        return res.status(500).json({ error: "Image upload failed" })
      }
    }
    const newPost = new Post({
      user: userId,
      text,
      img
    })
    await newPost.save()
    res.status(201).json(newPost)
  } catch (error) {
    res.status(500).json({ error: "Internal Server Erorr" })
    console.log("Error in post controller", error)
  }
}
export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (!post) {
      return res.status(404).json({ error: "Post not found" })
    }
    if (post.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ error: "You are not authorized to delete this post" })
    }
    if (post.img) {
      const imgId = post.img.split("/").pop().split(".")[0]
      await cloudinary.uploader.destroy(imgId)
    }
    await Post.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: "Post deleted successfully" })
  } catch (error) {
    console.log("Error in delete post controller", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}
export const commentOnPost = async (req, res) => {
  try {
    const { text } = req.body
    const postId = req.params.id
    const userId = req.user._id
    if (!text) {
      console.log("Can't comment on the post ")
      res.status(400).json({ error: "Text field is empty" })
    }
    const post = await Post.findById(postId)
    if (!post) {
      return res.status(404).json({ error: "Post not found" })
    }
    const comment = { user: userId, text }
    const newNotification = new Notification({
      type: "comment",
      from: userId, //user who commented
      to: post.user //user who created the post
    })
    await newNotification.save()
    post.comments.push(comment);
    await post.save()
    res.status(200).json(post)
  } catch (commentError) {
    console.log("Error in commentOnPost controller", commentError)
    res.status(500).json({ error: "Internal server error" })
  }
}
export const likeUnlikePost = async (req, res) => {
  try {
    const userId = req.user._id;
    const { id: postId } = req.params;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const userLikedPost = post.likes.includes(userId);

    if (userLikedPost) {
      await Post.updateOne({ _id: postId }, { $pull: { likes: userId } });
      await User.updateOne({ _id: userId }, { $pull: { likedPosts: postId } });

      const updatedLikes = post.likes.filter((id) => id.toString() !== userId.toString());
      return res.status(200).json({ message: "unliked post", updatedLikes: updatedLikes });
    } else {
      post.likes.push(userId);
      await User.updateOne({ _id: userId }, { $push: { likedPosts: postId } });
      await post.save();

      const notification = new Notification({
        from: userId,
        to: post.user,
        type: "like",
      });

      await notification.save();
      const updatedLikes = post.likes;
      return res.status(200).json({ message: "liked post", updatedLikes: updatedLikes });
    }
  } catch (error) {
    console.log("Error in like/unlike post:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};





















