
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps } from 'recharts';

const data = [
  { name: 'Jun', revenue: 2000000, expense: 1500000 },
  { name: 'Jul', revenue: 5000000, expense: 2000000 },
  { name: 'Aug', revenue: 1500000, expense: 2200000 },
  { name: 'Sep', revenue: 3000000, expense: 2650000 },
  { name: 'Oct', revenue: 6500000, expense: 2100000 },
  { name: 'Nov', revenue: 2500000, expense: 1800000 },
  { name: 'Dec', revenue: 3000000, expense: 1900000 },
];

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const isExpense = payload[0].dataKey === 'expense';
    
    return (
      <div className="bg-[#3A3F50] p-4 rounded-lg shadow-lg">
        <div className="text-white text-base font-semibold">
          {isExpense ? `- IDR${(payload[0].value as number).toLocaleString()}` : `IDR${(payload[0].value as number).toLocaleString()}`}
        </div>
        <div className="text-slate-300 text-sm">
          {label}, {isExpense ? '04' : '15'}
        </div>
      </div>
    );
  }

  return null;
};

export function AnalyticsChart() {
  const [period, setPeriod] = useState("Hari Ini");
  const [isPeriodOpen, setIsPeriodOpen] = useState(false);

  const periods = ["Hari Ini", "Minggu Ini", "Bulan Ini", "Tahun Ini"];
  
  return (
    <div className="bg-white shadow-[0px_0px_2px_0px_rgba(0,0,0,0.12)] p-6 rounded-2xl">
      <div className="flex justify-between items-center mb-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[#272742] text-lg font-medium"
        >
          Analitik
        </motion.div>
        <div className="flex items-center gap-3.5">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-1.5"
          >
            <div className="w-3.5 h-3.5 bg-blue-600 rounded-full" />
            <div className="text-slate-500 text-xs">Pendapatan</div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-1.5"
          >
            <div className="w-3.5 h-3.5 bg-[#ED4F9D] rounded-full" />
            <div className="text-slate-500 text-xs">Pengeluaran</div>
          </motion.div>
        </div>
        <div className="flex items-center gap-[18px]">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-blue-600 text-white p-3 rounded-xl"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.4678 17.7812V17.7822L6.22461 12.5391L7.28906 11.4746L11.2432 15.4287L11.2598 15.4463V3.00977H12.7393V15.4463L16.7109 11.4746L17.7754 12.5391L12.5332 17.7822L12.5322 17.7812L12 18.291L11.4678 17.7812ZM5.25977 20.9893V19.5098H18.7393V20.9893H5.25977Z" fill="white" stroke="white" strokeWidth="0.0205078"></path>
            </svg>
            <span className="text-xs font-bold">Unduh Laporan</span>
          </motion.button>
          
          <div className="relative">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-8 bg-white border border-slate-200 px-4 py-3 rounded-xl cursor-pointer"
              onClick={() => setIsPeriodOpen(!isPeriodOpen)}
            >
              <div className="text-slate-500 text-sm">{period}</div>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6L8 10L12 6" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </motion.div>
            
            <AnimatePresence>
              {isPeriodOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-lg z-10 w-full"
                >
                  {periods.map((p) => (
                    <motion.div
                      key={p}
                      className={`px-4 py-3 cursor-pointer ${p === period ? 'text-blue-600 font-medium' : 'text-slate-500'}`}
                      whileHover={{ backgroundColor: '#f8fafc' }}
                      onClick={() => {
                        setPeriod(p);
                        setIsPeriodOpen(false);
                      }}
                    >
                      {p}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-1.5">
        <div className="text-slate-500 text-xs">Total Pendapatan</div>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <div className="text-[#272742] text-lg font-bold">IDR25,500,000</div>
          <div className="text-[#5BCFC5] text-xs">+2.4%</div>
        </motion.div>
      </div>
      
      <div className="relative mt-6 h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#94a3b8', fontSize: 12 }}
              tickFormatter={(value) => `${value / 1000000}M`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#2563EB" 
              strokeWidth={3}
              dot={{ r: 3, fill: "#2563EB", stroke: "#2563EB" }}
              activeDot={{ r: 8, fill: "#2563EB", stroke: "#fff", strokeWidth: 2 }}
              animationDuration={1500}
            />
            <Line 
              type="monotone" 
              dataKey="expense" 
              stroke="#ED4F9D" 
              strokeWidth={3}
              dot={{ r: 3, fill: "#ED4F9D", stroke: "#ED4F9D" }}
              activeDot={{ r: 8, fill: "#ED4F9D", stroke: "#fff", strokeWidth: 2 }}
              animationDuration={1500}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
