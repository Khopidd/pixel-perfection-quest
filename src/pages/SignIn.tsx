
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check credentials against our hardcoded account
    if (username === "khopidd" && password === "khopidd") {
      // Set login state in sessionStorage
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("username", username);
      
      toast.success("Login successful!");
      navigate("/save-money");
    } else {
      toast.error("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="container flex">
        {/* Left section - Logo and stats */}
        <div className="hidden lg:flex flex-col w-1/2 text-white p-12 relative overflow-hidden">
          <div className="z-10">
            <div className="flex items-center gap-2 mb-20">
              <div className="bg-white rounded-lg p-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5 7.5C15.5 9.433 13.933 11 12 11C10.067 11 8.5 9.433 8.5 7.5C8.5 5.567 10.067 4 12 4C13.933 4 15.5 5.567 15.5 7.5Z" fill="#1a56db"/>
                  <path d="M18 16.5C18 18.433 15.314 20 12 20C8.686 20 6 18.433 6 16.5C6 14.567 8.686 13 12 13C15.314 13 18 14.567 18 16.5Z" fill="#1a56db"/>
                </svg>
              </div>
              <span className="text-xl font-bold">Comfinotes</span>
            </div>
            
            <div className="grid grid-cols-1 gap-8">
              {/* Total Submissions */}
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 w-64">
                <div className="mb-1">
                  <span className="inline-block bg-blue-400 bg-opacity-20 p-2 rounded-md">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </span>
                </div>
                <div className="text-sm text-gray-200">Total Submissions</div>
                <div className="text-2xl font-bold">250</div>
              </div>
              
              {/* Total Revenue */}
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 w-64 ml-16">
                <div className="mb-1">
                  <span className="inline-block bg-blue-400 bg-opacity-20 p-2 rounded-md">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </span>
                </div>
                <div className="text-sm text-gray-200">Total Revenue</div>
                <div className="text-2xl font-bold">IDR25.500.000</div>
              </div>
              
              {/* Expenses */}
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 w-64 -mt-4">
                <div className="mb-1">
                  <span className="inline-block bg-red-400 bg-opacity-20 p-2 rounded-md">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </span>
                </div>
                <div className="text-sm text-gray-200">Expenses</div>
                <div className="text-2xl font-bold">IDR8.650.000</div>
              </div>
              
              {/* Incomes */}
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 w-64 ml-24 -mt-4">
                <div className="mb-1">
                  <span className="inline-block bg-blue-400 bg-opacity-20 p-2 rounded-md">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </span>
                </div>
                <div className="text-sm text-gray-200">Incomes</div>
                <div className="text-2xl font-bold">IDR34.150.000</div>
              </div>
            </div>
          </div>
          
          {/* Circular gradient background */}
          <div className="absolute w-[800px] h-[800px] bg-blue-500 opacity-30 rounded-full -top-[400px] -left-[300px]"></div>
        </div>
        
        {/* Right section - Login form */}
        <div className="w-full lg:w-1/2 bg-white flex items-center justify-center px-8 py-12">
          <Card className="w-full max-w-md border-none shadow-none">
            <CardContent className="px-6">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Masuk ke Akun Anda</h1>
                <p className="text-gray-600">Selamat datang kembali! silakan masukkan detail Anda</p>
              </div>
              
              <form onSubmit={handleSignIn} className="space-y-5">
                <div className="space-y-1">
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Username"
                      className="pl-12 py-6 bg-white border border-gray-300 rounded-lg"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                        <circle cx="12" cy="8" r="5"></circle>
                        <path d="M20 21a8 8 0 0 0-16 0"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="pl-12 py-6 bg-white border border-gray-300 rounded-lg"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                    </div>
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-3 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Tetap masuk
                    </label>
                  </div>
                  <button
                    type="button"
                    onClick={() => navigate('/forgot-password')}
                    className="text-sm font-medium text-blue-600 hover:text-blue-500"
                  >
                    Lupa kata sandi?
                  </button>
                </div>
                
                <Button
                  type="submit"
                  className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg"
                >
                  Masuk
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
