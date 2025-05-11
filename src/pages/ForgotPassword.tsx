
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Tautan reset kata sandi telah dikirim ke email Anda.");
      // In a real app, this would send a password reset link to the email
      // For this demo, we'll just navigate back to sign in after a delay
      setTimeout(() => {
        navigate("/sign-in");
      }, 2000);
    } else {
      toast.error("Silakan masukkan email Anda.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardContent className="p-8">
          <div className="mb-2 flex justify-center">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 rounded-lg p-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5 7.5C15.5 9.433 13.933 11 12 11C10.067 11 8.5 9.433 8.5 7.5C8.5 5.567 10.067 4 12 4C13.933 4 15.5 5.567 15.5 7.5Z" fill="white"/>
                  <path d="M18 16.5C18 18.433 15.314 20 12 20C8.686 20 6 18.433 6 16.5C6 14.567 8.686 13 12 13C15.314 13 18 14.567 18 16.5Z" fill="white"/>
                </svg>
              </div>
              <span className="text-xl font-bold">Comfinotes</span>
            </div>
          </div>
          
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Atur ulang kata sandi Anda</h1>
            <p className="text-gray-600 text-sm max-w-[350px] mx-auto">
              Masukkan alamat email yang terkait dengan akun Anda dan kami akan mengirimkan tautan untuk mengatur ulang kata sandi Anda
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <Input
                type="email"
                placeholder="Email"
                className="pl-12 py-6 bg-white border border-gray-300 rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
            </div>
            
            <Button 
              type="submit"
              className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg"
            >
              Lanjutkan
            </Button>
            
            <div className="text-center">
              <button
                type="button"
                onClick={() => navigate('/sign-in')}
                className="text-blue-600 hover:text-blue-500 text-sm font-medium"
              >
                Kembali ke Masuk
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPassword;
