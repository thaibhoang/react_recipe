"use client";

import SingleInstruction from "./SingleInstruction/page";

const Instructions = ({ instructions }) => {
  return (
    <>
      <h1 className="text-black font-bold text-xl py-4">Instructions</h1>
      {instructions.map((instruction, index) => (
        <SingleInstruction
          key={instruction.id}
          instruction={instruction}
          index={index}
        />
      ))}
    </>
  );
};

export default Instructions;
