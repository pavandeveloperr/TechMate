import express from "express";
import {
  addToPlaylist,
  changePassword,
  forgetPassword,
  getMyProfile,
  login,
  logout,
  register,
  removeFromPlaylist,
  resetPassword,
  updateProfile,
  updateProfilePicture,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// To register a new user
router.route("/register").post(register);

// To login a user
router.route("/login").post(login);

// logout
router.route("/logout").get(logout);

// get my profile
router.route("/me").get(isAuthenticated, getMyProfile);

// changepassword
router.route("/changepassword").put(isAuthenticated, changePassword);

// upadatProfile
router.route("/updateprofile").put(isAuthenticated, updateProfile);

// updateProfilepicture
router
  .route("/updateprofilepicture")
  .put(isAuthenticated, updateProfilePicture);

// forgetPassword
router.route("/forgetpassword").post(forgetPassword);

// resetPassword
router.route("/resetpassword/:token").put(resetPassword);

// AddPlayList
router.route("/addtoplaylist").post(isAuthenticated, addToPlaylist);

// RemoveFromPlaylist
router.route("/removefromplaylist").delete(isAuthenticated, removeFromPlaylist);

export default router;
