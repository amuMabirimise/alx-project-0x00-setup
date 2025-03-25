import React from "react";
import Pill from "./Pill";

const Card: React.FC = () => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">Card Title</h2>
      <div className="flex space-x-2 mt-2">
        <Pill title="Pill 1" />
        <Pill title="Pill 2" />
        <Pill title="Pill 3" />
      </div>
    </div>
  );
};

export default Card;
