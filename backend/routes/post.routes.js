import express from "express"
import { protectRoute } from "../middleware/protectRoute.js"
import { getAllPosts, commentOnPost, createPost, getLikedPosts, deletePost, likeUnlikePost, getFollowingPost } from "../controllers/post.controller.js"

const router = express.Router()

router.get("/all", protectRoute, getAllPosts)
router.get("/following", protectRoute, getFollowingPost)
router.post("/create", protectRoute, createPost)
router.get("/likes/:id", protectRoute, getLikedPosts)
router.post("/like/:id", protectRoute, likeUnlikePost)
router.post("/comment/:id", protectRoute, commentOnPost)
router.delete("/:id", protectRoute, deletePost)

export default router
