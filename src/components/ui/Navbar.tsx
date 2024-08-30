import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Logout } from "@/redux/features/auth/authSlice";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  function handleLogOut() {
    dispatch(Logout());
  }

  return (
    <div className="bg-cyan-300 top-0 z-20 flex items-center justify-between font-medium h-[70px] p-4 md:px-12 text-black">
      <Link to="/" className="flex gap-2 items-center">
        <img
          src="https://i.ibb.co/4f0CS40/room-used-official-event-4.jpg"
          className="md:w-12 md:h-10 w-6 h-6 rounded"
        />
        <h2 className="text-base md:text-2xl">MRB Systems</h2>
      </Link>
      <div>
        <ul
          className={`md:flex gap-8 z-10 md:bg-transparent text-white  font-medium md:static absolute text-xl items-center ${
            open
              ? "top-20 right-7 p-3 bg-cyan-300 text-black"
              : "-top-48 right-0"
          } `}
        >
          <li className="text-xl">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? " text-black" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="text-xl">
            <NavLink
              to="/rooms"
              className={({ isActive }) => (isActive ? " text-black" : "")}
            >
              Meeting Rooms
            </NavLink>
          </li>
          <li className="text-xl">
            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? " text-black" : "")}
            >
              About Us
            </NavLink>
          </li>
          <li className="text-xl">
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? " text-black" : "")}
            >
              Contact Us
            </NavLink>
          </li>
          {user?.role === "admin" && (
            <li className="text-xl">
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? " text-black" : "")}
              >
                Dashboard
              </NavLink>
            </li>
          )}
          {user?.role === "user" && (
            <li className="text-xl">
              <NavLink
                to="/my-booking"
                className={({ isActive }) => (isActive ? " text-black" : "")}
              >
                My Bookings
              </NavLink>
            </li>
          )}
        </ul>
      </div>
      {/* login or logout */}
      <div>
        {user?.email ? (
          <button
            onClick={handleLogOut}
            className="text-base p-2 bg-pink-400 rounded text-white"
          >
            Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? " text-black"
                : "text-base p-2 bg-pink-400 rounded text-white"
            }
          >
            Login
          </NavLink>
        )}
      </div>
      <div className="md:hidden text-xl" onClick={() => setOpen(!open)}>
        {open ? <ImCross /> : <TiThMenu />}
      </div>
    </div>
  );
};

export default Navbar;
