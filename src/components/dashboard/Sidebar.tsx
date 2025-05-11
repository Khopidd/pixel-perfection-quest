import React from "react";

export function Sidebar() {
  return (
    <aside className="w-[250px] bg-white border border-slate-100 max-md:hidden">
      <div className="p-8">
        <div className="flex items-center gap-3">
          <div className="flex w-[33px] h-[33px] justify-center items-center bg-blue-600 p-1.5 rounded-lg">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b55cd74d0f545ca25a5af7269567e040096e9ca6" alt="Logo" className="w-[22px] h-[22px]" />
          </div>
          <div className="text-[#272742] text-[26px] font-bold leading-[32.5px] tracking-[-0.29px]">
            Comfinotes
          </div>
        </div>
      </div>
      <div className="h-px bg-slate-100 w-full" />
      <nav className="flex flex-col gap-2 p-4">
        <div className="flex items-center gap-4 bg-slate-50 h-12 pr-4 rounded-[0px_12px_12px_0px]">
          <div className="w-1 h-12 bg-blue-600 rounded-[0px_4px_4px_0px]" />
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z" fill="#2563EB"></path>
              <path d="M19 4H15C14.4477 4 14 4.44772 14 5V9C14 9.55228 14.4477 10 15 10H19C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4Z" fill="#2563EB"></path>
              <path d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z" fill="#2563EB"></path>
              <path d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z" fill="#2563EB"></path>
              <path d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M19 4H15C14.4477 4 14 4.44772 14 5V9C14 9.55228 14.4477 10 15 10H19C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4Z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>
          <div className="text-blue-600 text-sm font-semibold">Dashboard</div>
        </div>
        <div className="flex items-center gap-4 h-12 pr-4 rounded-xl">
          <div className="w-1 h-8 bg-blue-600 opacity-0 rounded-[0px_4px_4px_0px]" />
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7Z" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M8 7V5C8 4.46957 8.21071 3.96086 8.58579 3.58579C8.96086 3.21071 9.46957 3 10 3H14C14.5304 3 15.0391 3.21071 15.4142 3.58579C15.7893 3.96086 16 4.46957 16 5V7" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M12 12V12.0092" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M3 13C5.79158 14.4067 8.87403 15.1394 12 15.1394C15.126 15.1394 18.2084 14.4067 21 13" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>
          <div className="text-slate-500 text-sm font-medium">Komunitas</div>
        </div>
      </nav>
    </aside>
  );
}
