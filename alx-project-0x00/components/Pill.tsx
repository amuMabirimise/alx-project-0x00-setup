import React from "react";

interface PillProps {
  title: string;
}

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <div className="bg-[#E8F5E9] text-[#388E3C] rounded-full px-4 py-1 text-sm font-medium">
      {title}
    </div>
  );
};

export default Pill;
