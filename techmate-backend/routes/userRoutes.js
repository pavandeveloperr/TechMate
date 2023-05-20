import express from "express";
import { login, logout, register } from "../controllers/userController.js";

const router = express.Router();

// To register a new user
router.route("/register").post(register);

// To login a user
router.route("/login").post(login);

// logout
router.route("/logout").get(logout);

// get my profile

// changepassword
// upadatProfile
// updateProfilepicture

// forgetPassword
// resetPassword

// AddPlayList
// RemoveFromPlaylist

export default router;
