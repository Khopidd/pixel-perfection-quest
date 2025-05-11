
import React from "react";
import { motion } from "framer-motion";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { StatCard } from "./StatCard";
import { AnalyticsChart } from "./AnalyticsChart";
import { Calendar } from "./Calendar";
import { FinancialTable } from "./FinancialTable";

export function DashboardLayout() {
  // Financial records data
  const financialRecords = [
    {
      id: 1,
      group: "Divisi Logistik",
      amount: "- IDR2.450.000",
      isExpense: true,
      eventName: "Musyawarah Besar",
      date: "27, Jan 2025",
      status: "Success" as const,
    },
    {
      id: 2,
      group: "Divisi Eksternal",
      amount: "- IDR280.000",
      isExpense: true,
      eventName: "Makrab",
      date: "27, Jan 2025",
      status: "Pending" as const,
    },
    {
      id: 3,
      group: "Divisi Internal",
      amount: "- IDR1.525.000",
      isExpense: true,
      eventName: "Sewa Barang",
      date: "27, Jan 2025",
      status: "Canceled" as const,
    },
    {
      id: 4,
      group: "Divisi Logistik",
      amount: "- IDR750.000",
      isExpense: true,
      eventName: "Buat PDH Hima",
      date: "27, Jan 2025",
      status: "Success" as const,
    },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50 font-['Outfit']">
      <Sidebar />
      <div className="flex-1">
        <Header 
          title="Dashboard" 
          description="Informasi terperinci tentang keuangan komunitas Anda" 
        />
        <main className="p-8">
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-4 gap-7 max-md:grid-cols-2 max-sm:grid-cols-1"
          >
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <StatCard
                title="Total Pendapatan"
                value="IDR25.500.000"
                iconBgColor="bg-[#EAFFFD]"
                icon={
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9167 10.2209H6.41666" stroke="#5BCFC5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M1.83334 10.2209V5.98587C1.83334 4.11587 3.34585 2.60336 5.21585 2.60336H10.3675C12.2375 2.60336 13.75 3.76753 13.75 5.63753" stroke="#5BCFC5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M16.0233 11.1833C15.565 11.6233 15.345 12.3017 15.5283 12.9983C15.7575 13.8508 16.6009 14.3917 17.4809 14.3917H18.3333V15.7209C18.3333 17.7467 16.6925 19.3875 14.6667 19.3875H5.50001C3.47418 19.3875 1.83334 17.7467 1.83334 15.7209V9.30419C1.83334 7.27836 3.47418 5.63753 5.50001 5.63753H14.6667C16.6833 5.63753 18.3333 7.28753 18.3333 9.30419V10.6333H17.3433C16.83 10.6333 16.3625 10.835 16.0233 11.1833Z" stroke="#5BCFC5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M20.1667 11.5683V13.4567C20.1667 13.97 19.745 14.3917 19.2225 14.3917H17.4533C16.4633 14.3917 15.5559 13.6675 15.4734 12.6775C15.4184 12.1 15.6383 11.5592 16.0233 11.1833C16.3625 10.835 16.83 10.6333 17.3433 10.6333H19.2225C19.745 10.6333 20.1667 11.055 20.1667 11.5683Z" stroke="#5BCFC5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                }
                actionButton={
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 bg-[#5BCFC5] px-3 py-2 rounded-lg cursor-pointer"
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 3.75V14.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M3.75 9H14.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </motion.div>
                }
              />
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <StatCard
                title="Total Pengajuan"
                value="250"
                iconBgColor="bg-blue-50"
                icon={
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.25002 8.25L12.375 11L16.5 8.25M2.75002 12.375H4.58335M0.916687 9.625H4.58335" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M4.58337 6.87499V6.41666C4.58337 5.93043 4.77653 5.46412 5.12034 5.1203C5.46416 4.77648 5.93048 4.58333 6.41671 4.58333H18.3334C18.8196 4.58333 19.2859 4.77648 19.6297 5.1203C19.9736 5.46412 20.1667 5.93043 20.1667 6.41666V15.5833C20.1667 16.0696 19.9736 16.5359 19.6297 16.8797C19.2859 17.2235 18.8196 17.4167 18.3334 17.4167H6.41671C5.93048 17.4167 5.46416 17.2235 5.12034 16.8797C4.77653 16.5359 4.58337 16.0696 4.58337 15.5833V15.125" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round"></path>
                  </svg>
                }
              />
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <StatCard
                title="Pendapatan"
                value="IDR34.150.000"
                iconBgColor="bg-slate-50"
                icon={
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.4166 4.58333C17.7326 4.62916 18.0381 4.6863 18.3333 4.75474C18.8751 4.88033 19.1464 4.94266 19.4709 5.20208C19.6561 5.34966 19.8871 5.64208 19.9888 5.85749C20.1666 6.23333 20.1666 6.6 20.1666 7.33058V17.2883C20.1666 18.1986 19.2133 18.8237 18.3333 18.6202C17.49 18.4259 16.5605 18.3177 15.5833 18.3177C13.8261 18.3177 12.221 18.667 11 19.2427C9.77898 19.8183 8.1739 20.1667 6.41665 20.1667C5.49151 20.1697 4.569 20.0682 3.66665 19.8642C3.1249 19.7386 2.85356 19.6762 2.52906 19.4168C2.31624 19.2337 2.14044 19.0115 2.01115 18.7623C1.83331 18.3847 1.83331 18.0198 1.83331 17.2883V7.33058C1.83331 6.42033 2.78665 5.79516 3.66665 5.99866C3.96242 6.0665 4.26798 6.12363 4.58331 6.17008" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M5.04163 13.2917V13.2999M16.9583 11.451V11.4602M11 1.83333V5.49999M7.33329 4.58333V6.41666M14.6666 2.74999V4.58333M13.2916 12.375C13.2916 12.9828 13.0502 13.5657 12.6204 13.9954C12.1906 14.4252 11.6077 14.6667 11 14.6667C10.3922 14.6667 9.80928 14.4252 9.37951 13.9954C8.94974 13.5657 8.70829 12.9828 8.70829 12.375C8.70829 11.7672 8.94974 11.1843 9.37951 10.7545C9.80928 10.3248 10.3922 10.0833 11 10.0833C11.6077 10.0833 12.1906 10.3248 12.6204 10.7545C13.0502 11.1843 13.2916 11.7672 13.2916 12.375Z" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                }
              />
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <StatCard
                title="Pengeluaran"
                value="IDR8.650.000"
                iconBgColor="bg-pink-50"
                icon={
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.4167 17.4167C17.7327 17.3702 18.0382 17.3131 18.3334 17.2452C18.8751 17.1197 19.1465 17.0573 19.471 16.7979C19.6561 16.6503 19.8871 16.3579 19.9889 16.1425C20.1667 15.7667 20.1667 15.4 20.1667 14.6694V4.71166C20.1667 3.80141 19.2134 3.17624 18.3334 3.37974C17.49 3.57408 16.5605 3.68225 15.5834 3.68225C13.8261 3.68225 12.221 3.33299 11 2.75733C9.77904 2.18166 8.17396 1.83333 6.41671 1.83333C5.43954 1.83333 4.51004 1.94149 3.66671 2.13583C3.12496 2.26141 2.85362 2.32374 2.52912 2.58316C2.34396 2.72983 2.11296 3.02316 2.01121 3.23766C1.83337 3.61533 1.83337 3.98016 1.83337 4.71166V14.6694C1.83337 15.5797 2.78671 16.2048 3.66671 16.0013C3.96249 15.9329 4.26804 15.8757 4.58337 15.8299" stroke="#F64159" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M5.04175 8.70833V8.70008M16.9584 10.549V10.5398M11.0001 20.1667V16.5M7.33341 17.4167V15.5833M14.6667 19.25V17.4167M13.2917 9.62499C13.2917 9.01721 13.0503 8.43431 12.6205 8.00454C12.1908 7.57477 11.6079 7.33333 11.0001 7.33333C10.3923 7.33333 9.8094 7.57477 9.37963 8.00454C8.94986 8.43431 8.70841 9.01721 8.70841 9.62499C8.70841 10.2328 8.94986 10.8157 9.37963 11.2454C9.8094 11.6752 10.3923 11.9167 11.0001 11.9167C11.6079 11.9167 12.1908 11.6752 12.6205 11.2454C13.0503 10.8157 13.2917 10.2328 13.2917 9.62499Z" stroke="#F64159" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                }
              />
            </motion.div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-[1fr_359px] gap-6 mt-8 max-md:grid-cols-1"
          >
            <AnalyticsChart />
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Calendar />
            </motion.div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8"
          >
            <FinancialTable records={financialRecords} />
          </motion.section>
        </main>
      </div>
    </div>
  );
}
