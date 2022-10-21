import express from "express";
import {
  newpost,
  getposts,
  likePost,
  viewPost,
  getPostCount,
  unlikePost,
  getPostsByCategory,
} from "../controllers/post.js";

const router = express.Router();

router.post("/newpost", newpost);
router.get("/getposts", getposts);
router.post("/likepost", likePost);
router.post("/unlikepost", unlikePost);
router.post("/viewpost", viewPost);
router.get("/getpostcount", getPostCount);
router.get("/getpostsbycategory/:id", getPostsByCategory);

export default router;
