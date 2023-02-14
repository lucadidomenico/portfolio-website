import React from "react";
import Title from "./Title";
import AboutItem from "./AboutItem";
import Button from "./Button";

function About() {
  return (
    <div id="about" className="flex flex-col items-center my-20 md:flex-row">
      <div className="w-full md:w-10/12">
        <Title>About Me</Title>
        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <img
            src="/assets/profile.jpg"
            alt="profile"
            className="w-52 h-80 md:w-64 md:h-96 self-center object-cover md:w-4/12"
          ></img>
          <div className="flex flex-col md:w-7/12">
            <h1 className="text-3xl dark:text-white mb-1 mt-5 md:mb-3 font-bold">
              Hey, I'm Luca.
            </h1>
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Eum
            Voluptatibus Dolores Aspernatur Animi Perferendis Iste! Culpa Aut
            Enim Debitis Optio Illum Ipsum Quis Perferendis Dolor Expedita.
            Similique Necessitatibus Inventore Doloremque.
            <AboutItem classe="pt-1" name="Age" value="29" />
            <AboutItem name="Gender" value="Man" />
            <AboutItem name="Language" value="English, Italian" />
            <AboutItem name="Work" value="Blockchain Engineer" />
            <AboutItem classe="pb-2" name="Freelance" value="Available" />
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
