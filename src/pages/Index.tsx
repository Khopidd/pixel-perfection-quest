
import React from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";

export default function Index() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
        body {
          font-family: 'Outfit', sans-serif;
        }
      `}</style>
      <DashboardLayout />
    </>
  );
}
