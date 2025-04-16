import React from "react";

const Resume = () => {
  return (
    <div className="flex self-center flex-col pt-10">
      <div className="w-[1200px] flex self-center">
        <h2 className="text-2xl font-bold self-start">RESUME</h2>
      </div>
      <div className="flex justify-center">
        <iframe
          src="\Haylee_Graham_Resume.pdf"
          className="w-[1200px] h-[800px] object-center p-5"
        />
      </div>
    </div>
  );
};

export default Resume;
