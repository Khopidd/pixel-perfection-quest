
import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  title: string;
  description: string;
}

export function Header({ title, description }: HeaderProps) {
  // States for controlling animations
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Notification data
  const notifications = [
    {
      id: 1,
      division: "Divisi Mlbb",
      message: "menunggu catatan keuangan yang disetujui",
      time: "40 Minutes ago"
    },
    {
      id: 2,
      division: "Divisi Mlbb",
      message: "menunggu catatan keuangan yang disetujui",
      time: "40 Minutes ago"
    },
    {
      id: 3,
      division: "Divisi Mlbb",
      message: "menunggu catatan keuangan yang disetujui",
      time: "40 Minutes ago"
    }
  ];

  // Animation variants
  const popoverAnimation = {
    hidden: { 
      opacity: 0, 
      y: -5, 
      scale: 0.98,
      transition: { duration: 0.15, ease: "easeOut" }
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -5, 
      scale: 0.98, 
      transition: { duration: 0.15, ease: "easeIn" }
    }
  };

  // Notification item animation
  const itemAnimation = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.2 }
    })
  };

  return (
    <header className="h-[88px] bg-white border border-slate-100 flex items-center justify-between px-8 sticky top-0 z-10">
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-1"
      >
        <h1 className="text-[#272742] text-2xl font-medium">{title}</h1>
        <p className="text-slate-500 text-xs">{description}</p>
      </motion.div>
      
      <div className="flex items-center gap-6">
        <Popover open={isNotificationOpen} onOpenChange={setIsNotificationOpen}>
          <PopoverTrigger asChild>
            <motion.div 
              className="relative cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ rotate: isNotificationOpen ? [0, -5, 5, -5, 5, 0] : 0 }}
              transition={{ duration: 0.5 }}
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 13C18 12.4696 18.2107 11.9609 18.5858 11.5858C18.9609 11.2107 19.4696 11 20 11C20.5304 11 21.0391 11.2107 21.4142 11.5858C21.7893 11.9609 22 12.4696 22 13C23.1484 13.543 24.1274 14.3883 24.8321 15.4453C25.5367 16.5023 25.9404 17.7311 26 19V22C26.0753 22.6217 26.2954 23.2171 26.6428 23.7381C26.9902 24.2592 27.4551 24.6914 28 25H12C12.5449 24.6914 13.0098 24.2592 13.3572 23.7381C13.7046 23.2171 13.9247 22.6217 14 22V19C14.0596 17.7311 14.4633 16.5023 15.1679 15.4453C15.8726 14.3883 16.8516 13.543 18 13" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M17 25V26C17 26.7956 17.3161 27.5587 17.8787 28.1213C18.4413 28.6839 19.2044 29 20 29C20.7956 29 21.5587 28.6839 22.1213 28.1213C22.6839 27.5587 23 26.7956 23 26V25" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <circle cx="26" cy="14" r="3.5" fill="#ED4F9D" stroke="white"></circle>
              </svg>
            </motion.div>
          </PopoverTrigger>
          <AnimatePresence>
            {isNotificationOpen && (
              <PopoverContent className="w-[400px] p-0 bg-white rounded-2xl shadow-lg border border-slate-100" align="end" forceMount asChild>
                <motion.div
                  variants={popoverAnimation}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="overflow-hidden"
                >
                  <div className="p-6 border-b border-slate-100">
                    <h2 className="text-[#272742] text-2xl font-medium">Notifikasi</h2>
                  </div>
                  <div className="max-h-[400px] overflow-auto">
                    {notifications.map((notification, index) => (
                      <motion.div 
                        key={notification.id}
                        custom={index}
                        variants={itemAnimation}
                        initial="hidden"
                        animate="visible"
                        className="p-6 border-b border-slate-100 flex items-start gap-4"
                        whileHover={{ backgroundColor: '#f8fafc' }}
                      >
                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.3 12.23h-3.48c-.98 0-1.85.54-2.29 1.42l-.84 1.66c-.2.4-.6.65-1.04.65h-3.28c-.31 0-.75-.07-1.04-.65l-.84-1.65a2.567 2.567 0 00-2.29-1.42H2.7c-.39 0-.7-.31-.7-.7V5.39C2 3.15 3.15 2 5.39 2h13.22C20.85 2 22 3.15 22 5.39v6.14c0 .39-.31.7-.7.7z" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M5.39 2c-2.24 0-3.39 1.15-3.39 3.39v10.58c0 2.24 1.15 3.39 3.39 3.39h1.52c.98 0 1.85.54 2.29 1.42l.84 1.66c.2.4.6.65 1.04.65h1.81c.44 0 .84-.25 1.04-.65l.84-1.65a2.567 2.567 0 012.29-1.42h1.52c2.24 0 3.39-1.15 3.39-3.39v-1.95" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between mb-1">
                            <p className="text-[#272742] font-semibold">{notification.division}</p>
                          </div>
                          <p className="text-slate-500 text-sm mb-2">{notification.message}</p>
                          <div className="flex items-center gap-1 text-slate-400 text-xs">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="8" cy="8" r="6" stroke="#94A3B8" strokeWidth="1.5"/>
                              <path d="M8 5.33337V8.00004L9.33333 9.33337" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>{notification.time}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </PopoverContent>
            )}
          </AnimatePresence>
        </Popover>

        <Popover open={isProfileOpen} onOpenChange={setIsProfileOpen}>
          <PopoverTrigger asChild>
            <motion.div 
              className="w-10 h-10 overflow-hidden rounded-full cursor-pointer"
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.15)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ border: "2px solid transparent" }}
              animate={isProfileOpen ? { 
                border: "2px solid #2563EB",
                scale: 1.05,
                transition: { duration: 0.2 }
              } : {}}
            >
              <Avatar>
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback>MK</AvatarFallback>
              </Avatar>
            </motion.div>
          </PopoverTrigger>
          <AnimatePresence>
            {isProfileOpen && (
              <PopoverContent className="w-[300px] p-0 bg-white rounded-2xl shadow-lg border border-slate-100" align="end" forceMount asChild>
                <motion.div
                  variants={popoverAnimation}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="overflow-hidden"
                >
                  <motion.div 
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="p-6 border-b border-slate-100"
                  >
                    <h2 className="text-[#272742] text-xl font-medium">Mochamad Khopid</h2>
                    <p className="text-slate-500 text-sm">Admin</p>
                  </motion.div>
                  <div>
                    <motion.div 
                      className="p-4 flex items-center gap-3 cursor-pointer"
                      whileHover={{ backgroundColor: '#f8fafc', x: 3 }}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="text-slate-500">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="6" r="4" stroke="#64748B" strokeWidth="1.5"/>
                          <path d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z" stroke="#64748B" strokeWidth="1.5"/>
                        </svg>
                      </div>
                      <span className="text-slate-500 font-medium">Profil Saya</span>
                    </motion.div>
                    <motion.div 
                      className="p-4 flex items-center gap-3 cursor-pointer"
                      whileHover={{ backgroundColor: '#f8fafc', x: 3 }}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="text-red-500">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 16V18C16 20.2091 14.2091 22 12 22H6C3.79086 22 2 20.2091 2 18V6C2 3.79086 3.79086 2 6 2H12C14.2091 2 16 3.79086 16 6V8" stroke="#F64159" strokeWidth="1.5" strokeLinecap="round"/>
                          <path d="M19 12H9M9 12L12 15M9 12L12 9" stroke="#F64159" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-red-500 font-medium">Keluar</span>
                    </motion.div>
                  </div>
                </motion.div>
              </PopoverContent>
            )}
          </AnimatePresence>
        </Popover>
      </div>
    </header>
  );
}
