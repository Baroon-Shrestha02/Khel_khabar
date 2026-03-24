import express from "express";
import {
  createBlog,
  deleteBlog,
  getBlogs,
  getOneBlog,
  updateBlog,
} from "../controllers/blogController";

const router = express.Router();

export default router;
