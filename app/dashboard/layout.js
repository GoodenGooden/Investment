
// Layout.jsx
"use client";

import { useState } from "react";
import Nav from "../_components/Nav";
import SideBar from "../_components/SideBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="h-screen flex flex-col">
      {/* Top Navigation */}
      <Nav onOpenSidebar={openSidebar} />

      <div className="flex flex-1 overflow-hidden">
        <SideBar isOpen={sidebarOpen} onClose={closeSidebar} />

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-2">
          {children}
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </div>
    </div>
  );
}

export default Layout;











/*


import Nav from "../_components/Nav";
import SideBar from "../_components/SideBar";
import { ToastContainer } from "react-toastify";
import "react-toastify"

function Layout({ children }) {
  return (
    <div className="h-screen flex flex-col">
      
      <Nav />

      
      <div className="flex flex-1 overflow-hidden">
        <SideBar />

    
        <div className="flex-1 overflow-y-auto p-2">
          {children}
          <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClickrtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
        </div>
      </div>
    </div>
  );
}

export default Layout;

*/