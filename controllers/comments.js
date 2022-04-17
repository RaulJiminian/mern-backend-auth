import Comment from "../models/comment.js";
import Blog from "../models/blog.js";

export const getComment = async (req, res) => {
  try {
    const { comment_id } = req.params;
    const comment = await Comment.findById(comment_id);
    res.json(comment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const createComment = async (req, res) => {
  try {
    const { blog_id } = req.params;
    const blog = await Blog.findById(blog_id);

    if (blog) {
      const comment = new Comment(req.body);
      await comment.save();

      blog.comments.push(comment);
      await blog.save();

      return res.status(201).json(comment);
    }

    throw new Error("Blog does not exist!");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateComment = async (req, res) => {
  try {
    const { comment_id } = req.params;
    const comment = await Comment.findByIdAndUpdate(comment_id);
    res.status(201).json(comment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const { comment_id, blog_id } = req.params;
    const deleted = await Comment.findByIdAndDelete(comment_id);

    if (deleted) {
      const blog = await Blog.findById(blog_id);

      blog.comments = blog.comments.filter((comment) => {
        return comment._id !== comment_id;
      });

      blog.save();

      return res.status(200).send("Comment deleted!");
    }

    throw new Error("Comment not found!");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
