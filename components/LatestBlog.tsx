import React from "react";
import Title from "./Title";
import { getLatestBlogs } from "@/sanity/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const LatestBlog = async () => {
  const blogs = await getLatestBlogs();
  return (
    <div className="mb-10 lg:mb-20">
      <Title>Latest Blog</Title>
      <div>
        {blogs?.map((blog) => (
          <div key={blog?._id}>
            {blog?.mainImage && (
              <Image
                src={urlFor(blog.mainImage!).url()}
                alt="blogImage"
                width={500}
                height={300}
                className="w-full max-h-80 object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;
