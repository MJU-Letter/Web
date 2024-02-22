import { COLORS } from "@/constants/letterColors";
import React from "react";

interface colorPickProps {
  selectedColor: keyof typeof COLORS;
  setSelectedColor: (selectedColor: keyof typeof COLORS) => void;
}

const ColorPick = ({ selectedColor, setSelectedColor }: colorPickProps) => {
  return (
    <div className=" flex w-120 items-center justify-between">
      {Object.entries(COLORS).map(([colorName, colorValue]) => (
        <button
          key={colorName}
          onClick={() => setSelectedColor(colorName as keyof typeof COLORS)}
          className={`border-2 ${
            selectedColor === colorName
              ? "border-main-point"
              : "border-transparent"
          } transition-all ease-in-out duration-300 hover:scale-110 w-24 h-24 rounded-[50%]`}
          style={{ backgroundColor: colorValue }}
        />
      ))}
    </div>
  );
};

export default ColorPick;
