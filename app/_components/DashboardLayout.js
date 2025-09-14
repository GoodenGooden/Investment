
"use client";
import { useState } from "react";
import Nav from "./Nav";
import SideBar from "./SideBar";

function DashboardLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarData, setSidebarData] = useState(null);

  const handleOpenSidebar = (data) => {
     console.log("📌 Sidebar data received:", data); // 👈 Add this line
    setSidebarData(data);
    setSidebarOpen(true);
  };

  return (
    <div className="h-screen flex flex-col">
      <Nav onOpenSidebar={handleOpenSidebar} />

      <div className="flex flex-1 overflow-hidden">
        <SideBar
          isOpen={isSidebarOpen}
          onClose={() => setSidebarOpen(false)}
          sidebarData={sidebarData}
        />

        <div className="flex-1 overflow-y-auto p-2">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
