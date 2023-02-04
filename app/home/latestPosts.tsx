import React from "react";
import { examplePosts } from "../db/ExampleBlogData";
import LatestPost from "./latestPost";

export default function LatestPosts() {
  return (
    <div className="bg-[#1C1C1C] pr-9 pl-9 pt-4 pb-4 rounded-xl">
      <h1 className="text-4xl font-roboto mb-6">Latest posts</h1>
      <div className="flex flex-wrap gap-[3.7em]">
        {examplePosts.map((examplePost) => (
          <LatestPost key={examplePost.id} latestPostProps={examplePost} />
        ))}
      </div>
    </div>
  );
}
