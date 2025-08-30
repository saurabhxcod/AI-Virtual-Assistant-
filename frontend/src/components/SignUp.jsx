import React, { useState } from "react";
import authBg from "../assets/authBg.png";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("User Data:", { name, email, password });

    navigate("/dashboard");
  };

  return (
    <div
      className="w-full h-screen bg-cover flex justify-center items-center"
      style={{ backgroundImage: `url(${authBg})` }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-[95%] max-w-[500px] bg-black/40 backdrop-blur-xl rounded-3xl shadow-2xl p-12 text-white text-center"
      >
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-10">
          Register to <span className="text-blue-400">Virtual Assistant</span>
        </h2>

        {/* Name */}
        <div className="mb-6 relative">
          <input
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-6 py-4 rounded-full bg-transparent border border-gray-400 
                       focus:outline-none focus:ring-2 focus:ring-blue-400 
                       placeholder-gray-300 text-lg"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-6 relative">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-6 py-4 rounded-full bg-transparent border border-gray-400 
                       focus:outline-none focus:ring-2 focus:ring-blue-400 
                       placeholder-gray-300 text-lg"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-8 relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-6 py-4 rounded-full bg-transparent border border-gray-400 
                       focus:outline-none focus:ring-2 focus:ring-blue-400 
                       placeholder-gray-300 text-lg"
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 
                       cursor-pointer text-gray-300 hover:text-white"
          >
            {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
          </span>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-white text-black font-semibold py-4 
                     rounded-full text-lg hover:bg-gray-200 transition-all duration-200"
        >
          Sign Up
        </button>

        {/* Already have an account */}
        <p className="mt-8 text-base text-gray-300">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/signin")}
            className="text-blue-400 hover:underline cursor-pointer"
          >
            Sign In
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUP;
