import type React from "react";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import finavenue from "../assets/finavenue.png";
import logo from "../assets/finavenue-logo.png";

interface LoginPageProps {
  onLogin: () => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && password) {
      onLogin();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#0F1638] to-[#2B3E9E] p-4 sm:p-6 lg:p-10">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-5xl">
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-10">
          <div className="w-10 h-10 sm:w-[60px] sm:h-[60px] bg-white rounded-full flex items-center justify-center shadow">
            <img
              src={logo}
              alt="Finavenue Logo"
              className="h-7 w-auto sm:h-12 object-contain"
            />
          </div>

          <h1 className="text-white text-2xl sm:text-[34px] font-semibold tracking-wide">
            Finavenue
          </h1>
        </div>

        <div className="shadow-2xl rounded-[10px] overflow-hidden bg-white max-w-full mx-auto lg:h-[600px]">
          <div className="flex flex-col lg:flex-row items-stretch">
            <div
              className="hidden lg:flex w-[350px] h-[600px] bg-linear-to-t from-[#0F1638] to-[#2B3E9E] 
             text-white p-8 relative overflow-hidden rounded-[10px] flex-col justify-between"
            >
              <div>
                <h2 className="text-[24px] font-semibold leading-tight max-w-auto">
                  Unlocking value through strategic investments in India's most
                  promising companies
                </h2>
              </div>

              <div className="mt-6 relative h-[250px] w-full flex items-center justify-center">
                <img
                  src={finavenue}
                  alt="finavenue"
                  className="w-[289px] h-[215px]"
                />
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-6 flex gap-1">
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
                <div className="w-1.5 h-1.5 bg-white/50 rounded-full" />
                <div className="w-1.5 h-1.5 bg-white/50 rounded-full" />
                <div className="w-1.5 h-1.5 bg-white/50 rounded-full" />
              </div>
            </div>

            <div className="w-full lg:w-2/3 p-8 sm:p-12 lg:p-[100px] flex flex-col justify-center">
              <h1 className="text-2xl font-bold text-[#2B3E9E] mb-2">
                Welcome Back
              </h1>
              <p className=" text-gray-600 font-[400px] text-[18px] mb-6 sm:mb-8">
                Sign in to access your admin dashboard.
              </p>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-[15px]font-[400px] text-gray-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address"
                    className="w-full px-4 py-3 border border-[#BCC1D2] rounded-2xl 
                              focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#BCC1D2]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[15px] font-[400px] text-gray-900 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password"
                      className="w-full px-4 py-3 border border-[#BCC1D2] rounded-2xl 
                              focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#BCC1D2]"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-5 h-5 sm:w-7 sm:h-7 border-[#BCC1D2] focus:accent-blue-600"
                    />
                    <span className="text-sm sm:text-[15px] font-normal text-[#0E0E0E]">
                      Remember me.
                    </span>
                  </label>

                  <button
                    type="button"
                    className="text-sm sm:text-[15px] font-bold text-[#2B3E9E] hover:underline"
                  >
                    Reset Your Password?
                  </button>
                </div>

                <button
                  type="submit"
                  className="h-12 w-[300px] mx-auto mt-8 bg-[#BCC1D2] text-white font-semibold rounded-2xl hover:scale-105 active:scale-95 transition-all block"
                >
                  Login →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
