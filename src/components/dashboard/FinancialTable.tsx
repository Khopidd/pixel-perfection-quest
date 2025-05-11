import React from "react";

interface FinancialRecord {
  id: number;
  group: string;
  amount: string;
  isExpense: boolean;
  eventName: string;
  date: string;
  status: "Success" | "Pending" | "Canceled";
}

interface FinancialTableProps {
  records: FinancialRecord[];
}

export function FinancialTable({ records }: FinancialTableProps) {
  const getStatusClass = (status: string) => {
    switch (status) {
      case "Success":
        return "bg-[#5BCFC5]";
      case "Pending":
        return "bg-[#F6A723]";
      case "Canceled":
        return "bg-[#F64159]";
      default:
        return "bg-slate-500";
    }
  };

  return (
    <div className="bg-white shadow-[0px_0px_2px_0px_rgba(0,0,0,0.12)] p-6 rounded-2xl">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-[#272742] text-xl font-medium mb-1">Semua Catatan Keuangan</h2>
          <p className="text-slate-500 text-xs">Lihat semua riwayat keuangan acara</p>
        </div>
        <div className="flex items-center gap-8 bg-white border border-slate-200 px-4 py-3 rounded-xl">
          <div className="text-slate-500 text-sm">Hari Ini</div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6L8 10L12 6" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50">
              <th className="text-left text-[#272742] text-base font-semibold px-6 py-2">No</th>
              <th className="text-left text-[#272742] text-base font-semibold px-6 py-2">Grup</th>
              <th className="text-left text-[#272742] text-base font-semibold px-6 py-2">Jumlah</th>
              <th className="text-left text-[#272742] text-base font-semibold px-6 py-2">Nama Acara</th>
              <th className="text-left text-[#272742] text-base font-semibold px-6 py-2">Tanggal</th>
              <th className="text-left text-[#272742] text-base font-semibold px-6 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                <td className="text-[#272742] text-base px-6 py-2">{record.id}.</td>
                <td className="text-[#272742] text-base px-6 py-2">{record.group}</td>
                <td className={`${record.isExpense ? "text-[#F64159]" : "text-[#5BCFC5]"} text-base px-6 py-2`}>
                  {record.amount}
                </td>
                <td className="text-[#272742] text-base px-6 py-2">{record.eventName}</td>
                <td className="text-[#272742] text-base px-6 py-2">{record.date}</td>
                <td className="px-3 py-2">
                  <div className={`${getStatusClass(record.status)} text-white text-center text-sm w-[93px] py-1.5 rounded-[100px]`}>
                    {record.status}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
