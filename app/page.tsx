import React from "react";
import LatestPosts from "./home/latestPosts";
import Welcome from "./home/welcome";

export default function HomePage() {
  return (
    <div className="flex-col space-y-4 ">
      <Welcome />
      <LatestPosts />
    </div>
  );
}
