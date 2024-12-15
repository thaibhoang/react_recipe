"use client";

const SingleInstruction = ({ instruction, index }) => {
  return (
    <>
      <div className="pl-2 leading-8">
        {index + 1}. {instruction.content}
      </div>
    </>
  );
};

export default SingleInstruction;
