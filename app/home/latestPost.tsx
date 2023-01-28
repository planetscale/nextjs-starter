import Image from "next/image";
import React from "react";
import { LatestPostProps } from "../../Interfaces/LatestPostProps";

interface Props {
  latestPostProps: LatestPostProps;
}

function LatestPost({ latestPostProps: { id, image, shortDescription, title } }: Props) {
  return (
    <div className="flex flex-col w-80 rounded-lg font-roboto bg-[#222222]">
      <Image src={image} alt="Image of post" className="w-full mb-3" />
      <div className="pr-3 pl-3">
        <h3 className="text-base font-bold">{title}</h3>
        <p className="font-light text-sm mb-5">{shortDescription}</p>
      </div>
    </div>
  );
}

export default LatestPost;
