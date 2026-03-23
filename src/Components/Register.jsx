import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const getStrength = () => {
    let strength = 0;
    if (form.password.length >= 6) strength++;
    if (/[A-Z]/.test(form.password)) strength++;
    if (/\d/.test(form.password)) strength++;
    return strength;
  };

  const strength = getStrength();

  const handleSubmit = async () => {
    if (form.userName.length < 3)
      return setError("Username must be at least 3 characters");
    if (!emailRegex.test(form.email))
      return setError("Invalid email");
    if (!passwordRegex.test(form.password))
      return setError("Weak password (min 6 chars, 1 uppercase, 1 number)");
    if (form.password !== form.confirmPassword)
      return setError("Passwords do not match");

    try {
      await axios.post("http://localhost:8000/api/register", {
        userName: form.userName,
        email: form.email,
        password: form.password,
      })
      alert("Registered Successfully 🚀");
      navigate('/')  // ✅ Fixed: navigate to login instead of setIsLogin(true)
    } catch (error) {
      setError(error.response?.data?.message || "Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#111827] to-black">
      <div className="relative w-[400px] p-[2px] rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
        <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-8 text-white shadow-xl">
          <h2 className="text-3xl font-bold text-center mb-8">
            Create Account 🚀
          </h2>
          <div className="relative mb-5">
            <input
              type="text"
              name="userName"
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-gray-500 focus:border-pink-400 outline-none py-2 peer"
            />
            <label className="absolute left-0 top-2 text-gray-400 text-sm transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-pink-400 peer-valid:-top-3 peer-valid:text-xs">
              Username
            </label>
          </div>
          <div className="relative mb-5">
            <input
              type="email"
              name="email"
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-gray-500 focus:border-blue-400 outline-none py-2 peer"
            />
            <label className="absolute left-0 top-2 text-gray-400 text-sm transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-400 peer-valid:-top-3 peer-valid:text-xs">
              Email
            </label>
          </div>
          <div className="relative mb-3">
            <input
              type={show ? "text" : "password"}
              name="password"
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-gray-500 focus:border-purple-400 outline-none py-2 peer"
            />
            <label className="absolute left-0 top-2 text-gray-400 text-sm transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-purple-400 peer-valid:-top-3 peer-valid:text-xs">
              Password
            </label>
            <span
              onClick={() => setShow(!show)}
              className="absolute right-0 top-2 cursor-pointer text-gray-400 hover:text-white"
            >
              {show ? "🙈" : "👁️"}
            </span>
          </div>
          <div className="h-2 w-full bg-gray-700 rounded-full mb-4 overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${
                strength === 1 && "w-1/3 bg-red-500"
              } ${strength === 2 && "w-2/3 bg-yellow-400"} ${
                strength === 3 && "w-full bg-green-500"
              }`}
            ></div>
          </div>
          <div className="relative mb-5">
            <input
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-gray-500 focus:border-green-400 outline-none py-2 peer"
            />
            <label className="absolute left-0 top-2 text-gray-400 text-sm transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-green-400 peer-valid:-top-3 peer-valid:text-xs">
              Confirm Password
            </label>
          </div>
          {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
          <button
            onClick={handleSubmit}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 font-semibold hover:scale-105 transition duration-300 shadow-lg"
          >
            Register
          </button>
          <p className="text-center text-sm mt-6 text-gray-400">
            Already have an account?
            <span
              onClick={() => navigate('/')}  // ✅ Fixed: navigate instead of setIsLogin
              className="text-blue-400 ml-1 cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
