// components/Button.tsx
import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, size, shape }) => {
  let sizeClass;
  let shapeClass;

  // Set size classes based on the `size` prop
  switch (size) {
    case "small":
      sizeClass = "px-4 py-2 text-sm";
      break;
    case "medium":
      sizeClass = "px-6 py-3 text-base";
      break;
    case "large":
      sizeClass = "px-8 py-4 text-lg";
      break;
  }

  // Set shape classes based on the `shape` prop
  switch (shape) {
    case "rounded-sm":
      shapeClass = "rounded-sm";
      break;
    case "rounded-md":
      shapeClass = "rounded-md";
      break;
    case "rounded-full":
      shapeClass = "rounded-full";
      break;
  }

  return (
    <button
      className={`bg-blue-500 text-white ${sizeClass} ${shapeClass} hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
    >
      {title}
    </button>
  );
};

export default Button;
