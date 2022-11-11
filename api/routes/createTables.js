import {
  createTableSaved,
  savePost,
  createTableFollow,
  follow,
  createTableRequest,
  createRequest,
  createTableUserdata,
  createUserdata,
} from "../controllers/createTable.js";
import express from "express";

const router = express.Router();

router.get("/createtableuserdata", createTableUserdata);
router.get("/createtablesaved", createTableSaved);
router.get("/createtablefollow", createTableFollow);
router.get("/createtablerequest", createTableRequest);
router.post("/createuserdata", createUserdata);
router.post("/savepost", savePost);
router.post("/follow", follow);
router.post("/createrequest", createRequest);
//router.post("/register", register);
//router.post("/logout", logout);

export default router;
