import { JSX } from "react";
import Projects from "../Projects";
import About from "../About";
import Contact from "../Contact";

const Main = (): JSX.Element => {
  const location = [
    {
      x: "translate-x-96",
      y: "translate-y-0",
      reflectX: "-translate-x-96",
      animation: "animate-orbit-1",
      reflectAnimation: "animate-orbit-4"
    },
    {
      x: "translate-x-64",
      y: "translate-y-64",
      reflectX: "-translate-x-64",
      animation: "animate-orbit-2",
      reflectAnimation: "animate-orbit-5"
    },
    {
      x: "translate-x-64",
      y: "-translate-y-64",
      reflectX: "-translate-x-64",
      animation: "animate-orbit-3",
      reflectAnimation: "animate-orbit-6"
    }
  ];

  return (
    <>
      <section className="bg-gray-950 h-screen w-screen font-mono text-lime-500 ">
        <div className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-3/4 size-96">
          {[...Array(3)].map((_item, index) => {
            const currLocation = location[index];
            return (
              <>
                <div
                  className={`rounded-full absolute size-16 bg-lime-500 top-40 left-40 ${currLocation.x} ${currLocation.y} ${currLocation.animation}`}
                />
                <div
                  className={`rounded-full absolute size-16 bg-lime-500 top-40 left-40 ${currLocation.reflectX} ${currLocation.y} ${currLocation.reflectAnimation}`}
                />
              </>
            );
          })}
          <div className="rounded-full absolute size-96 bg-lime-800" />
        </div>
        <div className="text-center w-4/5 absolute top-2/4 left-2/4 -translate-x-1/2 translate-y-48">
          <p className=" text-2xl mb-8">Welcome! Scroll down for more</p>
        </div>
      </section>
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Main;
