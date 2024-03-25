import React from "react";
import blogX from "../assets/blogX.png";
import typing from "../assets/typing.png";
import podcast from "../assets/podcast.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: typing,
      name: "Typing-personal",
      deploymentlink: "https://typing-personal.vercel.app/",
      gitHublink: "https://github.com/Aniket2421/typing-personal",
    },
    {
      id: 2,
      src: blogX,
      name: "BlogX",
      deploymentlink: "https://blogx-kappa.vercel.app/",
      gitHublink: "https://github.com/Aniket2421/F-test",
    },
    {
      id: 3,
      src: podcast,
      name: "Podcast-app",
      deploymentlink: "https://podcast-app-eta.vercel.app/",
      gitHublink: "https://github.com/Aniket2421/Podcast_app",
    },
  ];

  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0 ">
          {portfolios.map(({ id, src, name, deploymentlink, gitHublink }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg cursor-pointer"
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-full"
              />
              <p className="p-3 text-center  hover:text-blue-500">{name}</p>
              <div className="flex justify-center">
                <button className="w-full sm:w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-blue-500">
                  <a
                    href={deploymentlink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </button>
                <button className="w-full sm:w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-blue-500">
                  <a
                    href={gitHublink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
