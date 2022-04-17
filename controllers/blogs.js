import Blog from "../models/blog.js";

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getBlog = async (req, res) => {
  try {
    const { blog_id } = req.params;
    const blog = await Blog.findById(blog_id).populate("comments");

    if (blog) {
      return res.json(blog);
    }

    res.status(400).json({ message: "Blog not found!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const createBlog = async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { blog_id } = req.params;
    const blog = Blog.findByIdAndUpdate(blog_id, req.body);
    res.status(200).json(blog);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { blog_id } = req.params;
    const deleted = await Blog.findByIdAndDelete(blog_id);

    if (deleted) {
      return res.status(200).send("Blog deleted!");
    }

    throw new Error("Blog not found!");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
