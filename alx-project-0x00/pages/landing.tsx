import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Card />
      <div className="flex flex-wrap gap-4 mt-4">
        <Button
          title="Small Rounded"
          styles="text-sm rounded-sm bg-blue-500 text-white"
        />
        <Button
          title="Medium Rounded"
          styles="text-base rounded-md bg-green-500 text-white"
        />
        <Button
          title="Large Rounded"
          styles="text-lg rounded-full bg-red-500 text-white"
        />
      </div>
    </div>
  );
};

export default Landing;
