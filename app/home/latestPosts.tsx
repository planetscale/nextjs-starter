import React from "react";
import LatestPost from "./latestPost";
import lastPostExample from "../../public/assets/lastPostExample.png";
import { LatestPostProps } from "../../Interfaces/LatestPostProps";

export default function LatestPosts() {
  const examplePosts: LatestPostProps[] = [
    { id: 1, title: "House", shortDescription: "My first steps with my new house!", image: lastPostExample },
    { id: 2, title: "Music", shortDescription: "My music of the year!", image: lastPostExample },
    { id: 3, title: "Work", shortDescription: "My new work!", image: lastPostExample },
  ];
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
