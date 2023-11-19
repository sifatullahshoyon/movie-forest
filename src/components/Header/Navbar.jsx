import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="static top-0">
      <div className="bg-gray-700 text-white">
      <div className="navbar container mx-auto py-6">
        <div className="navbar-start">
          <div className="dropdown absolute">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-700 rounded-box w-52 font-medium text-lg"
            >
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/'>Movie</Link>
              </li>
              {/* <li>
                <a>Movie</a>
                <ul className="p-2">
                  <li>
                    <a>Popular Movie</a>
                  </li>
                  <li>
                    <a>Top Movie</a>
                  </li>
                </ul>
              </li> */}
              {/* <li>
                <a>Tv Series</a>
              </li> */}
              <li>
                <Link to='about'>About Us</Link>
              </li>
            </ul>
          </div>
          <h1 className="text-xl md:text-2xl font-bold">Movie<span className="text-indigo-600">Forest</span></h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium text-lg">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/movie'>Movie</Link>
            </li>
            {/* <li tabIndex={0}>
              <details>
                <Link><summary>Movie</summary></Link>
                <ul className="p-2">
                  <li>
                    <a>Popular Movie</a>
                  </li>
                  <li>
                    <a>Top Movie</a>
                  </li>
                </ul>
              </details>
            </li> */}
            <li>
              <Link to='about'>About Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div >
            <input
              type="text"
              placeholder="Search Your Movie"
              className="input input-bordered w-24 md:w-auto mr-2 mb-3 md:mb-0 text-gray-800"
            />
          <a className="btn-primary">Login</a>
          </div>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
