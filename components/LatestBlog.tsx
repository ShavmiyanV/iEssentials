import React from "react";
import Title from "./Title";

const LatestBlog = async () => {
  const blogs = await getLatestBlogs();
  return (
    <div className="mb-10 lg:mb-20">
      <Title>Latest Blog</Title>
    </div>
  );
};

export default LatestBlog;
