import express from "express";
import {
  deleteJob,
  getAllJobs,
  getMyJobs,
  getSingleJob,
  postJob,
  updateJob,
} from "../controllers/jobController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// Routes that do not require authentication
router.get("/getall", getAllJobs);
router.get("/:id", getSingleJob);

// Routes that require authentication
router.use(isAuthenticated);

router.post("/post", postJob);
router.get("/getmyjobs", getMyJobs);
router.put("/update/:id", updateJob);
router.delete("/delete/:id", deleteJob);

export default router;
