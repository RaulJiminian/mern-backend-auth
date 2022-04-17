import { Router } from "express";
import * as controllers from "../controllers/comments.js";

const router = Router();

router.get("/comments/:comment_id", controllers.getComment);
router.post("/blogs/:blog_id/comments", controllers.createComment);
router.put("/comments/:comment_id", controllers.updateComment);
router.delete("/comments/:comment_id", controllers.deleteComment);

export default router;
