import React from "react";

export function AnalyticsChart() {
  return (
    <div className="bg-white shadow-[0px_0px_2px_0px_rgba(0,0,0,0.12)] p-6 rounded-2xl">
      <div className="flex justify-between items-center mb-6">
        <div className="text-[#272742] text-lg font-medium">Analitik</div>
        <div className="flex items-center gap-3.5">
          <div className="flex items-center gap-1.5">
            <div className="w-3.5 h-3.5 bg-blue-600 rounded-full" />
            <div className="text-slate-500 text-xs">Pendapatan</div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3.5 h-3.5 bg-[#ED4F9D] rounded-full" />
            <div className="text-slate-500 text-xs">Pengeluaran</div>
          </div>
        </div>
        <div className="flex items-center gap-[18px]">
          <button className="flex items-center gap-2 bg-blue-600 text-white p-3 rounded-xl">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.4678 17.7812V17.7822L6.22461 12.5391L7.28906 11.4746L11.2432 15.4287L11.2598 15.4463V3.00977H12.7393V15.4463L16.7109 11.4746L17.7754 12.5391L12.5332 17.7822L12.5322 17.7812L12 18.291L11.4678 17.7812ZM5.25977 20.9893V19.5098H18.7393V20.9893H5.25977Z" fill="white" stroke="white" strokeWidth="0.0205078"></path>
            </svg>
            <span className="text-xs font-bold">Unduh Laporan</span>
          </button>
          <div className="flex items-center gap-8 bg-white border border-slate-200 px-4 py-3 rounded-xl">
            <div className="text-slate-500 text-sm">Hari Ini</div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6L8 10L12 6" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="text-slate-500 text-xs">Total Pendapatan</div>
        <div className="flex items-center gap-2">
          <div className="text-[#272742] text-lg font-bold">IDR25,500,000</div>
          <div className="text-[#5BCFC5] text-xs">+2.4%</div>
        </div>
      </div>
      <div className="relative mt-6">
        <div className="flex justify-between text-slate-500 text-xs mb-2">
          <div>10M</div>
          <div>5M</div>
          <div>3M</div>
          <div>2M</div>
          <div>1M</div>
        </div>
        <div className="h-px bg-slate-100 w-full" />
        <div>
          <svg width="653" height="152" viewBox="0 0 653 152" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[152px]">
            <path d="M1 93.9684C18 93.9684 30.5 71.0632 43.5327 71.0632C58.5653 71.0632 77.5 109.463 93.0707 109.463C109.651 109.463 119.5 89.2526 139.106 89.2526C164.5 89.2526 171.291 24.5789 190.646 24.5789C210 24.5789 217 128.5 237 128.5C257 128.5 270.679 68.5 287.5 68.5C302.886 68.5 320.485 89.2526 335.5 89.2526C356.5 89.2526 408.5 1.5 431 1.5C449.353 1.5 468.411 55.5 487.5 55.5C502.027 55.5 520.803 84.5 536 84.5C549.5 84.5 574.5 36.5 588.5 36.5C606.5 36.5 625.112 69.0421 652 69.0421V152L1 152V93.9684Z" fill="url(#paint0_linear_1_1466)"></path>
            <path d="M652 69.0421C625.112 69.0421 606.5 36.5 588.5 36.5C574.5 36.5 549.5 84.5 536 84.5C520.803 84.5 502.027 55.5 487.5 55.5C468.411 55.5 449.353 1.5 431 1.5C408.5 1.5 356.5 89.2526 335.5 89.2526C320.485 89.2526 302.886 68.5 287.5 68.5C270.679 68.5 257 128.5 237 128.5C217 128.5 210 24.5789 190.646 24.5789C171.291 24.5789 164.5 89.2526 139.106 89.2526C119.5 89.2526 109.651 109.463 93.0707 109.463C77.5 109.463 58.5653 71.0632 43.5327 71.0632C30.5 71.0632 18 93.9684 1 93.9684" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"></path>
            <defs>
              <linearGradient id="paint0_linear_1_1466" x1="326.5" y1="152" x2="326.5" y2="-68" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2563EB" stopOpacity="0"></stop>
                <stop offset="1" stopColor="#2563EB" stopOpacity="0.12"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex justify-between text-slate-500 text-xs mt-2">
          <div>Jun</div>
          <div>Jul</div>
          <div>Aug</div>
          <div>Sep</div>
          <div>Oct</div>
          <div>Nov</div>
          <div>Dec</div>
        </div>
      </div>
    </div>
  );
}
