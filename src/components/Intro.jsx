import React from "react";
import Typed from "react-typed";

function Intro() {
  return (
    <div
      id="intro"
      className="flex flex-col items-center justify-center text-center pt-20 pb-6 h-screen"
    >
      <img
        src="/assets/profile.jpg"
        alt="profile"
        className="w-72 h-72 object-cover rounded-full border-solid border-4 border-black	dark:border-white"
      ></img>

      <p className="text-base md:text-xl mb-3 font-medium pt-10">
        <Typed
          strings={[
            "I'm a Blockchain Engineer",
            "I'm a Security Expert",
            "I'm a Trainer",
            "I'm a Software Developer",
          ]}
          typeSpeed={100}
          backSpeed={50}
          loop
        />
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        I work at the interception between Software Development and Software
        Security. I work at the interception between Software Development and
        Software Security. I have an overall experience of 6 years in the IT
        field as a Software Security Consultant , Blockchain Engineer, and
        Trainer.
      </p>
      <div className="flex flex-row">
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

export default Intro;
