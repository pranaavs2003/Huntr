import express from "express";
import {
  getuserbyid,
  getuserdatabyusername,
  getuserbyusername,
  getrequests,
  follow,
  unfollow,
  getfollowers,
  isFollowing,
  getdesignerdetails,
} from "../controllers/user.js";

const router = express.Router();

router.get("/getuser/:id", getuserbyid);
router.get("/getuseruname/:username", getuserbyusername);
router.get("/getuserdata/:username", getuserdatabyusername);
router.get("/getrequests/:userid", getrequests);
router.get("/getfollowers/:userid", getfollowers);
router.get("/getdesignerdetails", getdesignerdetails);
router.post("/follow", follow);
router.post("/unfollow", unfollow);
router.post("/isfollowing", isFollowing);
//router.get("/getuserdata/:userid", getuserdata);

export default router;
