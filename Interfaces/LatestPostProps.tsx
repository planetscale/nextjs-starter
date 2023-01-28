import { StaticImageData } from "next/image";

export interface LatestPostProps {
  id: number;
  title: string;
  shortDescription: string;
  image: StaticImageData;
}
