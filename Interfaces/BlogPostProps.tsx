import { StaticImageData } from "next/image";

export interface BlogPostProps {
  id: number;
  title: string;
  shortDescription: string;
  image: StaticImageData;
}
