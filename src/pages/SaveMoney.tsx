
import React, { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SaveMoney() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [amount, setAmount] = useState("");
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);

  const handleAddMoney = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount.trim() && date) {
      setIsConfirmDialogOpen(true);
    }
  };

  return (
    <>
      {/* Use standard style tag for global styles */}
      <style type="text/css">
        {`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
          body {
            font-family: 'Outfit', sans-serif;
          }
        `}
      </style>
      
      <DashboardLayout>
        <main className="p-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8"
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
        </main>
      </DashboardLayout>

      {/* Confirmation Dialog */}
      <Dialog open={isConfirmDialogOpen} onOpenChange={setIsConfirmDialogOpen}>
        <DialogContent className="sm:max-w-[425px] rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-center text-lg font-medium">Simpan Uang Berhasil</DialogTitle>
          </DialogHeader>
          <div className="py-4 text-center">
            <p className="text-slate-500 mb-4">Dana telah berhasil ditambahkan</p>
            <p className="text-2xl font-semibold text-blue-600 mb-6">IDR {amount}</p>
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700"
              onClick={() => setIsConfirmDialogOpen(false)}
            >
              Kembali
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
