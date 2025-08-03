import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(
        `http://localhost:3000/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccess("Registration successful! Redirecting to sign in...");
        // Redirect to sign in page after 2 seconds
        setTimeout(() => {
          navigate("/signin");
        }, 2000);
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white w-full max-w-md p-7 min-h-[400px] rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center text-[#16191f] mb-6">
        Sign Up
      </h2>
      {error && (
        <div className="p-3 mb-4 rounded-md bg-red-100 text-red-700">
          {error}
        </div>
      )}
      {success && (
        <div className="p-3 mb-4 rounded-md bg-green-100 text-green-700">
          {success}
        </div>
      )}
      <form className="space-y-4" onSubmit={handleSignUp}>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[#16191f]"
          >
            Full Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border rounded-md outline-none hover:border-blue-600 duration-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#16191f]"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md outline-none hover:border-blue-600 duration-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-[#16191f]"
          >
            Password
          </label>
          <input
            type="password"
            name="passwd"
            id="password"
            placeholder="Create a password"
            className="w-full px-4 py-2 border rounded-md outline-none duration-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full rounded-md p-2 mt-8 bg-[#ff9900] hover:bg-[#eb5e07] hover:text-white duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>
        </div>
        <div>
          <p className="mt-4 text-center text-sm text-[#16191f]/70">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="hover:underline hover:text-blue-600 font-medium"
            >
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
