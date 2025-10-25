import React from "react";
import Title from "./Title";
import { getLatestBlogs } from "@/sanity/queries";

const LatestBlog = async () => {
  const blogs = await getLatestBlogs();
  return (
    <div className="mb-10 lg:mb-20">
      <Title>Latest Blog</Title>
      <div>
        {blogs?.map((blog) => )}
      </div>
    </div>
  );
};

export default LatestBlog;
