import express from "express";
import {
  newpost,
  getposts,
  getuserposts,
  getpostbyid,
  likePost,
  viewPost,
  getPostCount,
  unlikePost,
  getPostsByCategory,
  getsavedposts,
  gettopfourposts,
} from "../controllers/post.js";

const router = express.Router();

router.post("/newpost", newpost);
router.get("/getposts", getposts);
router.get("/getsavedposts/:id", getsavedposts);
router.get("/getuserposts/:username", getuserposts);
router.get("/gettopfourposts/:username", gettopfourposts);
router.get("/getpost/:id", getpostbyid);
router.post("/likepost", likePost);
router.post("/unlikepost", unlikePost);
router.post("/viewpost", viewPost);
router.get("/getpostcount", getPostCount);
router.get("/getpostsbycategory/:id", getPostsByCategory);

export default router;
