import React from "react";
import { Link } from "react-router-dom";
import TextType from "./TextType";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-amber-100 from-slate-800 to-slate-900 text-white p-4">
      <div className="max-w-4xl w-full text-center space-y-8">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/signin"
            className="px-8 py-3 bg-blue-600 hover:bg-white hover:text-gray-950 rounded-md font-medium transition duration-300"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="px-8 py-3 bg-blue-600 hover:bg-white hover:text-gray-950 rounded-md font-medium transition duration-300"
          >
            Sign Up
          </Link>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <TextType
            text={["Exam Management", "Secure Assessment", "Result Analysis"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            textColors={["#000000", "#60a5fa", "#34d399"]}
          />
        </h1>

        <p className="text-xl text-gray-800 mb-8">
          A comprehensive solution for managing exams, assessments, and results
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl text-gray-900 font-semibold mb-3">Exam Management</h3>
            <p className="text-gray-500">
              Create, schedule, and manage exams with ease
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl text-gray-900 font-semibold mb-3">Secure Assessment</h3>
            <p className="text-gray-500">
              Ensure integrity with our secure assessment tools
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl text-gray-900 font-semibold mb-3">Result Analysis</h3>
            <p className="text-gray-500">
              Comprehensive analytics and reporting features
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
