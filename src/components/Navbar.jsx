import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
const Navbar = () => {

  

  return (
    <>
      <div className={`flex items-center justify-between h-[70px] w-full gap-10 px-4 fixed text-yellow-600 z-40 backdrop-blur-lg top-0 font-extrabold`}>
        <h1 className="lg:text-[2rem] md:text-2xl font-extrabold ">
          Word Herald Assembly
        </h1>
        <ol className="flex w-[40%] justify-between items-center h-full lg:text-[18px] text-yellow-600 sm:text-sm md:text-base">
          <li className="hover:underline">
            <Link to="/" className="z-10">Home</Link>
          </li>
          <li className="hover:underline">
            <Link to="/about" >Who we are</Link>
          </li>
          <li className="hover:underline">
            <Link to="/contact">Media</Link>
          </li>
          <li className="hover:underline">
            <Link to="/prayer" className="z-50">Prayer for salvation</Link>
          </li>
        </ol>
        <div className=" font-semibold hover:bg-yellow-700 bg-yellow-600 rounded-md text-white p-2">
        <Link to="/give">DONATE</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
