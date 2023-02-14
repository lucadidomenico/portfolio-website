import React from "react";

function Menu() {
  return (
    <div
      id="menu"
      className="hidden xl:fixed xl:flex xl:flex-col xl:w-1/5 xl:h-full xl:items-center xl:justify-between"
    >
      <div className="pt-10">
        <h1 className="text-4xl md:text-6xl dark:text-white mb-1 md:mb-3 font-bold">
          Luca
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <a href="#intro">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#services">Service</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="flex flex-col items-center text-center pb-10">
        <p className="text-sm mt-2 opacity-50">
          &copy; {new Date().getFullYear()} Luca Di Domenico. <br></br>All
          rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Menu;
