import React from "react";

const SignIn = () => {
  const abc = " ";

  return (
    <div className="bg-white place-self-center w-3/12 p-7 min-h-[400px] rounded-xl">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Sign In
      </h2>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-b-2 outline-none hover:border-blue-600 duration-300"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            name="passwd"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-b-2 outline-none hover:border-blue-600 duration-300"
          />
        </div>
        <div>
          <button
            type="button"
            className="w-full border border-b-2 p-2 mt-8 hover:bg-blue-600 hover:text-white duration-300"
          >
            Sign In
          </button>
        </div>
        <div>
          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{abc}
            <a
              href="#"
              className="hover:underline hover:text-blue-600 font-medium"
            >
              Sign Up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
