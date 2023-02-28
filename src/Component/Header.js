import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
export default function Header() {
  const toggle = useRef();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    toggle.current.classList.toggle("opacity-0");
    toggle.current.classList.toggle("-translate-y-full");
    toggle.current.classList.toggle("invisible");
    toggle.current.classList.toggle("h-0");
  }, [open]);
  return (
    <>
      <div className="z-10 text-main-white font-semibold font-sans text-xl fixed md:relative w-full flex flex-col justify-center md:flex-row md:justify-between md:bg-dark-gray md:px-4">
        <div className="bg-dark-gray flex justify-between p-4 h-16">
          <Link to="/">
            <h1>FarizApp</h1>
          </Link>
          <svg
            onClick={() => {
              setOpen(!open);
            }}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer md:hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            id="menu"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        <nav
          ref={toggle}
          className="h-0 border-t-4 border-gray-600 p-4 text-base bg-light-gray flex flex-col gap-4 transition-all opacity-0 invisible duration-200 -translate-y-full md:visible md:flex-row md:bg-transparent md:border-0 md:gap-12 md:opacity-100 md:translate-y-0"
        >
          <Link to="/">
            <span>HOME</span>
          </Link>
          <Link to="/contact">
            <span>CONTACT</span>
          </Link>
        </nav>
      </div>
    </>
  );
}
