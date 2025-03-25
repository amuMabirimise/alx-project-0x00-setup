import React from "react";
import Card from "@/components/Card";

const LandingPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Landing Page</h1>

      {/* Render the Card component multiple times */}
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default LandingPage;
