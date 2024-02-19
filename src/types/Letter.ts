import { COLORS } from "@/constants/letterColors";
import { StaticImageData } from "next/image";

export interface letterProps {
  letterText: string;
  user?: { name: string; profileImg: StaticImageData | string };
  backgroundColor: keyof typeof COLORS;
  isMine: boolean;
}
