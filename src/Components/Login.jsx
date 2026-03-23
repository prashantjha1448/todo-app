import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate()

  // ✅ Agar token already hai toh seedha /home bhej do
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      navigate('/home')
    }
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:8000/api/login", form)
      const token = res.data.token
      localStorage.setItem("token", token)
      navigate('/home')
    } catch (error) {
      setError("Server Error")
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0f0f] via-[#1a1a2e] to-[#000]">
      <div className="relative w-[380px] p-[2px] rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500">
        <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-8 tracking-wide">
            Welcome Back 👋
          </h2>
          <div className="relative mb-6">
            <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full bg-transparent border-b border-gray-500 focus:border-blue-400 outline-none py-2 peer"/>
            <label className="absolute left-0 top-2 text-gray-400 text-sm transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-400 peer-valid:-top-3 peer-valid:text-xs">Email</label>
          </div>
          <div className="relative mb-6">
            <input type={show ? "text" : "password"} name="password" value={form.password} onChange={handleChange} required className="w-full bg-transparent border-b border-gray-500 focus:border-blue-400 outline-none py-2 peer"/>
            <label className="absolute left-0 top-2 text-gray-400 text-sm transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-400 peer-valid:-top-3 peer-valid:text-xs">Password</label>
            <span onClick={() => setShow(!show)} className="absolute right-0 top-2 cursor-pointer text-gray-400 hover:text-white">
              {show ? "🙈" : "👁️"}
            </span>
          </div>
          {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
          <button onClick={handleSubmit} className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 font-semibold hover:scale-105 transition duration-300 shadow-lg">
            Login
          </button>
          <p className="text-center text-sm mt-6 text-gray-400">
            Don't have an account?
            <span className="text-blue-400 ml-1 cursor-pointer hover:underline" onClick={() => navigate('/register')}>
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;