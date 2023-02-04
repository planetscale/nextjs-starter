import React from "react";
import { examplePosts } from "../../db/ExampleBlogData";

function BlogPost({ params: { id } }: any) {
  const blogPost = examplePosts.find((examplePost) => examplePost.id === parseInt(id));
  return (
    <div>
      <h1>{blogPost.title}</h1>
      <p>{blogPost.shortDescription}</p>
    </div>
  );
}

export default BlogPost;
