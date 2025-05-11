import React from "react";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  iconBgColor: string;
  actionButton?: React.ReactNode;
}

export function StatCard({ title, value, icon, iconBgColor, actionButton }: StatCardProps) {
  return (
    <div className="bg-white shadow-[0px_0px_2px_0px_rgba(0,0,0,0.12)] flex flex-col gap-[13px] p-6 rounded-2xl">
      <div className="flex items-center justify-between">
        <div className={`w-[42px] h-[42px] ${iconBgColor} flex items-center justify-center rounded-[38px]`}>
          {icon}
        </div>
        {actionButton && actionButton}
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="text-slate-500 text-lg">{title}</div>
        <div className="text-[#272742] text-2xl font-semibold">{value}</div>
      </div>
    </div>
  );
}
