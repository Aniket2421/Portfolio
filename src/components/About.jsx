import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 mt-5">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
          Hello! I'm Aniket Devendra Nerkar, a passionate computer science
          enthusiast based in Nagpur. I recently graduated with a specialization
          in Computer Science from Priyadarshani College of Engineering in 2022.
          As a fresher in the industry, I bring a solid foundation of project
          and theoretical knowledge acquired during my academic journey. While I
          may be new to the professional landscape, I am eager to apply my
          skills and learn from real-world experiences.
        </p>

        <br />

        <p className="text-xl">
          My expertise lies in front-end development, particularly in HTML, CSS,
          and JavaScript, with proficiency in React.js. Additionally, I have a
          basic understanding of Node.js, Express.js, MongoDB and Data
          Structures and Algorithms (DSA). I am excited about the opportunities
          to collaborate, learn, and contribute to innovative projects in the
          field of web development. Although I may lack industrial experience, I
          am motivated and committed to continuously enhancing my skills and
          knowledge to excel in this dynamic industry. Feel free to reach out to
          me at{" "}
          <a href="mailto:aniketnerkar123@gmail.com">
            <span className="hover:text-red-500 outline-none">
              "aniketnerkar123@gmail.com"
            </span>
          </a>{" "}
          to discuss potential opportunities or collaborations. Let's connect
          and create something amazing together!
        </p>
      </div>
    </div>
  );
};

export default About;
