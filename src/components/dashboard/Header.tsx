import React from "react";

interface HeaderProps {
  title: string;
  description: string;
}

export function Header({ title, description }: HeaderProps) {
  return (
    <header className="h-[88px] bg-white border border-slate-100 flex items-center justify-between px-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-[#272742] text-2xl font-medium">{title}</h1>
        <p className="text-slate-500 text-xs">{description}</p>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 13C18 12.4696 18.2107 11.9609 18.5858 11.5858C18.9609 11.2107 19.4696 11 20 11C20.5304 11 21.0391 11.2107 21.4142 11.5858C21.7893 11.9609 22 12.4696 22 13C23.1484 13.543 24.1274 14.3883 24.8321 15.4453C25.5367 16.5023 25.9404 17.7311 26 19V22C26.0753 22.6217 26.2954 23.2171 26.6428 23.7381C26.9902 24.2592 27.4551 24.6914 28 25H12C12.5449 24.6914 13.0098 24.2592 13.3572 23.7381C13.7046 23.2171 13.9247 22.6217 14 22V19C14.0596 17.7311 14.4633 16.5023 15.1679 15.4453C15.8726 14.3883 16.8516 13.543 18 13" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M17 25V26C17 26.7956 17.3161 27.5587 17.8787 28.1213C18.4413 28.6839 19.2044 29 20 29C20.7956 29 21.5587 28.6839 22.1213 28.1213C22.6839 27.5587 23 26.7956 23 26V25" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <circle cx="26" cy="14" r="3.5" fill="#ED4F9D" stroke="white"></circle>
          </svg>
        </div>
        <div className="w-10 h-10 overflow-hidden rounded-full">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <circle cx="20" cy="20" r="20" fill="url(#pattern0)"></circle>
            <defs>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0" transform="translate(0 -0.191576) scale(0.0013587)"></use>
              </pattern>
            </defs>
          </svg>
        </div>
      </div>
    </header>
  );
}
