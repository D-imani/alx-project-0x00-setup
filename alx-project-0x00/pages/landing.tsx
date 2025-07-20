import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC =  () => {
  return (
    <main>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
    
       {/* Small Buttons */}
      <Button title="Small Rounded-sm" styles="text-sm rounded-sm bg-blue-500 text-white px-3 py-1" />
      <Button title="Small Rounded-md" styles="text-sm rounded-md bg-blue-500 text-white px-3 py-1" />
      <Button title="Small Rounded-full" styles="text-sm rounded-full bg-blue-500 text-white px-3 py-1" />

      {/* Medium Buttons */}
      <Button title="Medium Rounded-sm" styles="text-base rounded-sm bg-green-500 text-white px-4 py-2" />
      <Button title="Medium Rounded-md" styles="text-base rounded-md bg-green-500 text-white px-4 py-2" />
      <Button title="Medium Rounded-full" styles="text-base rounded-full bg-green-500 text-white px-4 py-2" />

      {/* Large Buttons */}
      <Button title="Large Rounded-sm" styles="text-lg rounded-sm bg-purple-500 text-white px-5 py-3" />
      <Button title="Large Rounded-md" styles="text-lg rounded-md bg-purple-500 text-white px-5 py-3" />
      <Button title="Large Rounded-full" styles="text-lg rounded-full bg-purple-500 text-white px-5 py-3" />
        </main>
  )
}
export default Landing;