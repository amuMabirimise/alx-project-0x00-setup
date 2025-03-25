// pages/landing.tsx
import React from "react";
import Button from "@/components/Button";

const Landing = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Landing Page</h1>

      {/* Create multiple instances of the Button component */}
      <div className="space-x-4">
        <Button title="Small Button" size="small" shape="rounded-sm" />
        <Button title="Medium Button" size="medium" shape="rounded-md" />
        <Button title="Large Button" size="large" shape="rounded-full" />
      </div>
    </div>
  );
};

export default Landing;
