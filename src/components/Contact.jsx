import React from "react";
import Title from "./Title";

function Contact() {
  return (
    <div id="contact" className="flex flex-col mb-10 ">
      {/* <div className="flex justify-center items-center"> */}
      <Title>Contact</Title>
      <div className="flex flex-row mx-auto">
        <a href="mailto:info@lucadidomenico.dev" target={"_blank"}>
          <img
            src="/assets/mail.png"
            className="w-10 h-10 md:w-16 md:h-16 p-2"
          ></img>
        </a>
        <a
          href="https://www.linkedin.com/in/luca-di-domenico/"
          target={"_blank"}
        >
          <img
            src="/assets/linkedin.png"
            className="w-10 h-10 md:w-16 md:h-16 p-2"
          ></img>
        </a>
        <a href="https://twitter.com/luca_dd7" target={"_blank"}>
          <img
            src="/assets/twitter.png"
            className="w-10 h-10 md:w-16 md:h-16 p-2"
          ></img>
        </a>
        <a href="https://github.com/lucadidomenico" target={"_blank"}>
          <img
            src="/assets/github.png"
            className="w-10 h-10 md:w-16 md:h-16 p-2"
          ></img>
        </a>
        <a href="https://discordapp.com/users/luca_dd7#1566" target={"_blank"}>
          <img
            src="/assets/discord.png"
            className="w-10 h-10 md:w-16 md:h-16 p-2"
          ></img>
        </a>
        <a href="https://t.me/Luca_dd" target={"_blank"}>
          <img
            src="/assets/telegram.png"
            className="w-10 h-10 md:w-16 md:h-16 p-2"
          ></img>
        </a>
      </div>
    </div>
  );
}

export default Contact;
