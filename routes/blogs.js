import { Router } from "express";
import * as controllers from "../controllers/blogs.js";

const router = Router();

router.get("/blogs", controllers.getBlogs);
router.get("/blogs/:blog_id", controllers.getBlog);
router.post("/blogs", controllers.createBlog);
router.put("/blogs/:blog_id", controllers.updateBlog);
router.delete("/blogs/:blog_id", controllers.deleteBlog);

export default router;
