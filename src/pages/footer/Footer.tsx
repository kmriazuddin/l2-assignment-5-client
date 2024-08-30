import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillPhone, AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { CiLocationArrow1 } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-500 text-white z-50 md:px-12 w-full mt-20 p-4 md:mt-30 rounded-md">
      <footer className="footer flex flex-col md:flex-row justify-between items-start">
        <div className="flex flex-col mx-4 md:mx-0 items-start">
          <div className="flex items-center gap-3">
            <img
              src="https://i.ibb.co/4f0CS40/room-used-official-event-4.jpg"
              alt="Instrument Academy"
              className="w-14 h-14 rounded-full"
            />
            <span className="footer-title text-2xl md:text-3xl font-bold">
              MRB Systems
            </span>
          </div>
          <p className="mt-2 text-lg">
            For Meeting Room Subscription you can trust on Alpha Net.
          </p>
          <div className="flex text-3xl items-center gap-4 my-5">
            <NavLink to="https://www.google.com/">
              <BsFacebook className="text-blue-500" />
            </NavLink>
            <NavLink to="https://www.google.com/">
              <BsInstagram className="text-orange-600" />
            </NavLink>
            <NavLink to="https://www.google.com/">
              <AiFillGithub className="text-blue-500 text-4xl" />
            </NavLink>
          </div>
        </div>

        <div className="flex mx-4 md:mx-0 flex-col md:flex-row md:gap-20 w-full md:w-auto">
          <div className="mt-4 md:mt-0">
            <span className="footer-title text-xl">Others Service</span>
            <ul className="mt-2">
              <li>
                <a className="link link-hover hover:text-pink-500" href="#">
                  Web Design
                </a>
              </li>
              <li>
                <a className="link link-hover hover:text-pink-500" href="#">
                  Domain Registration
                </a>
              </li>
              <li>
                <a className="link link-hover hover:text-pink-500" href="#">
                  Virtual Server
                </a>
              </li>
              <li>
                <a className="link link-hover hover:text-pink-500" href="#">
                  Dedicated Server
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="footer-title text-xl">About Us</span>
            <ul className="mt-2">
              <li>
                <NavLink
                  className="link link-hover hover:text-pink-500"
                  to="/about"
                >
                  Join Our Team
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="link link-hover hover:text-pink-500"
                  to="/terms-of-service"
                >
                  Terms of Service
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="link link-hover hover:text-pink-500"
                  to="/privacy-policy"
                >
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="link link-hover hover:text-pink-500"
                  to="/privacy-policy"
                >
                  Our Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 mx-4 md:mx-0 md:mt-0">
          <span className="footer-title text-xl">Contact Us</span>
          <div className="mt-2">
            <div className="flex items-center gap-2">
              <AiFillPhone className="text-green-500 text-2xl" />
              <p>+0123456789</p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <AiOutlineMail className="text-rose-500 text-2xl" />
              <p>support@mrbinfo.com</p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <CiLocationArrow1 className="text-black text-2xl" />
              <p>Pallabi Mirpur-2, Dhaka.</p>
            </div>
          </div>
        </div>
      </footer>
      <hr className="mt-8" />
      <div className="py-5 text-center">
        <p>&copy;2024 MRB. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
