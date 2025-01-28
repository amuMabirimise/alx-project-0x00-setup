import React from "react";
import Pill from "@/components/Pill";

const Card: React.FC = () => {
  return (
    <div className="p-4 border rounded shadow">
      <div className="p-2 flex gap-2 mt-2">
        <Pill title="Top Villa" />
        <Pill title="Self CheckIn" />
        <Pill title="Free Reschedule" />
      </div>
    </div>
  );
};

export default Card;
