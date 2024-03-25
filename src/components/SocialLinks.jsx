import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/aniket-nerkar",
      style: "rounded-tr-md bg-",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Aniket2421",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:aniketnerkar123@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/aniketresume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div>
      <ul className="flex flex-row gap-4 my-3">
        {links.map(({ id, child, href, style, download }) => (
          <li key={id} className={style}>
            <a
              href={href}
              className="flex justify-between items-center w-full  text-white hover:scale-100 hover:bg-blue-500 hover:text-white hover:rounded-full hover: p-2"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
