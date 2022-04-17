import { Router } from "express";
import blogsRoutes from "./blogs.js";
import commentsRoutes from "./comments.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/", blogsRoutes);
router.use("/", commentsRoutes);

export default router;
