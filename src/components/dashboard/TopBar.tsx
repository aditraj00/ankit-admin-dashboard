
import React from 'react';
import { Search, Bell } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TopBarProps {
  isSidebarCollapsed: boolean;
}

const TopBar: React.FC<TopBarProps> = ({ isSidebarCollapsed }) => {
  return (
    <div className={cn(
      "fixed top-0 right-0 z-10 flex h-14 items-center border-b bg-white px-6",
      isSidebarCollapsed ? "left-[70px]" : "left-[250px]"
    )}>
      <div className="hidden md:block flex-1 relative max-w-md">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <input
          type="search"
          placeholder="Search..."
          className="h-9 w-full rounded-md border bg-transparent pl-10 pr-4 text-sm outline-none focus:border-black"
        />
      </div>

      <div className="ml-auto flex items-center gap-4">
        <button className="rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100 relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="flex items-center gap-3">
          <div className="hidden md:block text-right">
            <p className="text-sm font-medium">Admin User</p>
            <p className="text-xs text-muted-foreground">admin@ankitbooks.com</p>
          </div>
          
          <span className="h-8 w-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-medium">
            A
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
