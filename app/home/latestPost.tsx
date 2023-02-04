import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BlogPostProps } from "../../Interfaces/BlogPostProps";

interface Props {
  latestPostProps: BlogPostProps;
}

function LatestPost({ latestPostProps: { id, image, shortDescription, title } }: Props) {
  return (
    <Link className="flex flex-col w-80 rounded-lg font-roboto bg-[#222222]" href={`/blogs/${id}`}>
      <Image src={image} alt="Image of post" className="w-full mb-3" />
      <div className="pr-3 pl-3">
        <h3 className="text-base font-bold">{title}</h3>
        <p className="font-light text-sm mb-5">{shortDescription}</p>
      </div>
    </Link>
  );
}

export default LatestPost;
