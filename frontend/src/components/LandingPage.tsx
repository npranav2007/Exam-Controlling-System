import React from "react";
import TextType from "./TextType";
import Header from "./Header";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#E5E5E5] text-[#16191f]">
      <Header isAuthenticated={false} />

      {/* Main Content */}
      {/* <section>
      <div className="pt-20 flex flex-col items-center justify-center min-h-screen p-4">
        <div className="max-w-4xl w-full text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#14213D]">
          <TextType
            text={["Exam Management", "Secure Assessment", "Result Analysis"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            textColors={["#14213D", "#FCA311", "#14213D"]}
          />
        </h1>

        <p className="text-xl text-[#16191f] mb-8">
          A comprehensive solution for managing exams, assessments, and results
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-[#14213D] rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl text-[#FCA311] font-semibold mb-3">Exam Management</h3>
            <p className="text-[#FFFFFF]">
              Create, schedule, and manage exams with ease
            </p>
          </div>
          <div className="p-6 bg-[#14213D] rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl text-[#FCA311] font-semibold mb-3">Secure Assessment</h3>
            <p className="text-[#FFFFFF]">
              Ensure integrity with our secure assessment tools
            </p>
          </div>
          <div className="p-6 bg-[#14213D] rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl text-[#FCA311] font-semibold mb-3">Result Analysis</h3>
            <p className="text-[#FFFFFF]">
              Comprehensive analytics and reporting features
            </p>
          </div>
        </div>
        </div>
      </div>
      </section> */}
      <section className="bg-[#FFFFFF] text-[#16191f]">
      <div className="pt-20 flex flex-col items-center justify-center min-h-screen p-4">
        <div className="max-w-4xl w-full text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <TextType
            text={["Exam Management", "Secure Assessment", "Result Analysis"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            textColors={["#14213D", "#FCA311", "#14213D"]}
          />
        </h1>

        <p className="text-xl text-[#16191f] mb-8">
          A comprehensive solution for managing exams, assessments, and results
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl text-[#16191f] font-semibold mb-3">Exam Management</h3>
            <p className="text-[#16191f]/70">
              Create, schedule, and manage exams with ease
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl text-[#16191f] font-semibold mb-3">Secure Assessment</h3>
            <p className="text-[#16191f]/70">
              Ensure integrity with our secure assessment tools
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl text-[#16191f] font-semibold mb-3">Result Analysis</h3>
            <p className="text-[#16191f]/70">
              Comprehensive analytics and reporting features
            </p>
          </div>
        </div>
        </div>
      </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
