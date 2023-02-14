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
            "I'm a Software Developer",
            "I'm a Trainer",
          ]}
          typeSpeed={100}
          backSpeed={50}
          loop
        />
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        I'm a Blockchain Engineer with high technical background due to my 6
        years of experience as Software Security Consultant, Software Developer
        and Trainer.
      </p>
    </div>
  );
}

export default Intro;
