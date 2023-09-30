import React from "react";

const SectionTitle = ({ number, title }) => {
  return (
    <h5 className="flex gap-5 sm:self-start sm:gap-7">
      <span className="font-bold text-white text-opacity-25 sm:pl-10 lg:pl-0">
        {number}
      </span>
      {title}
    </h5>
  );
};

export default SectionTitle;
