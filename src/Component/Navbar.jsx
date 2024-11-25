import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Image1 from "/assets/Lingo Bingo.png";


const Navbar = () => {
  const links = (
    <>
      <li className="hover:bg-sky-400 hover:text-white hover:rounded-2xl">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-sky-500 text-white rounded-2xl px-3 py-2" : "px-3 py-2"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="hover:bg-sky-400 hover:text-white hover:rounded-2xl">
        <NavLink
          to="startLearning"
          className={({ isActive }) =>
            isActive ? "bg-sky-500 text-white rounded-2xl px-3 py-2" : "px-3 py-2"
          }
        >
          Start Learning
        </NavLink>
      </li>
      <li className="hover:bg-sky-400 hover:text-white hover:rounded-2xl">
        <NavLink
          to="tutorials"
          className={({ isActive }) =>
            isActive ? "bg-sky-500 text-white rounded-2xl px-3 py-2" : "px-3 py-2"
          }
        >
          Tutorials
        </NavLink>
      </li>
      <li className="hover:bg-sky-400 hover:text-white hover:rounded-2xl">
        <NavLink
          to="aboutus"
          className={({ isActive }) =>
            isActive ? "bg-sky-500 text-white rounded-2xl px-3 py-2" : "px-3 py-2"
          }
        >
          About Us
        </NavLink>
      </li>
    </>
  );

  const {user}= useContext(AuthContext);

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </div>
          </div>
          <div className="flex items-center justify-start">
            
            <NavLink to="/" className=" flex items-center justify-start  cursor-pointer">
            <img className="w-20" src={Image1} alt="" />
            <div className="font-semibold md:text-3xl text-lg">
            Lingo Bingo
            </div>
            
            
            </NavLink>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal gap-2 px-1 text-xl">{links}</div>
        </div>
        <div className="navbar-end">
        <div className="text-3xl pr-10">{user && user.name}</div>
          <NavLink
            to="login"
            className="px-5 py-2 rounded-3xl md:text-xl text-sl font-semibold border-sky-500 hover:bg-sky-400 hover:text-white border"
          >
            Log in
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
