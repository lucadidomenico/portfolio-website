import React from "react";
import Title from "./Title";
import AboutItem from "./AboutItem";
import Button from "./Button";

function About() {
  return (
    <div id="about" className="flex flex-col items-center md:flex-row">
      <div className="w-full md:w-10/12">
        <Title>About Me</Title>
        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <img
            src="/assets/profile.jpg"
            alt="profile"
            className="w-52 h-80 md:w-64 md:h-96 self-center object-cover md:w-4/12 border-solid border-4 border-black dark:border-white"
          ></img>
          <div className="flex flex-col md:w-7/12">
            <h1 className="text-3xl dark:text-white mb-1 mt-5 md:mt-1 md:mb-3 font-bold">
              Hey, I'm Luca.
            </h1>
            I work at the interception between Software Development and Software
            Security. I have 6 years of experience as a Software Security
            Consultant, Software Developer, and Trainer. Working in
            cybersecurity field has altered my perspective to prioritize
            technical understanding above all else: in order to effectively hack
            a computer, it's important to have a thorough comprehension of how
            it works.
            <AboutItem classe="pt-1" name="Age" value="29" />
            <AboutItem name="Gender" value="Man" />
            <AboutItem name="Language" value="English, Italian" />
            <AboutItem classe="pb-2" name="Role" value="Blockchain Engineer" />
            {/* <AboutItem classe="pb-2" name="Freelance" value="Available" /> */}
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
