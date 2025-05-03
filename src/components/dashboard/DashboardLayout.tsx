
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { cn } from '@/lib/utils';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const DashboardLayout: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="h-screen overflow-hidden bg-gray-50">
      <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
      <TopBar isSidebarCollapsed={isSidebarCollapsed} />
      
      <main className={cn(
        "h-full pt-14 transition-all duration-300 overflow-auto",
        isSidebarCollapsed ? "ml-[70px]" : "ml-[250px]"
      )}>
        <div className="container mx-auto py-8 px-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
