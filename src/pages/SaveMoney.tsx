
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { useNavigate } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export default function SaveMoney() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [amount, setAmount] = useState("");
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const navigate = useNavigate();
  
  // Check if user is logged in
  useEffect(() => {
    // In a real app, this would check a token or session
    // For this demo, we're just checking if they've bypassed the login
    const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/sign-in");
    }
  }, [navigate]);
  
  // Sample transaction history data
  const transactions = [
    { id: 1, amount: "IDR280.000", date: "27, Jan 2025" },
    { id: 2, amount: "IDR280.000", date: "27, Jan 2025" },
    { id: 3, amount: "IDR280.000", date: "27, Jan 2025" },
    { id: 4, amount: "IDR750.000", date: "27, Jan 2025" },
    { id: 5, amount: "IDR750.000", date: "27, Jan 2025" },
  ];

  const handleAddMoney = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log("Adding money:", { amount, date });
  };

  return (
    <>
      <DashboardLayout />
      <main className="p-8 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left panel - Total balance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 w-full md:w-1/3"
          >
            <h2 className="text-slate-500 text-sm font-medium mb-1">Total Pendapatan</h2>
            <div className="text-[#272742] text-3xl font-semibold mb-1">IDR25.500.000</div>
            <p className="text-slate-500 text-sm mb-6">Saldo Dompet</p>
            
            <h3 className="text-[#272742] text-lg font-medium mb-3">Riwayat</h3>
            <p className="text-slate-500 text-xs mb-4">Lihat semua riwayat keuangan secara terstruktur.</p>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-xs font-medium">No</TableHead>
                    <TableHead className="text-xs font-medium">Jumlah</TableHead>
                    <TableHead className="text-xs font-medium">Tanggal</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="text-xs py-2">{transaction.id}.</TableCell>
                      <TableCell className="text-xs py-2 text-blue-500">{transaction.amount}</TableCell>
                      <TableCell className="text-xs py-2">{transaction.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="flex justify-center mt-6 gap-2">
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-blue-600 text-white">
                1
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                2
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                3
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                ...
              </Button>
            </div>
          </motion.div>
          
          {/* Right panel - Add money form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 w-full md:w-2/3"
          >
            <h2 className="text-[#272742] text-2xl font-medium mb-6">Simpan Uang</h2>
            
            <form onSubmit={handleAddMoney} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Jumlah<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-4 flex items-center text-slate-500">
                    IDR
                  </span>
                  <Input 
                    type="text" 
                    className="pl-12 py-6 rounded-lg" 
                    placeholder="1.234.567"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Tanggal<span className="text-red-500">*</span>
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal py-6 rounded-lg"
                    >
                      {date ? (
                        format(date, "dd/MM/yyyy")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      month={currentMonth}
                      onMonthChange={setCurrentMonth}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="pt-4"
              >
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-lg font-medium text-base"
                >
                  Tambahkan Uang
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </main>
    </>
  );
}
