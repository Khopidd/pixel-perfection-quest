import React from "react";

export function Calendar() {
  return (
    <div className="bg-white shadow-[0px_0px_2px_0px_rgba(0,0,0,0.12)] p-6 rounded-2xl">
      <div className="flex justify-between items-center mb-4">
        <div className="text-[#272742] text-base font-semibold">Januari 2025</div>
        <div className="flex gap-2">
          <button aria-label="Previous month">
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 15.5L7.5 10.5L12.5 5.5" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
          <button aria-label="Next month">
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 5.5L12.5 10.5L7.5 15.5" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="h-px bg-slate-100 w-full mb-6" />
      <div className="grid grid-cols-7 gap-2 text-center">
        <div className="text-[#272742] text-xs">Min</div>
        <div className="text-[#272742] text-xs">Sen</div>
        <div className="text-[#272742] text-xs">Sel</div>
        <div className="text-[#272742] text-xs">Rab</div>
        <div className="text-[#272742] text-xs">Kam</div>
        <div className="text-[#272742] text-xs">Jum</div>
        <div className="text-[#272742] text-xs">Sab</div>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center mt-4">
        <div className="text-[#272742] text-xs p-2.5">1</div>
        <div className="text-[#272742] text-xs p-2.5">2</div>
        <div className="text-[#272742] text-xs p-2.5">3</div>
        <div className="text-[#272742] text-xs p-2.5">4</div>
        <div className="text-[#272742] text-xs p-2.5">5</div>
        <div className="text-[#272742] text-xs p-2.5">6</div>
        <div className="text-[#272742] text-xs p-2.5">7</div>
        <div className="text-[#272742] text-xs p-2.5">8</div>
        <div className="text-[#272742] text-xs p-2.5">9</div>
        <div className="text-[#272742] text-xs p-2.5">10</div>
        <div className="text-[#272742] text-xs p-2.5">11</div>
        <div className="text-[#272742] text-xs p-2.5">12</div>
        <div className="text-[#272742] text-xs p-2.5">13</div>
        <div className="text-[#272742] text-xs p-2.5">14</div>
        <div className="text-[#272742] text-xs p-2.5">15</div>
        <div className="text-[#272742] text-xs p-2.5">16</div>
        <div className="text-[#272742] text-xs p-2.5">17</div>
        <div className="text-[#272742] text-xs p-2.5">18</div>
        <div className="text-[#272742] text-xs p-2.5">19</div>
        <div className="text-[#272742] text-xs p-2.5">20</div>
        <div className="text-[#272742] text-xs p-2.5">21</div>
        <div className="text-[#272742] text-xs p-2.5">22</div>
        <div className="text-white text-xs bg-blue-600 p-2.5 rounded-full">23</div>
        <div className="text-[#272742] text-xs p-2.5">24</div>
        <div className="text-[#272742] text-xs p-2.5">25</div>
        <div className="text-[#272742] text-xs p-2.5">26</div>
        <div className="text-[#272742] text-xs p-2.5">27</div>
        <div className="text-[#272742] text-xs p-2.5">28</div>
        <div className="text-[#272742] text-xs p-2.5">29</div>
        <div className="text-[#272742] text-xs p-2.5">30</div>
        <div className="text-slate-400 text-xs p-2.5">1</div>
        <div className="text-slate-400 text-xs p-2.5">2</div>
        <div className="text-slate-400 text-xs p-2.5">3</div>
        <div className="text-slate-400 text-xs p-2.5">4</div>
        <div className="text-slate-400 text-xs p-2.5">5</div>
      </div>
    </div>
  );
}
