import React from "react";
import Welcome from "./home/welcome";

export default function HomePage() {
  return (
    <div className="bg-[#1C1C1C] flex-col space-y-4 pr-9 pl-9 pt-4 pb-4 ">
      <Welcome />
      <Welcome />
      <Welcome />
    </div>
  );
}
