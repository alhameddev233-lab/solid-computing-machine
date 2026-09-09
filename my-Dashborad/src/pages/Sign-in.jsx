import React from "react";
import { FcGoogle } from "react-icons/fc";
import { img } from "../assets/image";

const Login = () => {
  return (
    <div className="min-h-screen w-full p-4">
      <section className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-6xl items-center justify-center overflow-hidden rounded-2xl bg-gray-50 p-4">
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex w-full flex-col justify-center px-2 py-6 sm:px-6 md:px-10">
            <h1 className="text-center text-3xl font-bold text-[#263238] sm:text-4xl">
              Sign In
            </h1>

            <p className="mt-3 text-center text-sm font-medium text-gray-600 sm:text-base">
              Enter your email and password to sign in.
            </p>

            <form className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#263238]"
                >
                  Your email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="name@mail.com"
                  className="w-full rounded-lg border border-gray-300 bg-white p-3 text-sm outline-none transition focus:border-[#263832] focus:ring-1 focus:ring-[#263832]"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-[#263238]"
                >
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  placeholder="********"
                  className="w-full rounded-lg border border-gray-300 bg-white p-3 text-sm outline-none transition focus:border-[#263832] focus:ring-1 focus:ring-[#263832]"
                />
              </div>

              <div className="flex items-center justify-between gap-3 text-xs">
                <label className="flex items-center gap-2 text-gray-600">
                  <input type="checkbox" className="h-4 w-4" />
                  <span>Remember me</span>
                </label>

                <a href="#" className="font-semibold text-[#263832]">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#263832] py-3 font-semibold uppercase text-white transition hover:shadow-lg"
              >
                Sign In
              </button>

              <label className="flex items-center gap-2 text-xs text-gray-600">
                <input type="checkbox" className="h-4 w-4" />
                <span>Subscribe me to newsletter</span>
              </label>
            </form>

            <button
              type="button"
              className="mt-5 flex w-full items-center justify-center gap-3 rounded-xl bg-white p-4 text-[#263238] shadow-sm transition hover:shadow-md"
            >
              <FcGoogle className="text-xl" />
              <span className="text-sm font-semibold">Sign in with Google</span>
            </button>

            <button
              type="button"
              className="mt-4 flex w-full items-center justify-center gap-3 rounded-xl bg-white p-4 text-[#263238] shadow-sm transition hover:shadow-md"
            >
              <img
                src={img.twitter}
                alt="Twitter"
                className="h-5 w-5 object-contain"
              />
              <span className="text-sm font-semibold">
                Sign in with Twitter
              </span>
            </button>

            <p className="mt-6 text-center text-sm font-medium text-[#546e74]">
              Not registered?{" "}
              <a href="#" className="font-semibold text-[#263832]">
                Create account
              </a>
            </p>
          </div>

          <div className="flex w-full items-center justify-center">
            <img
              src={img.back}
              alt="Sign in"
              className="h-[300px] w-full rounded-xl object-cover sm:h-[400px] md:h-[650px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
