import { COLORS } from "@/constants/letterColors";
import React from "react";

interface colorPickProps {
  selectedColor: keyof typeof COLORS;
  setSelectedColor: (selectedColor: keyof typeof COLORS) => void;
}

const ColorPick = ({ selectedColor, setSelectedColor }: colorPickProps) => {
  return (
    <div className="transition-all flex w-120 items-center justify-between">
      <button
        onClick={() => setSelectedColor("red")}
        className={` ${
          selectedColor === "red" ? "border-2 border-main-point" : ""
        }  bg-point-red w-24 h-24 rounded-[50%]`}
      />
      <button
        onClick={() => setSelectedColor("green")}
        className={` ${
          selectedColor === "green" ? "border-2 border-main-point" : ""
        } bg-point-green w-24 h-24 rounded-[50%]`}
      />
      <button
        onClick={() => setSelectedColor("yellow")}
        className={` ${
          selectedColor === "yellow" ? "border-2 border-main-point" : ""
        } bg-point-yellow w-24 h-24 rounded-[50%]`}
      />
      <button
        onClick={() => setSelectedColor("blue")}
        className={` ${
          selectedColor === "blue" ? "border-2 border-main-point" : ""
        } bg-point-blue w-24 h-24 rounded-[50%]`}
      />
    </div>
  );
};

export default ColorPick;
