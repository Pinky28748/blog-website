const express = require("express");
const blogController = require("../controller/blogController");
const blogRouter = express.Router();

blogRouter.post("/blogs",blogController.createBlog);
blogRouter.get("/blogs",blogController.getBlogs);
blogRouter.delete("/blogs/:id",blogController.deleteBlog);
blogRouter.put("/blogs/:id/like",blogController.likeBlog);
blogRouter.put("/blogs/:id/comment",blogController.commentBlog);



module.exports = blogRouter;