import React from "react";

function ServiceItem({ title, imgUrl, stack, description }) {
  return (
    <div className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden">
      <img
        src={imgUrl}
        alt="portfolio"
        className="w-auto h-36 md:h-48 p-5 mx-auto"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-white">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
          {description}
        </p>
      </div>
    </div>
    // </a>
  );
}

export default ServiceItem;
