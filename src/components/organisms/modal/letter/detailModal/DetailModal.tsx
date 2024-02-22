import { StaticImageData } from "next/image";
import React from "react";

interface DetailModalProps {
  letterText: string;
  user?: { name: string; profileImg: StaticImageData | string };
  backgroundColor: string;
  isMine: boolean;
}

const DetailModal = () => {
  return <div>DetailModal</div>;
};

export default DetailModal;
