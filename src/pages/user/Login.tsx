/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { verifyToken } from "@/utils/veryfyToken";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [eye, setEye] = useState(false);
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const toastId = toast.loading("Logging in");

    const email = event.target.email.value;
    const password = event.target.password.value;
    event.target.reset();
    try {
      const userInfo = {
        email,
        password,
      };

      const res = await login(userInfo).unwrap();
      const user = verifyToken(res?.token);
      dispatch(setUser({ user: user, token: res?.token }));
      navigate("/");
    } catch (err) {
      // @ts-expect-error: Unreachable code error
      toast.error(err?.data?.message, { id: toastId, duration: 2000 });
    }
  };

  return (
    <div className="md:flex items-center justify-center h-full md:p-16">
      <div className="md:flex mb-20 mt-36 gap-10 items-center justify-center md:mt-7">
        <div className=" ">
          <img
            src="https://i.ibb.co/yfwfG4n/login.png"
            className="w-[500px]"
            alt=""
          />
        </div>

        <div className="w-96 p-6 shadow-md bg-white rounded">
          <div className="text-center mb-3 font-bold text-3xl justify-center gap-3 flex items-center">
            <FaUser className="text-cyan-500" />
            <h1 className="animate-text text-rose-500 text-xl font-semibold">
              Sign in
            </h1>
          </div>

          <hr className="mt-3" />
          <form onSubmit={handleSubmit}>
            <div className="mt-3">
              <label htmlFor="email" className="block text-base mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Email"
                className="border w-full px-2 focus:outline-none text-base py-1 focus:ring-0 focus:border-gray-600 rounded"
              />
            </div>
            <div className="mt-3">
              <label htmlFor="password" className="block text-base mb-2">
                Password
              </label>
              <div className="flex items-center">
                <input
                  type={eye ? "text" : "password"}
                  name="password"
                  id="password"
                  required
                  placeholder="Enter Password"
                  className="border w-full px-2 focus:outline-none text-base py-1 focus:ring-0 focus:border-gray-600 rounded"
                />
                <span onClick={() => setEye(!eye)}>
                  {eye ? (
                    <AiFillEye className="text-4xl border focus:outline-none focus:ring-0 focus:border-gray-600 rounded" />
                  ) : (
                    <AiFillEyeInvisible className="text-4xl border focus:outline-none focus:ring-0 focus:border-gray-600 rounded" />
                  )}
                </span>
              </div>
            </div>
            <div className="mt-3 ">
              <label className="label gap-2 flex items-center cursor-pointer">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Remember Me</span>
              </label>
            </div>
            <button
              type="submit"
              className="mt-5 font-semibold text-xl border-2 w-full px-3 py-2 rounded-lg border-cyan-500 bg-rose-500 hover:bg-transparent text-white hover:bg-pink-500 hover:text-white"
            >
              Sign in
            </button>
          </form>

          <button className="mt-3">
            <small>
              Don’t have an account yet?{" "}
              <span className="text-rose-500 font-semibold underline">
                <Link to="/register">Sign up</Link>
              </span>
            </small>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
