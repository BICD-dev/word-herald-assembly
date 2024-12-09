import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div
        className={`flex justify-between items-center text-black py-6 
        lg:px-8 md:px-32 px-8 bg-white drop-shadow-xl fixed top-0 w-screen z-70 `}
      >
        <h1 className="lg:text-[2rem] md:text-2xl text-2xl font-extrabold ">
          Word Herald Assembly
        </h1>
        {/* desktop view */}
        <ol className="hidden lg:flex gap-12 justify-between items-center h-full font-semibold text-base ">
          <li className="hover:bg-sky-400 hover:text-white rounded-md p-3 transition-all cursor-pointer">
            <Link to="/" className="z-10">
              Home
            </Link>
          </li>
          <li className="hover:bg-sky-400 hover:text-white rounded-md p-3 transition-all cursor-pointer">
            <Link to="/about">Who we are</Link>
          </li>
          <li className="hover:bg-sky-400 hover:text-white rounded-md p-3 transition-all cursor-pointer">
            <Link to="/contact">Media</Link>
          </li>
          <li className="hover:bg-sky-400 hover:text-white rounded-md p-3 transition-all cursor-pointer">
            <Link to="/prayer" className="z-50">
              Prayer for salvation
            </Link>
          </li>

          <li className="hover:bg-sky-400 hover:text-white rounded-md p-3 transition-all cursor-pointer">
            <Link to="/give">GIVE</Link>
          </li>
        </ol>

        {/* Mobile view */}
        <i
          className="lg:hidden block text-5xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          &equiv;
        </i>

        <div
          className={`absolute lg:hidden top-24 left-0 w-full  bg-white flex flex-col items-center gap-6 font-semibold text-lg
          transform transition-transform ${
            isMenuOpen ? "opacity-100 flex" : "opacity-0 hidden"
          }`}
          style={{ transition: "transwform 0.3s ease, opacity 0.3s ease" }}
          
        >
          <li
            className="p-4 hover:bg-sky-400
             hover:text-white transition-all cursor-pointer list-none w-full text-center "
          >
            <Link to="/" className="z-10">
              Home
            </Link>
          </li>
          <li
            className="p-4 hover:bg-sky-400
             hover:text-white transition-all cursor-pointer list-none w-full text-center "
          >
            <Link to="/about">Who we are</Link>
          </li>
          <li
            className="p-4 hover:bg-sky-400
             hover:text-white transition-all cursor-pointer list-none w-full text-center "
          >
            {" "}
            <Link to="/contact">Media</Link>
          </li>
          <li
            className="p-4 hover:bg-sky-400
             hover:text-white transition-all cursor-pointer list-none w-full text-center "
          >
            <Link to="/prayer" className="z-50">
              Prayer for salvation
            </Link>
          </li>
          <li
            className="p-4 hover:bg-sky-400
             hover:text-white transition-all cursor-pointer list-none w-full text-center ">
            {" "}
            <Link to="/give">GIVE</Link>
          </li>
        </div>
      </div>
    </>
  );
};

export default Navbar;
