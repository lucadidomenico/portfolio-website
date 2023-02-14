import React from "react";
import Title from "./Title";

function Contact() {
  return (
    <div id="contact" className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form action="/" className="flex flex-col w-full md:w-7/12">
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent broder-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent broder-2 rounded-md focus:outline-none"
          />
          <button
            type="button"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white"
          >
            Work with me
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
