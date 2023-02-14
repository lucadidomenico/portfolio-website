import React from "react";

function AboutItem({ name, value, classe }) {
  return (
    <p className={`${classe} flex flex-row `}>
      <h1 className="text-2l md:text-2l dark:text-white mb-1 md:mb-1 font-bold">
        {name}
      </h1>
      : {value}
    </p>
  );
}

export default AboutItem;
